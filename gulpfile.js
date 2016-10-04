var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-clean-css');

gulp.task('default', function () {
  return gulp.src('index.src.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(rename(function(path) {
      if(path.basename === 'index.src') path.basename = 'index';
    }))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});