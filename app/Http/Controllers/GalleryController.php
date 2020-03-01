<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Picture;
class GalleryController extends Controller
{
    public function getFilters(Request $request){
        return Picture::getModuleNames($request->json("gallery"));
    }
}
