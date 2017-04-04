// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'app.controllers','app.services','hotels.module','ngCordova','ngMap','youtube-embed',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.cordova) {
      cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
         if(enabled){
           alert("Location Turned ON");
         }else{
           alert("Location is OFF");
           cordova.plugins.diagnostic.switchToLocationSettings();
         }
      }, function(error){
          console.error("The following error occurred: "+error);
      });
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider, $sceDelegateProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.video', {
    url: '/video',
    views: {
      'menuContent': {
        templateUrl: 'templates/video.html',
        controller: 'VideoCtrl'
      }
    }
  })

  .state('app.location', {
    url: '/location',
    views: {
      'menuContent': {
        templateUrl: 'templates/location.html',
        controller: 'LocationCtrl'
      }
    }
  })

  .state('app.geolocation', {
    url: '/geolocation',
    views: {
      'menuContent': {
        templateUrl: 'templates/geolocation.html',
        controller: 'GeoCtrl'
      }
    }
  })

  .state('app.weather', {
      url: '/weather',
      views: {
        'menuContent': {
          templateUrl: 'templates/weather.html',
          controller: 'WeatherCtrl'
        }
      }
    })

  .state('app.malls', {
    url: '/malls',
    views: {
      'menuContent': {
        templateUrl: 'templates/malls.html',
        controller: 'MallsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/malls/:mallsId',
    views: {
      'menuContent': {
        templateUrl: 'templates/mall.html',
        controller: 'MallsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
});
