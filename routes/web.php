<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/', [LoginController::class, 'login'])->name('login');
Route::get('/login', [LoginController::class, 'login'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'register'])->name('register.store');

// Admin Routes
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    require_once 'admin.php';
});

Route::middleware(['auth', 'verified'])->prefix('arena')->group(function () {
   require_once 'user.php';
});
