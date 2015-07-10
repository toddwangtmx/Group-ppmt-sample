'use strict';
angular.module("ppmtApp")
  .controller("descriptionCtrl", ["scope", function($scope){
    $scope.user.myData = {};
    $scope.update = function(user){
        $scope.user.myData = angular.copy(user);
        $scope.user.myData.showIt = true;
    };
}]);