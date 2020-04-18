<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Picture;
use App\Comment;
use GuzzleHttp\Client;

class GalleryController extends Controller
{
  public function getModuleFilters(Request $request)
  {
    return Picture::getModuleNames($request->json("gallery"));
  }

  public function getClassFilters(Request $request)
  {
    return Picture::getClassNames($request->json("gallery"));
  }
  public function ratePicture(Request $request)
  {
    $email = $request->json("email");
    $contact = $request->json("contact");

    if (($contact == null || $contact == '') && ($email == 'test@email.com')) {
      $sPictureId = $request->json("imagid");
      $rating = $request->json("rating");

      if (array_key_exists('recaptcha', $_COOKIE)) {
        if ($_COOKIE["recaptcha"] == 'true') {

          $sToken = $request->json("token");

          $client = new Client();
          $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
              'secret' => env('RECAPTCHA_V3_SECRET_KEY', false),
              'response' => $sToken,
            ]
          ]);

          $response = json_decode($response->getBody(), true);

          if ($response !== null && $response["success"] && $response["score"] >= 0.5) {
            Picture::ratePicture($sPictureId, $rating);
            return "success";
          }
        } else if ($_COOKIE["recaptcha"] == 'false') {
          Picture::ratePicture($sPictureId, $rating);
          return "success";
        }
      } else {
        Picture::ratePicture($sPictureId, $rating);
        return "success";
      }
    }

    return "invalid";
  }

  public function commentPicture(Request $request)
  {
    $email = $request->json("email");
    $contact = $request->json("contact");

    if (($contact == null || $contact == '') && ($email == 'test@email.com')) {
      $sPictureId = $request->json("imagid");
      $rating = $request->json("text");

      dump("IN IF");

      if (array_key_exists('recaptcha', $_COOKIE)) {
        dump("COOKIE EXISTS");

        if ($_COOKIE["recaptcha"] == 'true') {

          $sToken = $request->json("token");

          $client = new Client();
          $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
              'secret' => env('RECAPTCHA_V3_SECRET_KEY', false),
              'response' => $sToken,
            ]
          ]);

          $response = json_decode($response->getBody(), true);

          dump($response);

          if ($response !== null && $response["success"] && $response["score"] >= 0.5) {
            Comment::createNewComment($sPictureId, $rating);
            return "success";
          }
        } else if ($_COOKIE["recaptcha"] == 'false') {
          Comment::createNewComment($sPictureId, $rating);
          return "success";
        }
      } else {
        Comment::createNewComment($sPictureId, $rating);
        return "success";
      }
    }

    return "invalid";
  }
}
