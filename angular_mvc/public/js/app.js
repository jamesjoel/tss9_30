var app = angular.module("myApp", []);

app.directive("myDir", function(){
	return {
		template : "<button class='btn btn-danger'>OK</button>"
	}
});



app.controller("loginCtrl", function($scope, $http, $window){
	$scope.loginData={};
	$scope.preloaderShow = false;
	$scope.showBox = false;
	$scope.userData={};
	$scope.msg="";
	$scope.login=function(){
		if(! $scope.loginData.username)
		{
			$scope.msg="Enter Your Username/Email.";
		}
		else{
			$scope.msg="";
			$scope.preloaderShow = true;
			$http({
				url : "/webservice/checkusername",
				data : $scope.loginData,
				method : "post"
			}).then(function(res){
				console.log(res.data);
				$scope.preloaderShow = false;
				if(res.data[0]==0)
				{
					$scope.msg="Invalid Username/Email.";
				}
				else
				{
					$scope.showBox=true;
					$scope.userData = res.data[1];
				}
			});
		}
	}

	$scope.do_login=function(){
		$scope.preloaderShow = true;
		$http({
			url : "/webservice/checkpassword",
			data : $scope.loginData,
			method : "post"
		}).then(function(res){
			if(res.data==0)
			{
				$scope.preloaderShow = false;
				$scope.msg="Invalid Password.";
			}
			else
			{
				$window.location.href="/user";
			}
		});
	}
});