<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Level;
use App\Models\Subject;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $coursesQuery = Course::query()->with(['level', 'subject']);
        $search = $request->get('search');
        if (strlen($search)) {
            $coursesQuery->where('label', 'LIKE', "%$search%");
        }

        return view('courses.index', [
            'courses' => $coursesQuery->get(),
            'search' => $search
        ]);
    }

    public function create()
    {
        return view('courses.create', [
            'subjects' => Subject::query()->get(),
            'levels' => Level::query()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required|string|unique:courses,label',
            'slug' => 'nullable|string',
            'level_id' => 'nullable|exists:levels,id',
            'subject_id' => 'required|exists:subjects,id',
        ]);

        DB::beginTransaction();
        try {
            Course::query()
                ->create($request->only([
                    'label',
                    'slug',
                    'level_id',
                    'subject_id',
                ]));

            DB::commit();
            return redirect()->route('courses.index')
                ->with([
                    'message' => 'Course created successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function show(Course $course)
    {
        return view('courses.show', ['course' => $course]);
    }

    public function edit(Course $course)
    {
        return view('courses.edit', [
            'course' => $course,
            'subjects' => Subject::query()->get(),
            'levels' => Level::query()->get(),
        ]);
    }


    public function update(Course $course, Request $request)
    {
        $request->validate([
            'label' => 'required|string',
            'slug' => 'nullable|string',
            'level_id' => 'nullable|exists:levels,id',
            'subject_id' => 'required|exists:subjects,id',
        ]);

        DB::beginTransaction();
        try {
            $course->update($request->only([
                'label',
                'slug',
                'level_id',
                'subject_id',
            ]));

            DB::commit();
            return redirect()->route('courses.index')
                ->with([
                    'message' => 'Course updated successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function destroy(Course $course)
    {
        try {
            $course->delete();
            return redirect()->route('courses.index')
                ->with([
                    'message' => 'Course deleted successfully !'
                ]);
        } catch (Exception $exc) {
            return $this->redirect($exc);
        }
    }
}
