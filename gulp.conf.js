/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
module.exports = {

    src: {
        main    : 'app',
        styles  : 'app/styles/*.scss',
        js      : 'app/js/*.js',
        imgs    : 'app/imgs/*',
        fonts   : 'app/fonts'
    },
    dist: {
        main    : 'public',
        styles  : 'public/styles/',
        js      : 'public/js/',
        imgs    : 'public/imgs/*',
        fonts   : 'public/fonts/'
    },
    tasks: {
        imagemin    : 'imagemin',
        jslint      : 'jslint',
        jsmin       : 'jsmin',
        jsconcat    : 'jsconcat',
        styles      : 'styles',
        cssmin      : 'cssmin',
        cssconcat   : 'cssconcat',
        html        : 'html',
        imgs        : 'imgs',
        browsersync : 'browsersync',
        zip         : 'zip'
    }
}
