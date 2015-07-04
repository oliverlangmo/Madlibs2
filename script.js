var thisApp = angular.module('demo', [])

thisApp.controller('demoCtrl', function($scope) {
	$scope.girlboy = 'girl';
	$scope.heshe = 'she';
	$scope.character_name = '';
	$scope.adjective = '';
	$scope.time_of_day='';
	$scope.destination='';
	$scope.location1='';
	$scope.time_of_day='';
	$scope.destination2='';
	$scope.occupation='';
	$scope.adjective2='';
    $scope.alcohol='';
    $scope.adjective3='';  


$scope.male=function(){
  $scope.girlboy="boy";
  $scope.heshe="he";
};
$scope.female = function () { 
	$scope.girlboy = 'girl';  
    $scope.heshe = "she";
};



})