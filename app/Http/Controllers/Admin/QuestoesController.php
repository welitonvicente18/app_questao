<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestoesController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/questoes/page');
    }

    public function create()
    {
        return Inertia::render('admin/questoes/create/page');
    }

    public function edit(int $id)
    {
        return Inertia::render('admin/questoes/edit/[id]/page', ['id' => $id]);
    }
}
