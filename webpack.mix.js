const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .browserSync({
        proxy: "localhost", // This should match your XAMPP server
        open: false,
        notify: false,
        files: [
            "resources/views/**/*.blade.php",
            "resources/js/**/*.js",
            "resources/css/**/*.css",
        ],
    });
