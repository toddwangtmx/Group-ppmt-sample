'use strict';

/*
 This is a service to make AJAX call to our server and get API2.
 */

angular.module('ppmtApp')
  .factory('planDescription', function($resource) {
    return $resource('/api/overview/:id', {}, {
      getDescription: {method: 'GET'},
      putDescription:{method: 'PUT'}
    });
  });
