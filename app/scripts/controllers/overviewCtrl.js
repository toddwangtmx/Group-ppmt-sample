/**
 * Created by xuesong on 7/8/2015.
 */
'use strict';

/*
 This is controller of medical plan section, put your logic here*/

angular.module('ppmtApp')
  .controller('overviewCtrl', function($scope,planDescription) {
      planDescription.getDescription({id:123}).$promise.then(function(response) {
        $scope.planDescription = response;
      })

    $scope.greeting = "hello world";
    $scope.editable = false;
    $scope.editText = function(){
        $scope.editable = true;
    }


  });
