<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Picture;
use App\Comment;
use GuzzleHttp\Client;

class GalleryController extends Controller
{
    public function getModuleFilters(Request $request){
        return Picture::getModuleNames($request->json("gallery"));
    }

    public function getClassFilters(Request $request){
        return Picture::getClassNames($request->json("gallery"));
    }
    public function ratePicture(Request $request){

        $sToken = $request->json("token");
        $sPictureId = $request->json("imagid");
        $rating = $request->json("rating");

        $client = new Client();
        $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('RECAPTCHA_V3_SECRET_KEY', false),
                'response' => $sToken,
            ]
        ]);

        $response = json_decode($response->getBody(),true);

        if($response !== null && $response["success"] && $response["score"] >= 0.5){
            Picture::ratePicture($sPictureId,$rating);
            return "success";
        }

        return "invalid";
    }

    public function commentPicture(Request $request){

        $sToken = $request->json("token");
        $sPictureId = $request->json("imagid");
        $rating = $request->json("text");

        $client = new Client();
        $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('RECAPTCHA_V3_SECRET_KEY', false),
                'response' => $sToken,
            ]
        ]);

        $response = json_decode($response->getBody(),true);

        if($response !== null && $response["success"] && $response["score"] >= 0.5){
            Comment::createNewComment($sPictureId,$rating);
            return "success";
        }

        return "invalid";
    }


}
