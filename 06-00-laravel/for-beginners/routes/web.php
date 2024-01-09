<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return "hello world";
    return view('welcome');
});

// basic route
Route::get('/', "AppController@index");

//route with parameter 
Route::get('/about/{paramname}', "AppController@about");

//route with optional parameter 
Route::get('/services/{paramname?}', function () {
    return "hello from service section";
});

// Names routes
Route::get('/contact',"AppController@function-name")->name('contact') ;
