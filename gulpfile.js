var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    csslint = require('gulp-csslint');

gulp.task('less', function() {
    gulp.src(['./css/reset.css', './css/index.less'])
        .pipe(less())
        .pipe(concat('index.css'))
        .pipe(rename('main.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css'))
})
