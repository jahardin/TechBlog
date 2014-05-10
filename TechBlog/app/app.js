var app = angular.module('techBlogApp', []);

app.config(function($routeProvider) {
    $routeProvider
        .when('/login',
        {
            controller: 'AccountController',
            templateUrl: '/app/partials/login.cshtml'
        })
        .otherwise({ redirectTo: '/home'});
});