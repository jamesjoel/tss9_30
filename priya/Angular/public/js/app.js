var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){

	$scope.name="rohit";
	$scope.age=25;

	$scope.data={};
	$scope.data.name="james";
	$scope.data.gender="male";
	$scope.data.city="ujjain";


});