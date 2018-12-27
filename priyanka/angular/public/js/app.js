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
			$scope.msg="Data Saved!!";
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
	$scope.askDelete=function(x){
		$scope.selectedObj=x;
	}
	$scope.delete=function(){
		$http({
			url:"/delete",
			data:$scope.selectedObj,
			method:"post"
		}).then(function(res){
			// console.log($scope.selectedObj);
			if(res.data){
				var n=$scope.allData.indexOf($scope.selectedObj);
				$scope.allData.splice(n,1);
				$scope.msg="Data Deleted!!";
				$("#msgModal").modal("show");
			}
		});
	}
	$scope.askEdit=function(x){
		$scope.newData=x;
	}
});	
