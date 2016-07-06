var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    autoprefix = require('gulp-autoprefixer');

var pack  = require('./package.json');
var utils = require('./config/utils.js');

gulp.task('compress', ['commonjs', 'dev', 'production', 'iife']);

gulp.task('commonjs', function() {
  return utils.packageRollup({
    dest: 'dist/' + pack.name + '.common.js',
    format: 'cjs'
  });
});

gulp.task('dev', function() {
  return utils.packageRollup({
    dest: 'dist/' + pack.name + '.js',
    format: 'umd'
  });
});

gulp.task('iife', function() {
  return utils.packageRollup({
    dest: 'dist/' + pack.name + '.iife.js',
    format: 'iife'
  });
});

gulp.task('test', function() {
  return gulp.src('./test/test-runner.html')
    .pipe(qunit());
});

gulp.task('production', function() {
  return utils.packageRollup({
    dest: 'dist/' + pack.name + '.min.js',
    format: 'umd',
    minify: true
  }).then(utils.zip);
});

gulp.task('default', ['compress']);

gulp.task('watch', function() {
  gulp.watch([
    'src/nestable.js',
  ], ['compress']);
});
