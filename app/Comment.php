<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
class Comment extends Model
{
    public $timestamps = false;

    protected $table = 'comments';
    public static  function  createNewComment( $sPictureId, $sText )
    {
        $oComment = new Comment;
        $oComment->pid = $sPictureId;
        $oComment->text = $sText;
        $oComment->save();
    }

}
