var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    sequence = require('run-sequence');

gulp.task('htmlmin', function () {
  return gulp.src('index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    }))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('bundle', function () {
  var __v = Date.now();
  return gulp.src('index.src.html')
        .pipe(useref({
            transformTargetPath: function(filename, type) {
                var replace = new RegExp(`.${type}$`);
                return filename.replace(replace, `.${__v}.${type}`);
                console.log('\n\n\a\n\n', b);
                return a;
            }
        }))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(rename(function(path) {
      if(path.basename === 'index.src') path.basename = 'index';
      else path.basename += '.' + __v;
    }))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('default', gulp.series('bundle', 'htmlmin', done => done()));