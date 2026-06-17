<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class PerfilController extends Controller
{
    public function perfil()
    {
        $user = auth()->user();
        return Inertia::render('user/perfil/perfil', ['user' => $user]);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable', 'string', 'min:8'],
        ]);

        $user->fill([
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();

        return back()->with('success', 'Perfil atualizado com sucesso!');
    }
}
