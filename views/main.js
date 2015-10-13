"use strict";

require.config({
    baseUrl: '.',
    paths: {
        'jquery': 'libs/jquery.min'
        , 'angular': 'libs/angular'
        , 'angular-route': 'libs/angular-route.min'
        , 'app': 'views/app'
    },
    shim: {
        'angular-route': {
            deps: ['angular'],
            exports: 'angular'
        },
        //ngCookies: {
        //    deps: ['angular'],
        //    exports: 'angular'
        //},
        //ngProgress: {
        //    deps: ['angular'],
        //    exports: 'angular'
        //},
        'angular': {
            exports : 'angular'
        }
    },
    deps: ['app']
});
