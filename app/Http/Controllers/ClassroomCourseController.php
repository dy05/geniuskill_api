<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClassroomCourseRequest;
use App\Http\Requests\UpdateClassroomCourseRequest;
use App\Models\ClassroomCourse;

class ClassroomCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreClassroomCourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreClassroomCourseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClassroomCourse  $classroomCourse
     * @return \Illuminate\Http\Response
     */
    public function show(ClassroomCourse $classroomCourse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClassroomCourse  $classroomCourse
     * @return \Illuminate\Http\Response
     */
    public function edit(ClassroomCourse $classroomCourse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateClassroomCourseRequest  $request
     * @param  \App\Models\ClassroomCourse  $classroomCourse
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClassroomCourseRequest $request, ClassroomCourse $classroomCourse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClassroomCourse  $classroomCourse
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClassroomCourse $classroomCourse)
    {
        //
    }
}
