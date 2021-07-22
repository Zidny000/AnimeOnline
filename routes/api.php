<?php

use App\Models\Front;
use App\Models\Video;
use App\Models\Register;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/front/{category}' , function($category){
    $front = Front::where( 'category',$category)->get();
    return $front;
});
Route::get('/categories/{gener}' , function($gener){
    $front = Front::where( 'gener', 'LIKE', '%'.$gener.'%')->get();
    return $front;
});

Route::get('/details/{id}' , function($id){
    $detail = Front::where( 'id',$id)->get();
    return $detail;
});

Route::get('/details/similar/{gener}' , function($gener){
    $similar = Front::where( 'gener', 'LIKE', '%'.$gener.'%')->inRandomOrder()->limit(4)->get();
    return $similar;
});

Route::get('/videos/{id}' , function($id){
    $watched_num =  Front::find($id)->watched_int + 1;
    Front::find($id)->update(['watched_int' => $watched_num]);
    $videos = Video::where( 'anime_id',$id)->get();   
    return $videos;
});

Route::post('/register',function(){
    User::create([
        'email' => request('email'),
        'name' => request('name'),
        'password' => request('pass')
    ]);

});

Route::post('/login',function(){

    return request('password');

    if(Auth::attempt(['email' => request('email'),'password' => request('passowrd') ])){
       
        return $game;
    }else{
       return "Not Logged in";
    }
});