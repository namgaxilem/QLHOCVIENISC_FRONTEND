// rootApp.config(function($routeProvider) {
//   $routeProvider
//     //
//     .when("/", {
//       templateUrl: "/app/components/home/homeView.html",
//       controller: "homeController"
//     })
//     .when("/login", {
//       templateUrl: "/app/components/login/loginView.html",
//       controller: "loginController"
//     })
//     .when("/about", {
//       templateUrl: "/app/components/about/aboutView.html",
//       controller: "aboutController"
//     })
//     .when("/news", {
//       templateUrl: "/app/components/news/newsView.html",
//       controller: "newsController"
//     })
//     .when("/contact", {
//       templateUrl: "/app/components/contact/contactView.html",
//       controller: "contactController"
//     })
//     //student scope
//     .when("/student/", {
//       resolve: {
//         "check": function($location, $rootScope) {
//           if ($rootScope.loggedIn == false) {
//             $location.path("/");
//           }
//         }
//       },
//       templateUrl: "app/components/scope_student/page_infomation/infomationView.html"
//     })
//     .when("/student/infomation", {
//       templateUrl: "app/components/scope_student/infomation_page/infomationView.html"
//     })
//     .when("/student/notification", {
//       templateUrl: "app/components/scope_student/page_notification/notificationView.html"
//     })
//     .when("/student/schedule", {
//       templateUrl: "app/components/scope_student/page_schedule/scheduleView.html"
//     })
//     .when("/student/contact", {
//       templateUrl: "app/components/scope_student/page_contact/contactView.html"
//     })
//     //teacher scope
//     .when("/teacher/infomation", {
//       templateUrl: "app/components/scope_teacher/infomation_page/infomationView.html"
//     })
//     .when("/teacher/inputscore", {
//       templateUrl: "app/components/scope_teacher/page_input_score/inputscoreView.html"
//     })
//     .when("/teacher/schedule", {
//       templateUrl: "app/components/scope_teacher/page_schedule/scheduleView.html"
//     })
//     //admin scope
//     .when("/admin", {
//       controller: "adminController"
//     })
//     //otherwise
//     .otherwise({
//       template: "<div class='container'><hr><h3>Không tìm thấy trang này</h3><hr></div></br>"
//     });
// });

// rootApp.controller("adminController", function ($scope) {
//   console.log("ahihi");
// });

rootApp.config(['$stateProvider', '$urlRouterProvider',
  function( $stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('common', {
        templateUrl: 'app/components/quanly/quanly.html',
        abstract: true,
        controller: 'dangnhapController'
      })
      .state('hocvien', {
        url: '/hocvien',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_hocvien/hocvienView.html',
        controller: 'hocvienController'
      })
      .state('khoahoc', {
        url: '/khoahoc',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_khoahoc/khoahocView.html',
        controller: 'khoahocController'
      })
      .state('truonghoc', {
        url: '/truonghoc',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_truonghoc/truonghocView.html',
        controller: 'truonghocController'
      })
      .state('monhoc', {
        url: '/monhoc',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_monhoc/monhocView.html',
        controller: 'monhocController'
      })
      .state('daotao', {
        url: '/daotao',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_daotao/daotaoView.html',
        controller: 'daotaoController'
      })
      .state('chuyennganh', {
        url: '/chuyennganh',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_chuyennganh/chuyennganhView.html',
        controller: 'chuyennganhController'
      })
      .state('thoikhoabieu', {
        url: '/thoikhoabieu',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_thoikhoabieu/thoikhoabieuView.html',
        controller: 'thoikhoabieuController'
      })
      .state('thongbao', {
        url: '/thongbao',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_thongbao/thongbaoView.html',
        controller: 'thongbaoController'
      })
      .state('diemhocvien', {
        url: '/diemhocvien',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_diemhocvien/diemhocvienView.html',
        controller: 'diemhocvienController'
      })
      .state('giangvien', {
        url: '/giangvien',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_giangvien/giangvienView.html',
        controller: 'giangvienController'
      })
      .state('gopy', {
        url: '/gopy',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_gopy/gopyView.html',
        controller: 'gopyController'
      })
      .state('nguoiquanly', {
        url: '/nguoiquanly',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_nguoiquanly/nguoiquanlyView.html',
        controller: 'nguoiquanlyController'
      })
      .state('phonghoc', {
        url: '/phonghoc',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_phonghoc/phonghocView.html',
        controller: 'phonghocController'
      })
      .state('doanhnghiep', {
        url: '/doanhnghiep',
        parent: 'common',
        templateUrl: 'app/components/quanly/page_doanhnghiep/doanhnghiepView.html',
        controller: 'doanhnghiepController'
      })
      //đăng nhập
      .state('dangnhap', {
        url: '/dangnhap',
        templateUrl: 'app/components/dangnhap/page_dangnhap/dangnhapView.html',
        controller: 'dangnhapController'
      });

    $urlRouterProvider.otherwise('/dangnhap');
  }
]);
