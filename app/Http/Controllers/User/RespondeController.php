<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RespondeController extends Controller
{
    public function escolhaCategoria()
    {
        return Inertia::render('user/responder/escolha-categoria/escolhaCategoria');
    }

    public function responderQuestao($id)
    {
        return Inertia::render('user/responder/questao/Questao', ['id' => $id]);
    }
}
