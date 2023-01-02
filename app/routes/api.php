<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\NotesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\Http\Controllers\PostController;

Route::resource('posts', PostController::class)->only([
    'destroy', 'show', 'store', 'update'
]);

Route::resource('notes', NotesController::class);
Route::get('notes/search/{title}', [NotesController::class, 'search']);

// Route::get('/notes', [NotesController::class, 'index']);
// Route::post('/notes', [NotesController::class, 'store']);

// Route::get('/notes', function(){
//     return Notes::all();
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
