app.controller('AccountController', function($scope) {
    init();

    function init() {
        $scope.loggedIn = false;
    }

    function logIn() {
        $scope.loggedIn = true;
    }

    function logOut() {
        $scope.loggedIn = false;
    }
});

app.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    };
}]);