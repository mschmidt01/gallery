<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Picture extends Model
{
    protected $table = 'pictures';

    public static function getTopics(){
        return  DB::table('pictures')->select('gallery')->distinct()->get();
    }
    public static function getPicturesOrderdByTopic(){
        return Picture::all()->groupBy('Gallery');
    }

}
