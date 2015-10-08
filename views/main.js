require.config({
    baseUrl: '.',
    paths: {
        'angular': 'web/public/bower_components/angular/angular.min.js'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['views/bootstrap'], function (bootstrap) {
    bootstrap.init();
});
