'use strict';

angular
  .module('hotels.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.hotels', {
      url: '/hotels',
      views: {
        'menuContent': {
          templateUrl: 'templates/hotels.html',
          controller: 'HotelsCtrl'
        }
      }
    })

    .state('app.hotel_map', {
       url: '/hotel_map',
       params: {
          lat: null,
          lng: null,
          desc: {
            address: null,
            website: null,
            email: null,
            contact: null
          }
        },
       views: {
        'menuContent': {
          templateUrl: 'templates/hotel_map.html',
          controller: 'HotelsMapCtrl'
        }
      }
    })
});