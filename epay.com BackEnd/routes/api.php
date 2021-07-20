<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\DataController;

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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

//Customer-Part

//Login-Registration
Route::post('/user-signup',[UserController::class,'userSignUp']);
Route::post('/user-login',[UserController::class,'userLogin']);

//Customer-Profile
Route::get('/',[DataController::class,'index']);
Route::get('/view/{id}', [DataController::class,'show']);
Route::post('/add', [DataController::class,'store']);
Route::get('edit/{id}', [DataController::class,'edit']);
Route::post('/update/{id}', [DataController::class,'update']);
Route::delete('/delete/{id}', [DataController::class,'destroy']);
Route::post('/update/image/{id}', [DataController::class,'updateimage']);

//Balance
Route::get('/view/balance/{id}', [BalanceController::class,'balanceshow']);
Route::get('/balanceindex',[BalanceController::class,'balanceindex']);
Route::get('edit/balanceedit/{id}', [BalanceController::class,'balanceedit']);
Route::post('/update/balanceupdate/{id}', [BalanceController::class,'balanceupdate']);
Route::get('edit/balanceeditAdded/{id}', [BalanceController::class,'balanceeditAdded']);
Route::post('/update/balanceupdateAdded/{id}', [BalanceController::class,'balanceupdateAdded']);
Route::get('edit/balanceeditRecharge/{id}', [BalanceController::class,'balanceeditrecharge']);
Route::post('/update/balanceupdateRecharge/{id}', [BalanceController::class,'balanceupdaterecharge']);
Route::get('edit/balanceeditBill/{id}', [BalanceController::class,'balanceeditbill']);
Route::post('/update/balanceupdateBill/{id}', [BalanceController::class,'balanceupdatebill']);
Route::get('edit/balanceeditLoan/{id}', [BalanceController::class,'balanceeditloan']);
Route::post('/update/balanceupdateLoan/{id}', [BalanceController::class,'balanceupdateloan']);
Route::get('edit/balanceeditLoanAp/{id}', [BalanceController::class,'balanceeditloanAp']);
Route::post('/update/balanceupdateLoanAp/{id}', [BalanceController::class,'balanceupdateloanAp']);
Route::get('edit/balanceeditLoanPaid/{id}', [BalanceController::class,'balanceeditloanPaid']);
Route::post('/update/balanceupdateLoanPaid/{id}', [BalanceController::class,'balanceupdateloanPaid']);
Route::delete('/delete/balancedestroy/{id}', [BalanceController::class,'balancedestroy']);

//Review
Route::get('/view/review/{id}', [DataController::class,'reviewshow']);
Route::get('/reviewindex',[DataController::class,'reviewindex']);
Route::post('/add/reviewstore', [DataController::class,'reviewstore']);
Route::get('edit/reviewedit/{id}', [DataController::class,'reviewedit']);
Route::post('/update/reviewupdate/{id}', [DataController::class,'reviewupdate']);
Route::delete('/delete/reviewdestroy/{id}', [DataController::class,'reviewdestroy']);

//Message
Route::get('/view/message/{id}', [DataController::class,'messageshow']);
Route::get('/messageindex',[DataController::class,'messageindex']);
Route::post('/add/messagestore', [DataController::class,'messagestore']);
Route::get('edit/messageedit/{id}', [DataController::class,'messageedit']);
Route::post('/update/messageupdate/{id}', [DataController::class,'messageupdate']);
Route::delete('/delete/messagedestroy/{id}', [DataController::class,'messagedestroy']);