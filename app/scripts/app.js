
<<<<<<< HEAD
=======
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
    $urlRouterProvider.otherwise('/home/mdPlan/index_descp');

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
        url:'/index_descp',
        templateUrl:'views/index_descp.html',
        controller:'overviewCtrl'
      })
  });
>>>>>>> 99a4aef38bf3ac87c4d26d4b0d4964a6e0d4de49
