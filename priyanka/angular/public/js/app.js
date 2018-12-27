var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){
	$scope.newData = {};
	$scope.save=function(){
		$http({
			url:"/",
			data:$scope.newData,
			method:"post"
		}).then(function(res){
			if(res.data){
			$("#msgModal").modal("show");	
			}else{
				$("#newModal").modal("show");
			}
		});
	}
});	
