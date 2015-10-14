"use strict";

require.config({
    baseUrl: '.',
    paths: {
        'jquery': 'libs/jquery.min'
        , 'angular': 'libs/angular'
        , 'angular-route': 'libs/angular-route.min'
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
    }
});

require(['angular'], function (angular) {
    var myApp = angular.module('myApp', []);
    myApp.controller('myCtrl', function ($scope) {
        console.log('name=', $scope.name);

        $scope.clickMe = function() {
            console.log('You clicked me ' + $scope.name);
        };
    });
    var html = angular.element(document.getElementsByTagName('html'[0]));
    angular.element().ready(function () {
        angular.bootstrap(document,  ['myApp']);
    })
});
