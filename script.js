var thisApp = angular.module('demo', [])




thisApp.controller('demoCtrl', ['$scope', function($scope){
	 $scope.inputVisable = 'visable';
  $scope.outputVisable  = '';
  $scope.gender = '';

  $scope.submit = function(){
    if( $scope.userSubmit.$valid ) {
      $scope.switch();
    } else {
      alert("Please fill out all of the forms");
    }
  }
  $scope.male = function(){
    $scope.heshe = 'he';
    $scope.girlboy = 'boy';
  };
  $scope.female = function(){
    $scope.heshe = 'she';
    $scope.girlboy = 'girl';
    
  };
  $scope.switch = function(){
    if ($scope.inputVisable){
      $scope.inputVisable = '';
      $scope.outputVisable = 'visable';
    } else {
      $scope.inputVisable = 'visable';
      $scope.outputVisable = '';
    }
  };
  $scope.reset = function(){
    $scope.switch();
    $scope.data.handle = '';
    $scope.data.adjective = '';
    $scope.data.when = '';
    $scope.data.where = '';
    $scope.data.place = '';
    $scope.data.when = '';
    $scope.data.where2 = '';
    $scope.data.job = '';
    $scope.data.adjective2 = '';
    $scope.data.alcohol = '';
    $scope.data.adjective3 = '';
  };
}]);