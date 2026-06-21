<?php
use App\Http\Controllers\Admin\CategoriaController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\QuestoesController;

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
Route::post('/categorias/salvar', [CategoriaController::class, 'store'])->name('admin.categories.store');
Route::get('/categorias/edit/{id}', [CategoriaController::class, 'edit'])->name('admin.categories.edit');
Route::put('/categorias/atualizar/{id}', [CategoriaController::class, 'update'])->name('admin.categories.update');
Route::post('/categorias/delete/{id}', [CategoriaController::class,'destroy'])->name('admin.categories.delete');
