<?php

namespace App\Http\Controllers\Api;

use App\Picture;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PictureController extends Controller
{
    public function getTopics(){
        return Picture::getTopics();
    }

    public function getPicturesOrderdByTopic(){
        return Picture::getPicturesOrderdByTopic();
    }
    //
}
