'use strict';

/****************************************************************
1. DEPENDENCIES
****************************************************************/

var gulp = require('gulp'),
    zip = require('gulp-zip'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    stylish = require('jshint-stylish'),
    browserSync = require('browser-sync'),
    minifycss = require('gulp-minify-css');

var config = require('./gulp.conf');

/***************************************************************
   STYLES TASK
   path: scr/stylus/*.styl
   save to: public/css/style.css
   dependence: gulp-stylus, gulp-plumber, gulp-minify-css
***************************************************************/

gulp.task(config.tasks.styles, function() {
    return gulp.src(config.src.styles)
        .pipe(sass())
        .pipe(gulp.dest(config.dist.styles));
});

gulp.task(config.tasks.cssmin, function() {
    return gulp.src('public/styles/style.css')
        .pipe(plumber())
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist.styles));
});

gulp.task(config.tasks.imagemin, function() {
    return gulp.src(config.src.imgs)
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest(config.dist.imgs));
});
/******************************************************************
4. JS TASKS
   path: scr/js/*.js
   save to: public/js/main.js
   dependence: gulp-jshint, gulp-uglify, gulp-concat, gulp-rename
*******************************************************************/

// lint my custom js
gulp.task(config.tasks.jslint, function() {
    return gulp.src(config.src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// minify all js files that shold not be concatinated
gulp.task(config.tasks.jsmin, function() {
    return gulp.src(config.dist.js)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist.js));
});

// minify & concatinate all other js
// gulp.task(config.tasks.jsconcat, function() {
//     gulp.src(config.paths.js)
//         .pipe(concat('all.min.js'))
//         .pipe(uglify())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest(config.pathsMin.js));
// });

/**************************************************************
6. ZIP TASKS
**************************************************************/

gulp.task(config.tasks.zip, function() {
    return gulp.src('./public/**')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('./'));
});
/**************************************************************
5. BROWSER SYNC
**************************************************************/

gulp.task(config.tasks.browsersync, function() {
    browserSync.init(['public/styles/*.css', 'public/js/*.js', './*.html'], {
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});


gulp.task('build', [config.tasks.styles, config.tasks.cssmin, config.tasks.jsmin, config.tasks.zip, config.tasks.imagemin]);

gulp.task('start', [config.tasks.styles, config.tasks.jslint, config.tasks.browsersync]);

gulp.task('default',['start'], function() {
  gulp.watch('app/styles/**/*.scss', [config.tasks.styles]);
  gulp.watch(config.src.js, [config.tasks.jslint]);
  gulp.watch(config.dist.styles, [config.tasks.browsersync]);
});
