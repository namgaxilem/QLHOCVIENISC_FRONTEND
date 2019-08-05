rootApp.controller("loginController", function($rootScope, $scope, $location) {
  $scope.submit = function() {
    if ($scope.username == "admin" && $scope.password == "admin") {
      $rootScope.loggedIn = true;
      $location.path("/student");
    }
    else if ($scope.username == "" || $scope.password == ""){
      alert("Hãy điền đầy đủ thông tin");
    }
    else {
      alert("Thông tin đăng nhập chưa đúng");
    }
  };
});
