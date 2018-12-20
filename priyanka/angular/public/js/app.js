var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){
	$scope.name = "rohit";
	$scope.age = 25;
	$scope.demo=function(){
		$http({
			url:"/demo",
			method:"get"
		}).then(function(res){
			console.log(res.data);
			$scope.allData=res.data;
		});
	}
});	

