var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('js_examples', function () {
    nodemon({
        script: 'bin/lodash_examples.js',
        ext: 'js html',
        env: {'NODE_ENV': 'development'}
    })
});

gulp.task('default', ['js_examples']);
