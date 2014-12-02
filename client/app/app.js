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
.service('RecipeStorage', function () {
    var recipeEntry = {};
    var displayedRecipe = {}
    recipeEntry.steps = [];
    displayedRecipe.steps = [];

    return {
      displayedRecipe: displayedRecipe,
      recipeEntry: recipeEntry
    };
})
.controller('IndexController', function ($scope, $location) {
  $scope.data = {
    shown: true
  }

  if ($location.absUrl() !== 'http://localhost:3000/') {
    $scope.data.shown = false;
  }
  
  $scope.makeDissapear = function () {
    $scope.data.shown = !$scope.data.shown
  }
})

