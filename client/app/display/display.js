angular.module('mapYourMeal.display', [])

.controller('DisplayController', function ($scope, RecipeStorage) {
  $scope.displayAll = function () {
    $scope.recipeView = RecipeStorage.displayedRecipe.steps;
  }
  $scope.displayAll();

});
