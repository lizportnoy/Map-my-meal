angular.module('mapYourMeal', [
  'ngRoute',
  'mapYourMeal.entry',
  'mapYourMeal.display'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/entry', {
      templateUrl: 'app/entry/entry.html',
      controller: 'EntryController'
    })
    .when('/display', {
     templateUrl: 'app/display/display.html',
     controller: 'DisplayController'
    })
    .otherwise({
      redirectTo: '/'
    })
})

