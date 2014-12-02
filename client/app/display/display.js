angular.module('mapYourMeal.display', [])

.controller('DisplayController', function ($scope, RecipeStorage) {


  $scope.displayAll = function () {
    $scope.recipeName = RecipeStorage.displayedRecipe.recipeName
    $scope.recipeSteps = RecipeStorage.displayedRecipe.steps;
    $scope.mealTime = RecipeStorage.displayedRecipe.mealTime;
  };

  $scope.sumTimes = RecipeStorage.displayedRecipe.steps.reduce(function (accumulator, twople) {
    return accumulator + twople[1];
  },0);

  $scope.displayAll();
  $scope.displayedTime = $scope.mealTime;
  $scope.timeLeft = $scope.sumTimes



  $scope.displayedTime = moment({hours:$scope.displayedTime.toString().slice().split(':')[0], minutes: $scope.displayedTime.toString().slice().split(':')[1]})
    .subtract($scope.timeLeft, 'minutes')
    .format('h:mm a');

  $scope.formatTime = function (time) {
    $scope.timeLeft -= time; 
  }

});
