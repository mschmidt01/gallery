<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>BoS Gallery</title>
    <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/monokai.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/addon/lint/lint.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/javascript/javascript.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/css/css.js"></script>
    <script src="https://unpkg.com/jshint@2.9.6/dist/jshint.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/addon/lint/lint.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/addon/lint/javascript-lint.js"></script>
</head>
<body>
<div id="app">
    <app></app>
</div>
<script src="{{ mix('js/bootstrap.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
