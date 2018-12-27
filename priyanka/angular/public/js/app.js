var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){
	$scope.newData = {};
	$scope.allData=[];
	$scope.save=function(){
		$http({
			url:"/",
			data:$scope.newData,
			method:"post"
		}).then(function(res){
			if(res.data){
			$scope.allData.push(res.data);
			$("#msgModal").modal("show");	
			}else{
			$("#newModal").modal("show");
			}
		});
	}
	$scope.getAll=function(){
		$http({
			url:"/getall",
			method:"get"
		}).then(function(res){
			$scope.allData=res.data;
		});
	}
});	
