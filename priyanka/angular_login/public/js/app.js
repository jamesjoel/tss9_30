var app=angular.module("myApp",[]);
app.controller("loginCtrl",function($scope,$http){
	$scope.loginData={};
	$scope.preloaderShow=false;
	$scope.showBox=false;
	$scope.msg="";
	$scope.login=function(){
		if(!$scope.loginData.username){
			$scope.msg="Enter Your Email/Username";
		}else{
			$scope.msg="msg";
			// $scope.preloaderShow=true;
			$http({
				url:"/webservices/checkusername",
				data:$scope.loginData,
				method:"post"
			}).then(function(res){
				// $scope.preloaderShow=false;
				if(res.data==0){
					$scope.msg="Inavalid Username/Email";
				}else{
					// $scope.showBox=true;
				}
			});
		}
	}
});