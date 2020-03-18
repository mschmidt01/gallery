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

    public static function getTotalPictureCount(){
        return  DB::table('pictures')->select("*")->count();
    }

     public static  function  getPicturesForRating( $rating ) {
       return DB::table('pictures')->select('*')->where("Votes", ">", "0")->whereRaw("2*abs( Rating / Votes - $rating ) < 1")->count();
    }

    public static  function  getPictureCountByTopic( $sTopic ) {
        return Picture::all()->where("Gallery","=", $sTopic)->count();
    }

    public static  function  getRandomTopicByGallery( $sTopic ) {
        return Picture::all()->where("Gallery","=", $sTopic)->random(1)->toArray();
    }

    public static  function  getModuleNames( $sGallery ) {
        return  DB::table('pictures')->select('THMModule')->where("Gallery", "=", $sGallery )->distinct()->pluck("THMModule")->toArray();
    }

    public static  function  getClassNames( $sGallery ) {
        return  DB::table('pictures')->select('Class')->where("Gallery", "=", $sGallery )->distinct()->pluck("Class")->toArray();
    }

    public static  function  ratePicture( $sPictureId, $rating ) {
        DB::statement("UPDATE Pictures SET Rating = Rating+$rating WHERE PID=$sPictureId");
        DB::statement("UPDATE Pictures SET Votes = Votes+1 WHERE PID =$sPictureId");
    }
}
