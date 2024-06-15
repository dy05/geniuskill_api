<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller 
{
    public function index(Request $request)
    {
        $categoriesQuery = Category::query();
        $search = $request->get('search');
        if (strlen($search)) {
            $categoriesQuery->where('label', 'LIKE', "%$search%");
        }

        return view('categories.index', [
            'categories' => $categoriesQuery->get(),
            'search' => $search
        ]);
    }

    public function create()
    {
        return view('categories.create', [
            'categories' => Category::query()->whereNull('parent_id')->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required|string|unique:categories,label',
            'slug' => 'nullable|string',
            'parent_id' => 'nullable|exists:categories,id',
        ]);

        DB::beginTransaction();
        try {
            Category::query()
                ->create($request->only([
                    'label',
                    'slug',
                    'parent_id',
                ]));

            DB::commit();
            return redirect()->route('categories.index')
                ->with([
                    'message' => 'category created successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function show(Category $category)
    {
        return view('categories.show', ['category' => $category]);
    }

    public function edit(Category $category)
    {
        return view('categories.edit', [
                'category' => $category,
            'categories' => Category::query()->whereNull('parent_id')->get()
        ]);
    }


    public function update(Category $category, Request $request)
    {
        $request->validate([
            'label' => 'required|string',
            'slug' => 'nullable|string',
            'parent_id' => 'nullable|exists:categories,id',
        ]);

        DB::beginTransaction();
        try {
            $category->update($request->only([
                'label',
                'slug',
                'parent_id',
            ]));

            DB::commit();
            return redirect()->route('categories.index')
                ->with([
                    'message' => 'category updated successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function destroy(Category $category)
    {
        try {
            $category->delete();
            return redirect()->route('categories.index')
                ->with([
                    'message' => 'Category deleted successfully !'
                ]);
        } catch (Exception $exc) {
            return $this->redirect($exc);
        }
    }
}
