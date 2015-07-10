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

    // text box features
    $scope.greeting = "hello world";
    $scope.editable = false;
    $scope.storedText = [];
    var storedText = $scope.storedText;

    // modified date
    $scope.univer_time = function () {
       planDescription.putDescription({id:123},{planDescription:'abcd'}).$promise.then(function(response) {
         var dateObj = new Date();
         var month = dateObj.getUTCMonth() + 1; //months from 1-12
         var day = dateObj.getUTCDate();
         var year = dateObj.getUTCFullYear();
         return $scope.planDescription.lastModified = day + "/" + month + "/" + year;
       })
      }

    // ng-show flag
    $scope.editText = function(){
        $scope.editable = true;
    }

    //save previouse content
    $scope.updateText = function(greeting){
        planDescription.putDescription({id:123},{planDescription:'abcd'}).$promise.then(function(response) {
          //$scope.greeting = greeting;
          $scope.storedText.push(greeting);
          $scope.editable = false;
        })
    }

    //track data
    $scope.stepBack = function(){
      $scope.editable = false;
      if(storedText.length==0){
        $scope.greeting = "hello world";
      }
      else {
        $scope.greeting = $scope.storedText[storedText.length - 1]
      }
    }
  });
