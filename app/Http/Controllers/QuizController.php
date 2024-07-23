<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Quiz;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuizController extends Controller
{
    public function index(Request $request)
    {
        $quizzesQuery = Quiz::query()
            ->with(['course']);
        $search = $request->get('search');
        $type = $request->get('type');
        $courseId = $request->get('course_id');

        if ($courseId) {
            $quizzesQuery = $quizzesQuery->where(['course_id' => $courseId]);
        }

        $userId = $request->get('user_id');
        if ($userId) {
            $quizzesQuery = $quizzesQuery->with(['answers'])
                ->whereHas('answers', function ($q) use ($userId) {
                    $q->where(['user_id' => $userId]);
                });
        }

        try {
            if (strlen($type) && strlen($search)) {
                $quizzesQuery->where($type, 'LIKE', "%$search%");
            }
        } catch (Exception $exc) {
            Log::error(self::class, [$exc->getMessage()]);
        }

        return view('quizzes.index', [
            'quizzes' => $quizzesQuery->get(),
            'search' => $search,
            'type' => $type,
        ]);
    }

    public function create()
    {
        return view('quizzes.create', [
            'courses' => Course::query()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'response' => 'required|integer|min:0',
            'title' => 'required|string|unique:quizzes,title',
            'course_id' => 'required|exists:courses,id',
            'choices' => 'required|array|min:2',
        ]);

        DB::beginTransaction();
        try {
            $data = $request->all();
            $data['choices'] = json_encode(array_values($data['choices']));
            Quiz::query()->create($data);

            DB::commit();
            return redirect()->route('quizzes.index')
                ->with([
                    'message' => 'Quiz created successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function show(Quiz $quiz)
    {
        return view('quizzes.show', ['quiz' => $quiz]);
    }

    public function edit(Quiz $quiz)
    {
        return view('quizzes.edit', [
            'quiz' => $quiz,
            'courses' => Course::query()->get(),
        ]);
    }


    public function update(Quiz $quiz, Request $request)
    {
        $request->validate([
            'title' => 'required|string|unique:quizzes,title,' . $quiz->id,
            'response' => 'required|integer|min:0',
            'choices' => 'required|array|min:2',
            'course_id' => 'required|exists:courses,id',
        ]);

        DB::beginTransaction();
        try {
            $data = $request->all();
            $data['choices'] = json_encode(array_values($data['choices']));
            $quiz->update($data);

            DB::commit();
            return redirect()->route('quizzes.index')
                ->with([
                    'message' => 'Quiz updated successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function destroy(Quiz $quiz)
    {
        try {
            $quiz->delete();
            return redirect()->route('quizzes.index')
                ->with([
                    'message' => 'Quiz deleted successfully !'
                ]);
        } catch (Exception $exc) {
            return $this->redirect($exc);
        }
    }
}
