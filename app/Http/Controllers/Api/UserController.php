<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function addProfessor(Request $request): JsonResponse
    {
        $request->validate([]);

        $data = [
            'lastname' => $request->input('lastname'),
            'firstname' => $request->input('firstname'),
            'email' => $request->input('email'),
            'gender' => $request->input('gender'),
            'birth_date' => $request->input('birth_date'),
            'role' => 'professor',
        ];

        if ($request->has('password')) {
            $data['password'] = bcrypt($request->input('password'));
        }

        $user = User::query()->create($data);

        return response()->json([
            'professor' => $user
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getProfessors(Request $request): JsonResponse
    {
        $queryBuilder = User::query()->where(['role' => 'professor']);
        $search = $request->get('search');

        if (mb_strlen($search) > 0) {
            $search = '%' . $search . '%';
            $queryBuilder = $queryBuilder
                ->where('lastname', 'like', $search)
                ->where('firstname', 'like', $search)
                ->where('email', 'like', $search);
        }

        return response()->json([
            'professors' => $queryBuilder->get()
        ]);
    }
}
