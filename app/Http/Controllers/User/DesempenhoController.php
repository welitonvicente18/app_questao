<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DesempenhoController extends Controller
{
    public function desempenho()
    {
        return Inertia::render('user/desempenho/page');
    }
}
