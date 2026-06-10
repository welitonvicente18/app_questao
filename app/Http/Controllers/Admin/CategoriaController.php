<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/categorias/list');
    }

    public function create()
    {
        return Inertia::render('admin/categorias/create/page');
    }

    public function edit(int $id)
    {
        return Inertia::render('admin/categorias/edit/[id]/page', ['id' => $id]);
    }
}
