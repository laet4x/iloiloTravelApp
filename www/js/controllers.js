angular.module('starter.controllers', [])

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

.controller('HotelsCtrl', function($scope) {
  $scope.hotels = [
    {  id: 1,title: 'Hotel Del Rio',img: 'hotel.jpg'},
    {  id: 2,title: 'Sarabia Manor' ,img: 'hotel.jpg'},
    { id: 3,title: 'Century 21', img: 'hotel.jpg'},
    { id: 4,title: 'Days Hotel', img: 'hotel.jpg' }
  ];
})

.controller('MallCtrl', function($scope, $stateParams) {
});