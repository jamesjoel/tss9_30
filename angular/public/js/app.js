var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){

	$scope.newData={};
	// $scope.newData.name="rohit";

	$scope.save=function(){
		$http({
			url : "/",
			method : "post",
			data : $scope.newData
		}).then(function(res){
			// console.log(res.data);
			if(res.data)
			{

				$("#msgModal").modal("show");
			}
		});
	}


});