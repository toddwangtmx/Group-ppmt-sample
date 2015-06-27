'use strict';

/**
 * @ngdoc overview
 * @name ppmtApp
 * @description
 * # ppmtApp
 *
 * Main module of the application.
 */
angular
  .module('ppmtApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/mdPlan');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        abstract: true
      })
      .state('home.mdPlan', {
        url: '/mdPlan',
        templateUrl: 'views/mdPlan.html',
        controller: 'mdPlanCtrl'
      });
  });
