angular.module('mapYourMeal.entry', [])

.controller('EntryController', function ($scope, RecipeStorage) {

  $scope.startRecipe = function () {
    RecipeStorage.recipeEntry['recipeName'] = $scope.entry.recipeName;
    RecipeStorage.recipeEntry['mealTime'] = $scope.entry.mealTime;
  }

  $scope.addSteps = function () {
    RecipeStorage.recipeEntry.steps.push([$scope.entry.step, $scope.entry.timeEstimate]);
    console.log(RecipeStorage)

  }

  $scope.sendRecipe = function () {
    RecipeStorage.displayedRecipe = RecipeStorage.recipeEntry;
    RecipeStorage.recipeEntry = {};
    console.log(RecipeStorage);
  }

});
