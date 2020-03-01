<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Picture;
class GalleryController extends Controller
{
    public function getModuleFilters(Request $request){
        return Picture::getModuleNames($request->json("gallery"));
    }

    public function getClassFilters(Request $request){
        return Picture::getClassNames($request->json("gallery"));
    }
}
