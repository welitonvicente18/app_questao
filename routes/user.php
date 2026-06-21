<?php
use App\Http\Controllers\User\RespondeController;
use App\Http\Controllers\User\DashboardController as DashboardUserController;
use App\Http\Controllers\User\PerfilController;
use App\Http\Controllers\User\DesempenhoController;


Route::get('/dashboard', DashboardUserController::class)->name('dashboard');
Route::get('/perfil', [PerfilController::class, 'perfil'])->name('profile');
Route::post('/perfil', [PerfilController::class, 'update'])->name('profile.update');
Route::get('/desempenho', [DesempenhoController::class, 'desempenho'])->name('performance');
// Responder
Route::get('/responder/escolha-categoria', [RespondeController::class, 'escolhaCategoria'])->name('user.responder.escolhacategoria');
Route::get('/responder/questao/{id}', [RespondeController::class, 'responderQuestao'])->name('user.responder.questao');
