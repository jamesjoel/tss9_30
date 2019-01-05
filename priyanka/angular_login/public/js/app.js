var app=angular.module("myApp",[]);
app.controller("loginCtrl",function($scope,$http,$window){
	$scope.loginData={};
	$scope.preloaderShow=false;
	$scope.showBox=false;
	$scope.msg="";
	$scope.login=function(){
		if(!$scope.loginData.username){
			$scope.msg="Enter Your Email/Username";
		}else{
			$scope.msg="";
			$scope.preloaderShow=true;
			$http({
				url:"/webservices/checkusername",
				data:$scope.loginData,
				method:"post"
			}).then(function(res){
				$scope.preloaderShow=false;
				if(res.data[0]==0){
					$scope.msg="Invalid Username/Email";
				}else{
					$scope.showBox=true;
					$scope.userData=res.data[1];
				}
			});
		}
	}
	$scope.do_login=function(){
		$scope.preloaderShow=true;
		$http({
			url:"/webservices/checkpassword",
			data:$scope.loginData,
			method:"post"
		}).then(function(res){
			if(res.data==0){
				$scope.preloaderShow=false;
				$scope.msg="Inavalid Password";
			}else{
				$window.location.href="/user";
			}
		});
	}
});