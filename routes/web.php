<?php

use App\Http\Controllers\Admin\CategoriaController;
use App\Http\Controllers\User\RespondeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\User\DashboardController as DashboardUserController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\QuestoesController;
use App\Http\Controllers\User\PerfilController;
use App\Http\Controllers\User\DesempenhoController;

Route::get('/', [LoginController::class, 'login'])->name('login');
Route::get('/login', [LoginController::class, 'login'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'register'])->name('register.store');

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('admin.dashboard');
    // User
    Route::get('/usuarios', [UserController::class, 'index'])->name('admin.users');
    // Questões
    Route::get('/questoes', [QuestoesController::class, 'index'])->name('admin.questions');
    Route::get('/questoes/create', [QuestoesController::class, 'create'])->name('admin.questions.create');
    Route::get('/questoes/edit/{id}', [QuestoesController::class, 'edit'])->name('admin.questions.edit');
    // Categorias
    Route::get('/categorias', [CategoriaController::class, 'index'])->name('admin.categories');
    Route::get('/categorias/create', [CategoriaController::class, 'create'])->name('admin.categories.create');
    Route::get('/categorias/edit/{id}', [CategoriaController::class, 'edit'])->name('admin.categories.edit');
});

Route::middleware(['auth', 'verified'])->prefix('arena')->group(function () {
    Route::get('/dashboard', DashboardUserController::class)->name('dashboard');
    Route::get('/perfil', [PerfilController::class, 'perfil'])->name('profile');
    Route::post('/perfil', [PerfilController::class, 'update'])->name('profile.update');
    Route::get('/desempenho', [DesempenhoController::class, 'desempenho'])->name('performance');
    // Responder
    Route::get('/responder/escolha-categoria', [RespondeController::class, 'escolhaCategoria'])->name('user.responder.escolhacategoria');
    Route::get('/responder/questao/{id}', [RespondeController::class, 'responderQuestao'])->name('user.responder.questao');
});
