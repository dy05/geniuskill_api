<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'string',
            'password' => 'string|confirmed',
            'passwordl' => 'string',
            'birth_date' => 'nullable|date_format:Y-m-d',
        ]);

        $data = $request->all();
        $data['password'] = bcrypt($data['password']);

        /** @var User $user */
        $user = User::query()->create($data);
        $token = $user->createToken(now()->timestamp);

        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function currentUser(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'user' => $user,
        ]);
    }
}
