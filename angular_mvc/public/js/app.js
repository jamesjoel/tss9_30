var app = angular.module("myApp", []);
app.controller("loginCtrl", function($scope, $http){
	$scope.loginData={};
	$scope.preloaderShow = false;
	$scope.showBox = false;
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
				if(res.data==0)
				{
					$scope.msg="Invalid Username/Email.";
				}
				else
				{
					$scope.showBox=true;
				}
			});
		}
	}
});