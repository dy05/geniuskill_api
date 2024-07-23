<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Level;
use App\Models\Subject;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function index(Request $request)
    {
        $subjectsQuery = Subject::query();
        $search = $request->get('search');
        if (strlen($search)) {
            $subjectsQuery->where('label', 'LIKE', "%$search%");
        }

        return view('subjects.index', [
            'subjects' => $subjectsQuery->get(),
            'search' => $search
        ]);
    }

    public function create()
    {
        return view('subjects.create', [
            'levels' => Level::query()->get(),
            'categories' => Category::query()
//                ->whereNotNull('parent_id')
                ->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required|string|unique:subjects,label',
            'slug' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'level_id' => 'required|exists:categories,id',
        ]);

        DB::beginTransaction();
        try {
            Subject::query()
                ->create($request->only([
                    'label',
                    'slug',
                    'category_id',
                    'level_id',
                ]));

            DB::commit();
            return redirect()->route('subjects.index')
                ->with([
                    'message' => 'Subject created successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function show(Subject $subject)
    {
        return view('subjects.show', ['subject' => $subject]);
    }

    public function edit(Subject $subject)
    {
        return view('subjects.edit', [
            'subject' => $subject,
            'levels' => Level::query()->get(),
            'categories' => Category::query()->get(),
        ]);
    }


    public function update(Subject $subject, Request $request)
    {
        $request->validate([
            'label' => 'required|string',
            'slug' => 'nullable|string',
            'category_id' => 'nullable|exists:subjects,id',
        ]);

        DB::beginTransaction();
        try {
            $subject->update($request->only([
                'label',
                'slug',
                'level_id',
                'category_id',
            ]));

            DB::commit();
            return redirect()->route('subjects.index')
                ->with([
                    'message' => 'Subject updated successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function destroy(Subject $subject)
    {
        try {
            $subject->delete();
            return redirect()->route('subjects.index')
                ->with([
                    'message' => 'Subject deleted successfully !'
                ]);
        } catch (Exception $exc) {
            return $this->redirect($exc);
        }
    }
}
