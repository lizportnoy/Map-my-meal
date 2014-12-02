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
.controller('IndexController', function ($scope) {
  $scope.data = {
    shown: true
  }
  
  $scope.makeDissapear = function () {
    $scope.data.shown = !$scope.data.shown
  }
})

