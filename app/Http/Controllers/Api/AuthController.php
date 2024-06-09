<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $request->authenticate();
        $user = $request->user();
        $token = $user->createToken(now()->timestamp);

        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    }
}
