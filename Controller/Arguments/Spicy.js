var myApp = angular.module('spicyApp', []);

myApp.controller('SpicyController', ['$scope', function ($scope) {
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';

    $scope.spicy = function (spice) {
        $scope.spice = spice;
    };
}]);