rootApp.controller("loginController", function($scope, $location) {
  $scope.submit = function() {
    if ($scope.username == "admin" && $scope.password == "admin") {
      $rootScope.loggedIn = true;
      $location.path("/student");
    }
    else {
      alert("Sai tên tài khoản hoặc mặt khẩu");
    }
  };
});
