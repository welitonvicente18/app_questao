<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestoesController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/questoes/list');
    }

    public function create()
    {
        return Inertia::render('admin/questoes/create');
    }

    public function edit(int $id)
    {
        return Inertia::render('admin/questoes/edit', ['id' => $id]);
    }
}
