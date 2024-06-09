<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Level;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'levels' => Level::all()
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $level = Level::query()->create($data);
            return response()->json([
                'level' => $level,
                'message' => 'Level created',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Level $level
     * @return JsonResponse
     */
    public function show(Level $level): JsonResponse
    {
        return response()->json([
            'level' => $level
        ]);
    }

    /**
     * @param Request $request
     * @param Level $level
     * @return JsonResponse
     */
    public function update(Request $request, Level $level): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $level->update($data);
            return response()->json([
                'level' => $level,
                'message' => 'Level updated',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Level $level
     * @return JsonResponse
     */
    public function destroy(Level $level): JsonResponse
    {
        try {
            $level->delete();
            return response()->json([
                'message' => 'Level deleted',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }
}
