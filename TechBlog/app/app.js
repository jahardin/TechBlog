var controllerProvider = null;
var app = angular.module('TechBlogApp', [], function($controllerProvider) {
    controllerProvider = $controllerProvider;
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/login',
        {
            controller: 'AccountController',
            templateUrl: '/app/partials/login.cshtml'
        })
        .otherwise({ redirectTo: '/home'});
});