<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'subjects' => Subject::all()
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
            'level_id' => 'nullable',
            'category_id' => 'nullable',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $subject = Subject::query()->create($data);
            return response()->json([
                'subject' => $subject,
                'message' => 'Subject created',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Subject $subject
     * @return JsonResponse
     */
    public function show(Subject $subject): JsonResponse
    {
        return response()->json([
            'subject' => $subject
        ]);
    }

    /**
     * @param Request $request
     * @param Subject $subject
     * @return JsonResponse
     */
    public function update(Request $request, Subject $subject): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'level_id' => 'nullable',
            'category_id' => 'nullable',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $subject->update($data);
            return response()->json([
                'subject' => $subject,
                'message' => 'Subject updated',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Subject $subject
     * @return JsonResponse
     */
    public function destroy(Subject $subject): JsonResponse
    {
        try {
            $subject->delete();
            return response()->json([
                'message' => 'Subject deleted',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }
}
