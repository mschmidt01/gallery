<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>BoS Gallery</title>
    <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Matomo -->
    <script type="text/javascript">
    var _paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
        var u="//localhost/matomo/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '1']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
    </script>
    <!-- End Matomo Code -->
    <script src="{{ mix('js/codemirror.js') }}"></script>
    <script src="{{ mix('js/javascript.js') }}"></script>
    <script src="{{ mix('js/css.js') }}"></script>
    <script src="{{ mix('js/jshint.js') }}"></script>
    <script src="{{ mix('js/lint.js') }}"></script>
    <script src="{{ mix('js/javascript-lint.js') }}"></script>
    <script src="{{ mix('js/vue-lazyload.js') }}"></script>
</head>
<body>
<div id="app">
    <app></app>
</div>
<script src="{{ mix('js/bootstrap.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
