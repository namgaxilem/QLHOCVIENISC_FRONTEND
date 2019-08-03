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
    .otherwise({
      template: "<div class='container'><hr><h3>Không tìm thấy trang này</h3><hr></div></br>"
    });
});
