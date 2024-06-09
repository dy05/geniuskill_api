<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\ClassroomCourse;
use App\Models\Course;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'classrooms' => Classroom::all()
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'label' => 'string',
            'slug' => 'nullable|string',
            'level_id' => 'nullable'
        ]);

        try {
            $data = $request->all();
            $classroom = Classroom::query()->create($data);
            return response()->json([
                'classroom' => $classroom,
                'message' => 'Classroom created',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Classroom $classroom
     * @return JsonResponse
     */
    public function show(Classroom $classroom): JsonResponse
    {
        $classroom->loadMissing(['courses']);

        return response()->json([
            'classroom' => $classroom
        ]);
    }

    /**
     * @param Classroom $classroom
     * @param Request $request
     * @return JsonResponse
     */
    public function addCourse(Classroom $classroom, Request $request): JsonResponse
    {
        try {
            $course = Course::query()
                ->where(['id' => $request->input('course_id')])
                ->first();

            ClassroomCourse::query()
                ->create([
                    'classroom_id' => $classroom->id,
                    'course_id' => $course->id,
                ]);

            return response()->json([
                'classroom' => $classroom,
                'course' => $course
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Classroom $classroom
     * @param Request $request
     * @return JsonResponse
     */
    public function addCourses(Classroom $classroom, Request $request): JsonResponse
    {
        try {
            $courses = Course::query()
                ->whereIn('id', $request->input('course_ids'))
                ->get();

            foreach ($courses as $course) {
                ClassroomCourse::query()
                    ->create([
                        'classroom_id' => $classroom->id,
                        'course_id' => $course->id,
                    ]);
            }

            return response()->json([
                'classroom' => $classroom,
                'courses' => $courses
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param ClassroomCourse $classroomCourse
     * @return JsonResponse
     */
    public function removeCourse(ClassroomCourse $classroomCourse): JsonResponse
    {
        try {
            $classroom = $classroomCourse->classroom;
            $courses = collect($classroomCourse->courses)
                ->where('course_id', '!=', $classroomCourse->course_id);
            $classroomCourse->delete();

            return response()->json([
                'classroom' => $classroom,
                'courses' => $courses
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
    public function removeCourses(Request $request): JsonResponse
    {
        try {
            $courseIds = $request->input('course_ids');

            ClassroomCourse::query()
                ->whereIn('id', $courseIds)
                ->delete();

            return response()->json([
                'course_ids' => $courseIds,
                'message' => 'Classroom courses deleted'
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Request $request
     * @param Classroom $classroom
     * @return JsonResponse
     */
    public function update(Request $request, Classroom $classroom): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'slug' => 'nullable|string',
            'level_id' => 'nullable'
        ]);

        try {
            $data = $request->all();
            $classroom->update($data);
            return response()->json([
                'classroom' => $classroom,
                'message' => 'Classroom updated',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Classroom $classroom
     * @return JsonResponse
     */
    public function destroy(Classroom $classroom): JsonResponse
    {
        try {
            $classroom->delete();
            return response()->json([
                'message' => 'Classroom deleted',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }
}
