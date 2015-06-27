'use strict';

/*
  This is a service to make AJAX call to our server and get user name back.
 */

angular.module('ppmtApp')
  .factory('userService', function($resource) {
    return $resource('api/getuser', {}, {
      getUser: {method: 'GET'}
    });
  });
