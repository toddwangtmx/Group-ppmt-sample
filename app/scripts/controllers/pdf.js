angular.module('ppmtApp')
.controller('GreetingController', ['$scope', function($scope) {
    $scope.date = new Date();
}]);
