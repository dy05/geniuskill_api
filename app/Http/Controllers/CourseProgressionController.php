<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseProgressionRequest;
use App\Http\Requests\UpdateCourseProgressionRequest;
use App\Models\CourseProgression;

class CourseProgressionController extends Controller
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
     * @param  \App\Http\Requests\StoreCourseProgressionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCourseProgressionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CourseProgression  $courseProgression
     * @return \Illuminate\Http\Response
     */
    public function show(CourseProgression $courseProgression)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CourseProgression  $courseProgression
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseProgression $courseProgression)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCourseProgressionRequest  $request
     * @param  \App\Models\CourseProgression  $courseProgression
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCourseProgressionRequest $request, CourseProgression $courseProgression)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CourseProgression  $courseProgression
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseProgression $courseProgression)
    {
        //
    }
}
