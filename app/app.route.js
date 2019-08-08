rootApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/app/components/home/homeView.html",
      controller: "homeController"
    })
    .when("/login", {
      templateUrl: "/app/components/login/loginView.html",
      controller: "loginController"
    })
    .when("/about", {
      templateUrl: "/app/components/about/aboutView.html",
      controller: "aboutController"
    })
    .when("/news", {
      templateUrl: "/app/components/news/newsView.html",
      controller: "newsController"
    })
    .when("/contact", {
      templateUrl: "/app/components/contact/contactView.html",
      controller: "contactController"
    })
    .when("/student/", {
      resolve: {
        "check": function($location, $rootScope) {
          if ($rootScope.loggedIn == false) {
            $location.path("/");
          }
        }
      },
      templateUrl: "app/components/scope_student/page_infomation/infomationView.html"
    })
    .when("/student/notification", {
      templateUrl: "app/components/scope_student/page_notification/notificationView.html"
    })
    .when("/student/schedule", {
      templateUrl: "app/components/scope_student/page_schedule/scheduleView.html"
    })
    .when("/student/contact", {
      templateUrl: "app/components/scope_student/page_contact/contactView.html"
    })
    // .when("/student/infomation", {
    //   templateUrl: "app/components/scope_student/infomation_page/infomationView.html"
    // })
    .otherwise({
      template: "<div class='container'><hr><h3>Không tìm thấy trang này</h3><hr></div></br>"
    });
});
