'use strict';

var app = angular.module('ngMathGameApp', []);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'views/game.html',
            controller  : 'GameCtrl'
        })
        .otherwise({
            redirectTo  : '/'
        });

    $locationProvider.html5Mode(true);

});