var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var watch = require('gulp-watch');

gulp.task('js_examples', function () {
    nodemon({
        script: 'bin/js_examples.js'
    })
    .on('restart', function () {
        console.log('restarted')
    })
});

gulp.task('jasmine', function () {
   return gulp.src('spec/functions_spec.js').pipe(jasmine({
       //reporter: new reporters.TapReporter
   }));
});

gulp.task('incremental bdd', function () {
   return gulp.watch(['spec/*.js', 'bin/*.js'], ['jasmine']);
});

gulp.task('start', function () {
    nodemon({
        script: './bin/www'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('default', ['incremental bdd']);
