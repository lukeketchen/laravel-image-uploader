<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Auth
Route::post('login', [App\Http\Controllers\API\AuthController::class, 'login']);
Route::post('register', [App\Http\Controllers\API\AuthController::class, 'register']);
Route::post('logout', [App\Http\Controllers\API\AuthController::class, 'logout'])->middleware('auth:sanctum');




Route::get('posts', "PostController@index"); // List Posts
Route::post('posts', "PostController@store"); // Create Post
Route::get('posts/{id}', "PostController@show"); // Detail of Post
Route::put('posts/{id}', "PostController@update"); // Update Post
Route::delete('posts/{id}', "PostController@destroy"); //Delete Post





// Route::post('/register', "UserController@create"); // Create User
