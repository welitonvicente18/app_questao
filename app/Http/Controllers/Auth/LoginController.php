<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia::render('auth/login');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $autentication = Auth::attempt($credentials, $request->remember);

        if ($autentication === true) {

            $user = auth()->user()->toArray();
            $request->session()->regenerate();

            // Usuário é admin, redirecionar para a rota de admin
            if($user['is_admin'] === 1){
                return redirect()->intended('/admin/dashboard');
            }
            return redirect()->intended('/arena/dashboard');
        }

        return back()->withErrors([
            'email' => 'As credenciais fornecidas não correspondem aos nossos registros.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
