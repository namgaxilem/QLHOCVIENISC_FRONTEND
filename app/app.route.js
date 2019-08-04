rootApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/app/components/news/newsView.html"
    })
    .when("/login", {
      templateUrl: "/app/components/login/loginView.html"
    })
    .when("/about", {
      templateUrl: "/app/components/about/aboutView.html"
    })
    .when("/news", {
      templateUrl: "/app/components/news/newsView.html"
    })
    .when("/contact", {
      templateUrl: "/app/components/contact/contactView.html"
    })
    .when("/student/", {
      resolve: {
        "check":
      },
      templateUrl: "app/components/student_scope/infomation_page/infomationView.html"
    })
    .when("/student/infomation", {
      templateUrl: "app/components/student_scope/infomation_page/infomationView.html"
    })
    .when("/student/contact", {
      templateUrl: "app/components/student_scope/contact_page/contactView.html"
    })
    .when("/student/notification", {
      templateUrl: "app/components/student_scope/contact_page/notificationView.html"
    })
    .when("/student/schedule", {
      templateUrl: "app/components/student_scope/schedule_page/scheduleView.html"
    })
    .otherwise({
      template: "<div class='container'><hr><h3>Không tìm thấy trang này</h3><hr></div></br>"
    });
});
