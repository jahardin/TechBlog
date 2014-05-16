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

    function createAccount() {
        
    }
});

app.controller('MyCtrl', ['$scope', '$location', function ($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;

    };

    $scope.changeView = function(view) {
        $location.path(view);
    }
}]);