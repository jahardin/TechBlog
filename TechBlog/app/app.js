var app = angular.module('TechBlogApp', []);

//var controllerProvider = null;
//var app = angular.module('TechBlogApp', [], function($controllerProvider) {
//    controllerProvider = $controllerProvider;
//});

/*app.config(function($routeProvider) {
    $routeProvider
        .when('/login',
        {
            controller: 'AccountController',
            templateUrl: 'app/partials/login.cshtml'
        })
        .when('/',
        {

        })
<<<<<<< HEAD
        .otherwise({ redirectTo: '/'});
});*/
=======
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
>>>>>>> f3002e9b70af96831bf583e87798d127e33f9ffe
