app.directive('loginDialog', function () {
    return {
        restrict: 'E',
        transclude: true,
        link: function(scope, element, attrs) {
            scope.loginStyle = {};
            if (attrs.width)
                scope.loginStyle.width = attrs.width;
            if (attrs.height)
                scope.loginStyle.height = attrs.height;
            scope.hideLogin = function() {
                scope.loginShown = false;
            };
        },
        templateUrl: '/app/partials/account/login.html'
    };
});

app.directive('registerDialog', ['$http', function ($http) {
    return {
        restrict: 'E',
        transclude: true,
        link: function (scope, element, attrs) {
            scope.registerStyle = {};
            if (attrs.width)
                scope.registerStyle.width = attrs.width;
            if (attrs.height)
                scope.registerStyle.height = attrs.height;
            scope.hideRegister = function () {
                scope.registerShown = false;
            };
            scope.register = function (credentials) {
                $http({
                    method: 'POST',
                    url: '/Account/Register',
                    data: JSON.stringify({credentials : credentials}),
                    headers: { 'Content-Type': 'application/json' }
                }).success(function(data) {
                    alert('fuckyeahaaaahahh');
                });
            }
        },
        templateUrl: '/app/partials/account/register.html'
    };
}]);