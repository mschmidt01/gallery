<?php

use Illuminate\Http\Request;

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

Route::namespace('Api')->group(function () {
    Route::get('/topics', 'TopicController@getTopics');
    Route::get('/pictures/ordered', 'PictureController@getPicturesOrderdByTopic');
    Route::get('/pictures/ratings/counts', 'PictureController@getRatingsCount');
    Route::get('/pictures/ratings/voting/counts', 'PictureController@getCountVotes');
    Route::get('/pictures/ratings/voting/{id}/count', 'PictureController@getPicturesForRating');

});

Route::post('/pictures/filter/modules', 'GalleryController@getModuleFilters');
Route::post('/pictures/filter/classes', 'GalleryController@getClassFilters');
