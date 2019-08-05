 rootApp.controller('headerController', function($scope, $rootScope) {
   if($rootScope.loggedIn == true) {
     $scope.logginLink = "Đăng xuất";
   }
   else {
     $scope.logginLink = "Đăng nhập";
   }

   if ($rootScope.userType == "student") {
     $scope.list = [{
         link: "student",
         linkText: "Trang cá nhân"
       },
       {
         link: "notification",
         linkText: "Thông báo"
       },
       {
         link: "schedule",
         linkText: "Thời khóa biểu"
       },
       {
         link: "contact",
         linkText: "Gửi thư"
       }
     ];
   } else if ($rootScope.userType == "teacher") {
     $scope.list = [{
         link: "teacher",
         linkText: "Trang cá nhân"
       },
       {
         link: "classes",
         linkText: "Lớp học"
       },
       {
         link: "schedule",
         linkText: "Thời khóa biểu"
       },
     ];
   } else if ($rootScope.userType == "admin") {

   } else {
     $scope.list = [{
         link: "about",
         linkText: "Giới thiệu"
       },
       {
         link: "news",
         linkText: "Tin tức"
       },
       {
         link: "contact",
         linkText: "Liên hệ"
       }
     ];
   }

 });
