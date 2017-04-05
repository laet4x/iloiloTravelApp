angular.module('app.services', [])

.run(function($rootScope) {
  $rootScope.mapStyle  =  [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]

  $rootScope.hotels = [
            { "id": 1,
              "title": "Hotel Del Rio",
              "img": "del-rio.jpg",
              "pos":[10.700133, 122.552114],
              "desc": {
                      "address": "M.H del Pilar St, Molo, Iloilo City, 5000 Iloilo",
                      "website": "hoteldelrio.com.ph",
                      "contact": "(033) 337 0736"
                    }
            },
            { "id": 2,
              "title": "Sarabia Manor Hotel" ,
              "img": "sarabia.jpg",
              "pos":[10.699647,122.556336],
              "desc": {
                      "address": "General Luna Street, Iloilo City Proper, Iloilo City, 5000 Iloilo",
                      "website": "sarabiamanorhotel.com",
                      "contact": "(033) 337 0736"
                    }
            },
            { "id": 3,
              "title": "Century 21", 
              "img": "century21.jpg",
              "pos":[10.700421,122.566201],
              "desc": {
                      "address": "Iloilo City Proper, Iloilo City, Iloilo",
                      "website": "ann2.net",
                      "contact": "(033) 335 8821"
                    }
            },
            { "id": 4,
              "title": "Days Hotel", 
              "img": "days.jpg",
              "pos":[10.701329, 122.567958],
              "desc": {
                      "address": "4F The Atrium Mall Gen Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo",
                      "website": "wyndhamhotels.com",
                      "contact": "(033) 337 3297"
                    }
            }
        ]
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);