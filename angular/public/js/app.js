var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){

	$scope.allData=[];

	$scope.demo=function(){

		$http({
			url : "/demo",
			method :"get"
		}).then(function(res){
			console.log(res.data);
			$scope.allData=res.data;
		});




	}


});