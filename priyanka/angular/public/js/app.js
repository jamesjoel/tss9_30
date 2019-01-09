var app = angular.module("myApp",[]);
app.filter("myFilter",function(){
	return function(x,g){
		if(g=='male'){
			var y=x*10/100;
			return x-y;
		}
			if(x=="female"){
				var y=x*20/100;
				return x-y;
		}
	}
});
app.controller("myCtrl",function($scope,$http){
	$scope.orderType=true;
	$scope.colName='fee';
	$scope.newData = {};
	$scope.allData=[];
	$scope.save=function(){
		if($scope.newData._id){
			$http({
				url:"/edit",
				method:"post",
				data:$scope.newData
			}).then(function(res){
				if(res.data){
					// console.log(res.data);
					for(var i=0;i<$scope.allData.length;i++){
						if($scope.allData[i]._id==$scope.newData._id){
							$scope.allData[i]=$scope.newData;
						}
					}
					$scope.msg="Data Update Successfuly!!";
					$("#msgModal").modal("show");	
					}
			// 		else{
			// 			$scope.msg="Data not Updated!!";
			// 		$("#newModal").modal("show");	
			// 		}
			 });
		}else{
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
		// console.log($scope.selectedObj);
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
		// $scope.newData=x;
		angular.copy(x,$scope.newData);
	}
	$scope.sort=function(){
		$scope.colName=x;
		$scope.orderType=!$scope.orderType;
	}
});	
