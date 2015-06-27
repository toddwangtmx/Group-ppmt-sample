'use strict';

/**
 * @ngdoc function
 * @name ppmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ppmtApp
 */
angular.module('ppmtApp')
  .controller('mainCtrl', function ($scope, userService) {
    userService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });

    console.log('This is home state');
  });
