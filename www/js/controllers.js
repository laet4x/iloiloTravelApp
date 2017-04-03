angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MallsCtrl', function($scope) {
  $scope.malls = [
    { title: 'SM City', id: 1 },
    { title: 'Robinson', id: 2 },
    { title: 'Gaisano City', id: 3 },
    { title: 'City Mall', id: 4 }
  ];
})

.controller('VideoCtrl',  ['$scope', '$stateParams', '$state',
 function ($scope, $stateParams, $state) {
      $scope.iloiloVideo = 'rjewAPya2fU';
    }
])

.controller('LocationCtrl',   ['$scope', '$stateParams', '$ionicLoading', '$ionicPopup', '$state','$rootScope',
function ($scope, $stateParams, $ionicLoading, $ionicPopup, $state,$rootScope) {
    if (window.Connection) {
      if (navigator.connection.type == Connection.NONE) {
        $ionicPopup.alert({
          title: "Internet Disconnected",
          template: "You need internet connection to access online maps."
        }).then(function (result) {
          $state.go('app.home')
        });
      }
    }
      $scope.mapStyle = $rootScope.mapStyle
    }
])

.controller('GeoCtrl',   ['$scope', '$stateParams', '$ionicLoading', '$ionicPopup', '$state','$cordovaGeolocation','$rootScope',
function ($scope, $stateParams, $ionicLoading, $ionicPopup, $state,$cordovaGeolocation,$rootScope) {
    if (window.Connection) {
      if (navigator.connection.type == Connection.NONE) {
        $ionicPopup.alert({
          title: "Internet Disconnected",
          template: "You need internet connection to access online maps."
        }).then(function (result) {
          $state.go('app.home')
        });
      }
    }
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

      $scope.mapStyle = $rootScope.mapStyle
    }
])


.controller('MallCtrl', function($scope, $stateParams) {
});
