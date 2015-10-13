var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jasmine = require('gulp-jasmine');
var watch = require('gulp-watch');

gulp.task('js_examples', function () {
    nodemon({
        script: 'bin/js_examples.js'
    })
    .on('restart', function () {
        console.log('restarted')
    })
});

gulp.task('bdd_tests', function () {
    nodemon({
        script: 'bin/lodash_examples.js',
        ext: 'js html',
        env: {'NODE_ENV': 'development'}
    })
});

gulp.task('jasmine', function () {
   return gulp.src('spec/*.js').pipe(jasmine());
});

gulp.task('incremental bdd', function () {
   return gulp.watch(['spec/*.js', 'bin/*.js'], ['jasmine']);
});

gulp.task('default', ['js_examples']);
