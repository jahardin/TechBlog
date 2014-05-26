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
<<<<<<< HEAD
}]);
=======
});

app.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    };
}]);

app.controller('nameListCtrl', ['$scope', function ($scope) {
    $scope.users = [
        {name: 'Jacobus Harding', city:'Irvine'},
        { name: 'Matthew Hartz', city: 'Irvine' },
        {name: 'random', city:'place'},
        {name: 'specific', city:'place'}
    ];
    
}]);

>>>>>>> f3002e9b70af96831bf583e87798d127e33f9ffe
