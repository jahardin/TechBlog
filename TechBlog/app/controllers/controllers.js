app.controller('AccountController', ['$scope', '$location', function ($scope) {
    $scope.loginShown = false;
    $scope.registerShown = false;
    $scope.toggleModal = function (modal) {
        if (modal === "login")
            $scope.loginShown = !$scope.loginShown;
        else if (modal === "register")
            $scope.registerShown = !$scope.registerShown;
    };

    $scope.changeView = function(view) {
        $location.path(view);
    }
}]);
