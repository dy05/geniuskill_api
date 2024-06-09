<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserClassroomRequest;
use App\Http\Requests\UpdateUserClassroomRequest;
use App\Models\UserClassroom;

class UserClassroomController extends Controller
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
     * @param  \App\Http\Requests\StoreUserClassroomRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserClassroomRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserClassroom  $userClassroom
     * @return \Illuminate\Http\Response
     */
    public function show(UserClassroom $userClassroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserClassroom  $userClassroom
     * @return \Illuminate\Http\Response
     */
    public function edit(UserClassroom $userClassroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserClassroomRequest  $request
     * @param  \App\Models\UserClassroom  $userClassroom
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserClassroomRequest $request, UserClassroom $userClassroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserClassroom  $userClassroom
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserClassroom $userClassroom)
    {
        //
    }
}
