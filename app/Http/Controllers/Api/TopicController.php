<?php

namespace App\Http\Controllers\Api;

use App\Picture;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TopicController extends Controller
{
    public function getTopics(){
        $aTopics = [];
        $aNames = Picture::getTopics();
        $iCounter = 0;
        foreach ($aNames as $aName){
            $aTopics[$iCounter]['name'] = $aName;
            $aTopics[$iCounter]['count'] = Picture::getPictureCountByTopic($aName);
            $aRandomTopic = Picture::getRandomTopicByGallery($aName);
            $aTopics[$iCounter]['randomPicture'] = $aRandomTopic[0]["Path"] . "/" . $aRandomTopic[0]["Filename"];
            $iCounter++;
        }
        return $aTopics;
    }

    public function getTotalTopicsCount(){
        return  count(Picture::getTopics());
    }
}
