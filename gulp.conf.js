/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
module.exports = {

    src: {
        main    : 'src',
        styles  : 'src/styles/*.scss',
        scripts : 'src/scripts/*.js',
        imgs    : 'src/imgs/*.{png,jpg,gif}',
        fonts   : 'src/fonts'
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
        files: ['styles/*.css','scripts/*.js', 'public/*.html', 'public/imgs/*.{png,jpg,gif}'],
        server: {
            baseDir: 'public',
            index: 'index.html'
        }
    }
}
