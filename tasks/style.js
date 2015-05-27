/***************************************************************
   STYLES TASK
   path: scr/stylus/*.styl
   save to: public/css/style.css
   dependence: gulp-stylus, gulp-plumber, gulp-minify-css
***************************************************************/

var gulp = require('gulp'),
    config = require('../gulp.conf.js'),
    pkg = require('../package.json'),
    stylus = require('gulp-stylus'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    header = require('gulp-header'),
    util = require('gulp-util'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    minifycss = require('gulp-minify-css');

gulp.task(config.tasks.styles, function() {
    return gulp.src(config.src.styles)
        .pipe(stylus({
            'include css': true,
            use: [jeet(), rupture()]
        }).on('error', util.log))
        .pipe(autoprefixer({}))
        .pipe(banner())
        .pipe(gulp.dest(config.dist.styles));
});

gulp.task(config.tasks.cssmin, function() {
    return gulp.src('public/styles/style.css')
        .pipe(plumber())
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist.styles));
});


function banner() {
  var stamp = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('\n');

  return header(stamp, { pkg: pkg });
}
