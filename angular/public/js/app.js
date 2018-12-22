var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){

	$scope.newData={};
	$scope.allData=[];
	// $scope.newData.name="rohit";

	$scope.getAll=function(){
		$http({
			url : "/getall",
			method : "get"
		}).then(function(res){
			$scope.allData=res.data;
			console.log(res.data);
		});
	}


	$scope.save=function(){
		$http({
			url : "/",
			method : "post",
			data : $scope.newData
		}).then(function(res){
			if(res.data)
			{
				// console.log(res.data);
				$scope.allData.push(res.data);
				$("#msgModal").modal("show");
			}
		});
	}


});