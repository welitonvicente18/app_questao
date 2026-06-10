<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RespondeController extends Controller
{
    public function escolhaCategoria()
    {
        return Inertia::render('user/responder/escolha-categoria/page');
    }

    public function responderQuestao($id)
    {
        return Inertia::render('user/responder/questao/[id]/page', ['id' => $id]);
    }
}
