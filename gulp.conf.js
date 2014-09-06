/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
module.exports = {

    src: {
        main    : 'app',
        styles  : 'app/styles/*.scss',
        scripts : 'app/scripts/*.js',
        imgs    : 'app/imgs/*',
        fonts   : 'app/fonts'
    },
    dist: {
        main    : 'public',
        styles  : 'public/styles/',
        scripts : 'public/scripts/',
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
    },
    syncConfig: {
        files: ['styles/*.css','scripts/*.js', 'public/*.html'],
        server: {
            baseDir: 'public',
            index: 'index.html'
        }
    }
}
