angular.module('mapYourMeal.entry', [])

.controller('EntryController', function ($scope, RecipeStorage) {

  $scope.notSubmitted = true;
  $scope.hiddenSteps = false;
  $scope.submitRecipe = false;

  $scope.startRecipe = function () {
    RecipeStorage.recipeEntry['recipeName'] = $scope.entry.recipeName;
    RecipeStorage.recipeEntry['mealTime'] = $scope.entry.mealTime;
    $scope.notSubmitted = false;
    $scope.hiddenSteps = true;
    $scope.submitRecipe = true;
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
