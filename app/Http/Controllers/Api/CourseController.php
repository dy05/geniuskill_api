<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseSchedule;
use App\Models\Quiz;
use App\Models\UserCourse;
use App\Models\UserFavorite;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'courses' => Course::all()
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'level_id' => 'nullable',
            'subject_id' => 'nullable',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $course = Course::query()->create($data);
            return response()->json([
                'course' => $course,
                'message' => 'Course created',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Course $course
     * @return JsonResponse
     */
    public function show(Course $course): JsonResponse
    {
        return response()->json([
            'course' => $course
        ]);
    }

    /**
     * @param Request $request
     * @param Course $course
     * @return JsonResponse
     */
    public function update(Request $request, Course $course): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'level_id' => 'nullable',
            'subject_id' => 'nullable',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $course->update($data);
            return response()->json([
                'course' => $course,
                'message' => 'Course updated',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Course $course
     * @return JsonResponse
     */
    public function destroy(Course $course): JsonResponse
    {
        try {
            $course->delete();
            return response()->json([
                'message' => 'Course deleted',
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
    public function plannings(Request $request): JsonResponse
    {
        $courseSchedulesQuery = CourseSchedule::query();
        $classroomId = $request->get('classroom_id');

        if ($classroomId) {
            $courseSchedulesQuery = $courseSchedulesQuery->where(['classroom_id' => $classroomId]);
        }

        return response()->json([
            'plannings' => $courseSchedulesQuery->get()
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function addPlanning(Request $request): JsonResponse
    {
        $courses = [];
        $plannings = $request->get('plannings', []);
        foreach ($plannings as $planning) {
            CourseSchedule::query()->create($planning);
        }

        return response()->json([
            'courses' => $courses
        ]);
    }

    /**
     * @param Course $course
     * @return JsonResponse
     */
    public function quizzes(Course $course): JsonResponse
    {
        $quizzes = Quiz::query()
            ->with(['course'])
            ->where(['course_id' => $course->id])
            ->get();

        return response()->json([
            'quizzes' => $quizzes
        ]);
    }

    /**
     * @param Course $course
     * @param Request $request
     * @return JsonResponse
     */
    public function addQuiz(Course $course, Request $request): JsonResponse
    {
        $request->validate([
            'course_id' => 'required',
        ]);

        $quiz = Quiz::query()
            ->create([
                'course_id' => $request->input('course_id'),
                'label' => $request->input('label')
            ]);

        return response()->json([
            'quiz' => $quiz
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function favorites(Request $request): JsonResponse
    {
        $userId = $request->get('user_id', $request->user()->id);

        $courses = Course::query()
            ->whereHas('favorites', function ($query) use ($userId) {
                $query->where(['user_id' => $userId]);
            })
            ->get();

        return response()->json([
            'favorite_courses' => $courses
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function addFavorite(Request $request): JsonResponse
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id'
        ]);

        try {
            UserFavorite::query()
                ->firstOrCreate([
                    'user_id' => $request->user()->id,
                    'course_id' => $request->input('course_id'),
                ]);

            return response()->json([
                'message' => 'Course added to favorites'
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param UserFavorite $userFavorite
     * @return JsonResponse
     */
    public function removeFavorite(UserFavorite $userFavorite): JsonResponse
    {
        try {
            $userFavorite->delete();

            return response()->json([
                'message' => 'Course removed from favorites'
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
    public function userCourses(Request $request): JsonResponse
    {
        $userId = $request->get('user_id', $request->user()->id);

        $courses = Course::query()
            ->whereHas('users', function ($query) use ($userId) {
                $query->where(['user_id' => $userId]);
            })
            ->get();

        return response()->json([
            'user_courses' => $courses
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function addUserCourse(Request $request): JsonResponse
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id'
        ]);

        try {
            UserCourse::query()
                ->firstOrCreate([
                    'user_id' => $request->user()->id,
                    'course_id' => $request->input('course_id'),
                ]);

            return response()->json([
                'message' => "Course added to user's courses list"
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param UserCourse $userCourse
     * @return JsonResponse
     */
    public function removeUserCourse(UserCourse $userCourse): JsonResponse
    {
        try {
            $userCourse->delete();

            return response()->json([
                'message' => "Course removed from user's courses list"
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }
}
