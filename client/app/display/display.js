angular.module('mapYourMeal.display', [])

.controller('DisplayController', function ($scope, RecipeStorage) {

  
  $scope.recipeName = RecipeStorage.displayedRecipe.recipeName
  $scope.recipeSteps = RecipeStorage.displayedRecipe.steps;
  $scope.mealTime = RecipeStorage.displayedRecipe.mealTime;
  $scope.timeRemaining = RecipeStorage.displayedRecipe.steps.reduce(function (accumulator, recipeStep) {
    return accumulator + recipeStep[1];
  },0);
  $scope.totalTime = $scope.timeRemaining;
  
  $scope.addTimeCounters = function () {
    _.each(RecipeStorage.displayedRecipe.steps, function (elem) {
       elem.push($scope.timeRemaining);
      $scope.timeRemaining  = $scope.timeRemaining - elem[1];
  });
  }


  $scope.addTimeCounters();

  $scope.displayedTime;

  
  $scope.formatTime = function (mealTime, timeLeft) {
    
    // converts hours to readable format by 
    var hours = mealTime.toString().slice().split(':')[0];
    // converts hours to redeable forma

    var minutes = mealTime.toString().slice().split(':')[1].substring(0,2);

    console.log('hours', hours);
    console.log('minutes', minutes);  


    $scope.displayedTime = moment({hours: hours, minutes: minutes})
      .subtract(timeLeft, 'minutes')
      .format('h:mm a');

    return $scope.displayedTime;

  }



});
