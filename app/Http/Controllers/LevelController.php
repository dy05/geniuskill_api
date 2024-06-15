<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LevelController extends Controller 
{
    public function index(Request $request)
    {
        $levelsQuery = Level::query();
        $search = $request->get('search');
        if (strlen($search)) {
            $levelsQuery->where('label', 'LIKE', "%$search%");
        }

        return view('levels.index', [
            'levels' => $levelsQuery->get(),
            'search' => $search
        ]);
    }

    public function create()
    {
        return view('levels.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required|string',
            'slug' => 'nullable|string|unique:levels,slug',
        ]);

        DB::beginTransaction();
        try {
            Level::query()
                ->create($request->only([
                    'label',
                    'slug',
                ]));

            DB::commit();
            return redirect()->route('levels.index')
                ->with([
                    'message' => 'Level created successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function show(Level $level)
    {
        return view('levels.show', ['level' => $level]);
    }

    public function edit(Level $level)
    {
        return view('levels.edit', ['level' => $level]);
    }


    public function update(Level $level, Request $request)
    {
        $request->validate([
            'label' => 'required|string',
            'slug' => 'nullable|string|unique:slug,id,'. $level->id,
        ]);

        DB::beginTransaction();
        try {
            $level->update($request->only([
                'label',
                'slug',
            ]));

            DB::commit();
            return redirect()->route('levels.index')
                ->with([
                    'message' => 'Level updated successfully.'
                ]);
        } catch (Exception $exc) {
            DB::rollback();
            return $this->redirect($exc);
        }
    }

    public function destroy(Level $level)
    {
        try {
            $level->delete();
            return redirect()->route('levels.index')
                ->with([
                    'message' => 'Level deleted successfully !'
                ]);
        } catch (Exception $exc) {
            return $this->redirect($exc);
        }
    }
}
