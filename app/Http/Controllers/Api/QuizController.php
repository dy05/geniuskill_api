<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\UserQuiz;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $query = Quiz::query()->with(['course']);

        $courseId = $request->get('course_id');
        if ($courseId) {
            $query = $query->where(['course_id' => $courseId]);
        }

        $userId = $request->get('user_id');
        if ($userId) {
            $query = $query->with(['answers'])
                ->whereHas('answers', function ($q) use ($userId) {
                    $q->where(['user_id' => $userId]);
                });
        }

        return response()->json([
            'quizzes' => $query->get()
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $countChoices = count($request->input('choices', []));

        $request->validate([
            'response' => 'required|integer|min:0|max:' . ($countChoices - 1),
            'title' => 'string',
            'course_id' => 'required|exists:courses,id',
            'choices' => 'required|array|min:2'
        ]);

        try {
            $data = $request->all();
            $quiz = Quiz::query()->create($data);
            return response()->json([
                'quiz' => $quiz,
                'message' => 'Quiz created',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Quiz $quiz
     * @return JsonResponse
     */
    public function show(Quiz $quiz): JsonResponse
    {
        $quiz->loadMissing(['users', 'answers']);

        return response()->json([
            'quiz' => $quiz
        ]);
    }

    /**
     * @param Request $request
     * @param Quiz $quiz
     * @return JsonResponse
     */
    public function update(Request $request, Quiz $quiz): JsonResponse
    {
        $countChoices = count($quiz->choices);

        if ($request->has('choices')) {
            $countChoices = count($request->input('choices', []));
        }

        $request->validate([
            'title' => 'sometimes|string',
            'response' => 'sometimes|required|integer|min:0|max:' . ($countChoices - 1),
            'choices' => 'sometimes|required|array|min:2'
        ]);

        try {
            $data = $request->all();
            $quiz->update($data);
            return response()->json([
                'quiz' => $quiz,
                'message' => 'Quiz updated',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Quiz $quiz
     * @return JsonResponse
     */
    public function destroy(Quiz $quiz): JsonResponse
    {
        try {
            $quiz->delete();
            return response()->json([
                'message' => 'Quiz deleted',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function answer(Request $request): JsonResponse
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id|unique:user_quizzes,quiz_id,user_id,' . $request->input('user_id'),
//            'quiz_id' => 'required|exists:quizzes,id|unique:user_quizzes,quiz_id,NULL,id,user_id,' . $request->input('user_id'),
            'choice' => 'required',
        ]);

        $quiz = Quiz::query()
            ->where(['id' => $request->input('quiz_id')])
            ->first();
        $userId = $request->input('user_id', $request->user()->id);
        $response = (string)$request->input('choice');

        try {
            $answer = UserQuiz::query()
                ->create([
                    'quiz_id' => $request->input('quiz_id'),
                    'status' => $response === (string)$quiz->response ? '1' : '0',
                    'choice' => $response,
                    'user_id' => $userId
                ]);

            return response()->json([
                'answer' => $answer
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }
}
