var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter');
var watch = require('gulp-watch');
var jasmine_phantom = require('gulp-jasmine-phantom');

gulp.task('js_examples', function () {
    nodemon({
        script: 'bin/js_examples.js'
    })
    .on('restart', function () {
        console.log('restarted')
    })
});

gulp.task('jasmine', function () {
   return gulp.src('spec/jstgp/arrays_spec.js').pipe(jasmine({
       //integration: true,
       jasmineVersion: '2.3',
       reporter: new SpecReporter()
   }));
});

gulp.task('jasmine-web', function () {
   return gulp.src('spec/jstgp/inheritance_spec.js').pipe(jasmine_phantom({
       integration: true,
       jasmineVersion: '2.3'
       //reporter: new reporters.TapReporter
   }));
});

gulp.task('incremental bdd', function () {
   return gulp.watch(['spec/**/*.js', 'bin/*.js'], ['jasmine']);
});

gulp.task('start', function () {
    nodemon({
        script: './bin/www'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('default', ['jasmine', 'incremental bdd']);
