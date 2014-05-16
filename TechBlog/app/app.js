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
        .when('/users',
        {
            controller: 'nameListController',
            templateUrl: '/app/partials/users.cshtml'
        })
                .when('/template1',
        {
            controller: 'nameListController',
            templateUrl: '/app/partials/users.cshtml'
        })
        .otherwise({ redirectTo: '/home'});
});