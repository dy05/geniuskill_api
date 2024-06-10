<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\LevelController;
use App\Http\Controllers\Api\QuizController;
use App\Http\Controllers\Api\SubjectController;
use App\Http\Controllers\Api\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/auth'], function() {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/user', [AuthController::class, 'currentUser']);
    Route::post('/professors', [UserController::class, 'addProfessor']);
    Route::get('/professors', [UserController::class, 'getProfessors']);
    Route::resource('categories', CategoryController::class);
    Route::resource('subjects', SubjectController::class);
    Route::resource('levels', LevelController::class);
    Route::get('courses/favorites', [CourseController::class, 'favorites']);
    Route::post('courses/favorites', [CourseController::class, 'addFavorite']);
    Route::delete('courses/favorites/{userFavorite}', [CourseController::class, 'removeFavorite']);
    Route::get('courses/plannings', [CourseController::class, 'plannings']);
    Route::post('courses/plannings', [CourseController::class, 'addPlanning']);
    Route::delete('courses/plannings', [CourseController::class, 'removePlanning']);
    Route::get('/courses/user', [CourseController::class, 'userCourses']);
    Route::post('/courses/add', [CourseController::class, 'addUserCourse']);
    Route::delete('/user-courses/{userCourse}', [CourseController::class, 'removeUserCourse']);
    Route::resource('courses', CourseController::class);
    Route::post('quizzes/answer', [QuizController::class, 'answer']);
    Route::resource('quizzes', QuizController::class);
});

