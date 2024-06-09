<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseScheduleRequest;
use App\Http\Requests\UpdateCourseScheduleRequest;
use App\Models\CourseSchedule;

class CourseScheduleController extends Controller
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
     * @param  \App\Http\Requests\StoreCourseScheduleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCourseScheduleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CourseSchedule  $courseSchedule
     * @return \Illuminate\Http\Response
     */
    public function show(CourseSchedule $courseSchedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CourseSchedule  $courseSchedule
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseSchedule $courseSchedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCourseScheduleRequest  $request
     * @param  \App\Models\CourseSchedule  $courseSchedule
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCourseScheduleRequest $request, CourseSchedule $courseSchedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CourseSchedule  $courseSchedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseSchedule $courseSchedule)
    {
        //
    }
}
