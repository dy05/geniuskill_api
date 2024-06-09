<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $query = Category::query();

        if ($request->has('only_parent')) {
            $query = $query->whereNull('parent_id')
                ->with(['children']);
        }

        return response()->json([
            'categories' => $query->get()
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
            'parent_id' => 'nullable',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $category = Category::query()->create($data);
            return response()->json([
                'category' => $category,
                'message' => 'Category created',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Category $category
     * @return JsonResponse
     */
    public function show(Category $category): JsonResponse
    {
        $category->loadMissing(['parent', 'children']);

        return response()->json([
            'category' => $category
        ]);
    }

    /**
     * @param Request $request
     * @param Category $category
     * @return JsonResponse
     */
    public function update(Request $request, Category $category): JsonResponse
    {
        $request->validate([
            'label' => 'string',
            'parent_id' => 'nullable',
            'slug' => 'nullable|string'
        ]);

        try {
            $data = $request->all();
            $category->update($data);
            return response()->json([
                'category' => $category,
                'message' => 'Category updated',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }

    /**
     * @param Category $category
     * @return JsonResponse
     */
    public function destroy(Category $category): JsonResponse
    {
        try {
            $category->delete();
            return response()->json([
                'message' => 'Category deleted',
            ]);
        } catch (Exception $exc) {
            return response()->json([
                'message' => $exc->getMessage(),
            ], 400);
        }
    }
}
