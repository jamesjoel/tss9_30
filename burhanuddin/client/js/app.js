const app = angular
  .module("App", [])
  .controller("homeController", function($scope, $http) {
    $scope.addEmployee = {};
    $scope.allEmployeeData = [];

    $scope.getAllEmployeeData = function() {
      $http({
        url: "http://localhost:3000/",
        method: "get"
      }).then(function(res) {
        $scope.allEmployeeData = res.data;
        console.log(res.data);
      });
    };
    $scope.addNewEmployee = function() {
      console.log("function executed");
      $http({
        url: "http://localhost:3000/",
        method: "post",
        // headers: {
        //   "Content-Type": "application/json, text/plain"
        // },
        data: $scope.addEmployee
      }).then(function(res) {
        if (res.data) {
          console.log(res.data);
          $scope.allEmployeeData.push(res.data);
        } else {
          console.log("data not send to server");
        }
      });
    };
  });
