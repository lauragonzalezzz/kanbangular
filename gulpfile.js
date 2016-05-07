'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  gulp.watch("scss/**/*.scss", ['sass']);
});


gulp.task('start', function () {
  nodemon({
    script : 'server.js',
  });
});


gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./public/css"))
});

gulp.task('default', ['serve', 'start']);