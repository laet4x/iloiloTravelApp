'use strict';

angular
  .module('hotels.module')
  .controller('HotelsCtrl', ['$scope', '$stateParams', '$state', '$rootScope','$http',
  function($scope, $stateParams, $state, $rootScope,$http) {
  // The json data will now be in scope.
   $scope.hotels =  $rootScope.hotels;
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