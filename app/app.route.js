rootApp.config(function($routeProvider) {
  $routeProvider
    //
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
    //student scope
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
    .when("/student/infomation", {
      templateUrl: "app/components/scope_student/infomation_page/infomationView.html"
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
    //teacher scope
    .when("/teacher/infomation", {
      templateUrl: "app/components/scope_teacher/infomation_page/infomationView.html"
    })
    .when("/teacher/inputscore", {
      templateUrl: "app/components/scope_teacher/page_input_score/inputscoreView.html"
    })
    .when("/teacher/schedule", {
      templateUrl: "app/components/scope_teacher/page_schedule/scheduleView.html"
    })
    //admin scope
    .when("/admin", {
      controller: "adminController"
    })
    //otherwise
    .otherwise({
      template: "<div class='container'><hr><h3>Không tìm thấy trang này</h3><hr></div></br>"
    });
});

rootApp.controller("adminController", function ($scope) {
  console.log("ahihi");
});
