<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admin\Categoria; // Assuming Category model exists or will be created

class CategoriaController extends Controller
{
    public function index()
    {
        $categoria = new Categoria();
        $categories = $categoria->orderBy('id')->get();
        return Inertia::render('admin/categorias/list', ['categories' => $categories]);
    }

    public function create()
    {
        return Inertia::render('admin/categorias/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $category = new Categoria();
        $category->name = $validated['name'];
        $category->description = $validated['description'];
        $category->user_id = auth()->user()->id;
        $category->save();

        return redirect()->route('admin.categories')->with('success', 'Categoria criada com sucesso!');
    }

    public function edit(int $id)
    {
        $category = Categoria::findOrFail($id);
        return Inertia::render('admin/categorias/edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, int $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        $category = Categoria::findOrFail($id);
        $category->update($validated);

        return redirect()->route('admin.categories')->with('success', 'Categoria atualizada com sucesso!');
    }

    public function destroy(int $id)
    {
        $category = Categoria::findOrFail($id);
        $category->delete();

        return redirect()->route('admin.categories')->with('success','Categoria deletada com sucesso!');
    }
}
