"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: 'source',
    notify: false
  });

  gulp.watch('source/sass/**/*.scss', ['sass']);
  gulp.watch('source/*.html').on('change', browserSync.reload);
});
