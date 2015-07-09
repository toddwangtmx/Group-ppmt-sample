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
    $urlRouterProvider.otherwise('/home/mdPlan/descp_Ivy');

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
        controller: 'mdPlanCtrl',
        abstract:true
      })
      .state('home.mdPlan.index_descp',{
        url:'/descp_Ivy',
        templateUrl:'views/descp_Ivy.html',
        controller:''
      })
  });
