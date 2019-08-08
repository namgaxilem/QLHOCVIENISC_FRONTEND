rootApp.controller("loginController", function($rootScope, $scope, $location, headerService) {
  $rootScope.title = "Đăng nhập";
  
  $scope.login = function() {
    if ($scope.username == "admin" && $scope.password == "admin") {

      sessionStorage.loggedIn = true;
      headerService.setLoggedIn(sessionStorage.loggedIn);

      //create html5 storage
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("userName", "Nguyễn Đức Nam");
      sessionStorage.setItem("userType", "student");

      //emit to rootappController
      $scope.$emit('logstateChange', {
        loggedIn: true
      });

      //redirect to student
      $location.path("/student");
    } else {
      console.log('dang nhap that bai');
      sessionStorage.setItem("loggedIn", "false");
      alert("Thông tin đăng nhập chưa đúng");
    }
  };

});
