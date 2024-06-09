<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRewardRequest;
use App\Http\Requests\UpdateUserRewardRequest;
use App\Models\UserReward;

class UserRewardController extends Controller
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
     * @param  \App\Http\Requests\StoreUserRewardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRewardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserReward  $userReward
     * @return \Illuminate\Http\Response
     */
    public function show(UserReward $userReward)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserReward  $userReward
     * @return \Illuminate\Http\Response
     */
    public function edit(UserReward $userReward)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRewardRequest  $request
     * @param  \App\Models\UserReward  $userReward
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRewardRequest $request, UserReward $userReward)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserReward  $userReward
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserReward $userReward)
    {
        //
    }
}
