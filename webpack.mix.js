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

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
//compile the scripts files into public/admin/all.css
mix.styles([
    'resources/css/vendor/fullcalendar.bundle.css',
    'resources/css/vendor/style.bundle.min.css'
], 'public/admin/all.css');
//compile the scripts files into public/admin/all.js
mix.scripts([
    'resources/css/vendor/style.bundle.min.js'
], 'public/admin/all.js');