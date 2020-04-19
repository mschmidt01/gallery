const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
    .js('resources/js/colors.js', 'public/js')
    .js('resources/js/live.js', 'public/js')
    .js('resources/js/codemirror.js', 'public/js')
    .js('resources/js/javascript.js', 'public/js')
    .js('resources/js/css.js', 'public/js')
    .js('resources/js/jshint.js', 'public/js')
    .js('resources/js/lint.js', 'public/js')
    .js('resources/js/javascript-lint.js', 'public/js')
    .js('resources/js/vue-lazyload.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copy('node_modules/font-awesome/fonts', 'public/fonts');
