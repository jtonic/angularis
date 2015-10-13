/**
 * Created by jtonic on 13.10.2015.
 */
define(['jquery', 'angular', 'angular-route'], function ($, ng) {
    var myApp = ng.module('myApp', []);
    //myApp.controller('myCtrl', function ($scope) {
    //    $scope.name = 'Antonel Ernest Pazargic';
    //});
    
    ng.bootstrap(document, ['myApp']);

/*
    $.each(['antonel', 'pazargic'], function (index, value) {
        console.log(`idx = ${index}, value = ${value}`)
    })
*/
});
