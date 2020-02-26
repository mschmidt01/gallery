<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Picture extends Model
{
    protected $table = 'pictures';

    public static function getTopics(){
        return  DB::table('pictures')->select('gallery')->distinct()->pluck("gallery")->toArray();
    }

    public static function getPicturesOrderdByTopic(){
        return Picture::all()->groupBy('Gallery')->toArray();
    }


    public static function getRatingsCount(){
        return  DB::table('pictures')->select('rating')->count();
    }
    public static function getCountVotes(){
        return  DB::table('pictures')->sum('votes');
    }

     public static  function  getPicturesForRating( $rating ) {
       return DB::table('pictures')->select('*')->where("Votes", ">", "0")->whereRaw("2*abs( Rating / Votes - $rating ) < 1")->get();
    }

    public static  function  getPictureCountByTopic( $sTopic ) {
        return Picture::all()->where("Gallery","=", $sTopic)->count();
    }

    public static  function  getRandomTopicByGallery( $sTopic ) {
        //return  DB::table('pictures')->select('Path',"Filename")->where("Gallery","=", $sTopic)->random(1)->toArray();
        return Picture::all()->where("Gallery","=", $sTopic)->random(1)->toArray();
    }

}
