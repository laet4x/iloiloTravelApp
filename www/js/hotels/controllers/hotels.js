'use strict';

angular
  .module('hotels.module')
  .controller('HotelsCtrl', ['$scope', '$stateParams', '$state', '$rootScope',
  function($scope, $stateParams, $state, $rootScope) {
  $scope.hotels = [
    { id: 1,
      title: 'Hotel Del Rio',
      img: 'del-rio.jpg',
      pos:[10.700133, 122.552114],
      desc: {
              address: 'M.H del Pilar St, Molo, Iloilo City, 5000 Iloilo',
              website: 'hoteldelrio.com.ph',
              contact: '(033) 337 0736'
            }
    },
    { id: 2,
      title: 'Sarabia Manor Hotel' ,
      img: 'sarabia.jpg',
      pos:[10.699647,122.556336],
      desc: {
              address: 'General Luna Street, Iloilo City Proper, Iloilo City, 5000 Iloilo',
              website: 'sarabiamanorhotel.com',
              contact: '(033) 337 0736'
            }
    },
    { id: 3,
      title: 'Century 21', 
      img: 'century21.jpg',
      pos:[10.700421,122.566201],
      desc: {
              address: 'Iloilo City Proper, Iloilo City, Iloilo',
              website: 'ann2.net',
              contact: '(033) 335 8821'
            }
    },
    { id: 4,
      title: 'Days Hotel', 
      img: 'days.jpg',
      pos:[10.701329, 122.567958],
      desc: {
              address: '4F The Atrium Mall Gen Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo',
              website: 'wyndhamhotels.com',
              contact: '(033) 337 3297'
            }
    }
  ]
  $scope.mapStyle = $rootScope.mapStyle;
  $scope.showMap = function(pos, desc) {
      $state.go('app.hotel_map', { pos: pos, desc: desc });
  }
}])

.controller('HotelsMapCtrl', ['$scope', '$stateParams', '$state','$cordovaGeolocation','$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state,$cordovaGeolocation,$rootScope) {
      $scope.mapStyle = $rootScope.mapStyle
      $scope.current_pos = $stateParams.pos
      $scope.hotel = $stateParams.desc
      $scope.current_lat = null
      $scope.current_lng = null
      $scope.locateMe = function() {
         var posOptions = {timeout: 5000, enableHighAccuracy: false};
          $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
              $scope.current_lat = position.coords.latitude
              $scope.current_lng = position.coords.longitude
            }, function(err) {
              // error
            });

          var watchOptions = {
            timeout : 3000,
            enableHighAccuracy: false // may cause errors if true
          };

          var watch = $cordovaGeolocation.watchPosition(watchOptions);
          watch.then(
            null,
            function(err) {
              // error
            },
            function(position) {
              $scope.current_lat = position.coords.latitude
              $scope.current_lng = position.coords.longitude
          });
      }
    }
  ]);