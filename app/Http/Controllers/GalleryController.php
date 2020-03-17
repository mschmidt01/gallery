<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Picture;
use GuzzleHttp\Client;
use function MongoDB\BSON\toJSON;

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
                'secret' => '6Leu_-EUAAAAAG3jvOMNGcPMziyYshOepyNnXQt_',
                'response' => $sToken,
            ]
        ]);
        $response = json_decode($response->getBody(),true);
        if($response !== null && $response["success"] && $response["score"] >= 0.5){
            Picture::ratePicture($sPictureId,$rating);
            return "success";
        }
        return "invalid";

        //return Picture::getClassNames($request->json("gallery"));
    }

}
