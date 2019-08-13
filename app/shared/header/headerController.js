 rootApp.controller('headerController', function($scope, headerService) {
   $scope.$on("headerChange", function(event, obj) {
     $scope.loggedIn = obj.loggedIn;

     if ($scope.loggedIn == true) {
       $scope.logLink = "Đăng xuất";
       $scope.userName = sessionStorage.userName;
       $scope.userType = sessionStorage.userType;
     } else {
       $scope.logLink = "Đăng nhập";
     }

     if ($scope.userType == "student") {
       $scope.list = [{
           link: "student",
           linkText: "Trang cá nhân"
         },
         {
           link: "student/notification",
           linkText: "Thông báo"
         },
         {
           link: "student/schedule",
           linkText: "Thời khóa biểu"
         },
         {
           link: "student/contact",
           linkText: "Gửi thư"
         }
       ];
     } else if ($scope.userType == "teacher") {
       $scope.list = [{
           link: "teacher",
           linkText: "Trang cá nhân"
         },
         {
           link: "teacher/schedule",
           linkText: "Thời khóa biểu"
         },
         {
           link: "teacher/inputscore",
           linkText: "Nhập điểm"
         },
       ];
     } else if ($scope.userType == "admin") {

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

   //init
   if ($scope.loggedIn == true) {
     $scope.logLink = "Đăng xuất";
     $scope.userName = sessionStorage.userName;
     $scope.userType = sessionStorage.userType;
   } else {
     $scope.logLink = "Đăng nhập";
   }

   if ($scope.userType == "student") {
     $scope.list = [{
         link: "student",
         linkText: "Trang cá nhân"
       },
       {
         link: "student/notification",
         linkText: "Thông báo"
       },
       {
         link: "student/schedule",
         linkText: "Thời khóa biểu"
       },
       {
         link: "student/contact",
         linkText: "Gửi thư"
       }
     ];
   } else if ($scope.userType == "teacher") {
     $scope.list = [{
         link: "teacher/",
         linkText: "Trang cá nhân"
       },
       {
         link: "teacher/",
         linkText: "Lớp học"
       },
       {
         link: "teacher/",
         linkText: "Thời khóa biểu"
       },
     ];
   } else if ($scope.userType == "admin") {

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
