<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Administrator;

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

Route::get('test', function () {
    return view('welcome');
});


Route::get('/admin/amqp', [Administrator::class, 'RabbitMq']); 


Route::get('/admin/login', [Administrator::class, 'login']); 
Route::post('/admin/loginaction', [Administrator::class, 'loginaction']); 

Route::group(['prefix' => 'admin','middleware' => 'admin:web'], function ($router) {

    //--------------     JWT Auth Controller     --------------//
        Route::get('/dashboard', [Administrator::class, 'dashboard']); 
        
        // Route::get('/admin', [Admin::class, 'show']); 
    });