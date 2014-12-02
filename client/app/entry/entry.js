angular.module('mapYourMeal.entry', [])

.controller('EntryController', function ($scope, RecipeStorage) {

  $scope.screencontrols = {
    notSubmitted : true,
    hiddenSteps : false,
    submitRecipe : false
  };

  $scope.startRecipe = function () {
    RecipeStorage.recipeEntry['recipeName'] = $scope.entry.recipeName;
    RecipeStorage.recipeEntry['mealTime'] = $scope.entry.mealTime;
    _.each($scope.screencontrols, function (val, key, obj) {
      obj[key] = !val;
    })
    RecipeStorage.recipeEntry.steps = [];
  }

  $scope.addSteps = function () {
    RecipeStorage.recipeEntry.steps.push([$scope.entry.step, $scope.entry.timeEstimate]);
    $scope.entry.step = "";
    $scope.entry.timeEstimate = ""
  }

  $scope.sendRecipe = function () {
    RecipeStorage.displayedRecipe = RecipeStorage.recipeEntry;
    RecipeStorage.recipeEntry = {};
  }

});
