 rootApp.controller('headerController', function($scope, $rootScope){
   if($rootScope.userType == "student") {
     $scope.list = [
      {
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
   }
   else if($rootScope.userType == "student") {

   }
   else if($rootScope.userType == "student"){

   }
   else {
     $scope.list = [
      {
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
