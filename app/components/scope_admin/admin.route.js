rootApp.config(function($routeProvider) {
  $routeProvider
    //
    .when("/admin/chuyennganh", {
      templateUrl: "/app/components/scope_admin/page_chuyennganh/chuyennganhView.html"
    })
    .when("/admin/dangky", {
      templateUrl: "/app/components/scope_admin/page_dangky/dangkyView.html"
    })
    .when("/admin/dangnhap", {
      templateUrl: "/app/components/scope_admin/page_dangnhap/dangnhapView.html"
    })
    .when("/admin/diemhocvien", {
      templateUrl: "/app/components/scope_admin/page_diemhocvien/diemhocvienView.html"
    })
    .when("/admin/forgetpass", {
      templateUrl: "/app/components/scope_admin/page_forgetpass/forgetpassView.html"
    })
    .when("/admin/gopy", {
      templateUrl: "/app/components/scope_admin/page_gopy/gopyView.html"
    })
    .when("/admin/hocvien", {
      templateUrl: "/app/components/scope_admin/page_hocvien/hocvienView.html"
    })
    .when("/admin/khoahoc", {
      templateUrl: "/app/components/scope_admin/page_khoahoc/khoahocView.html"
    })
    .when("/admin/monhoc", {
      templateUrl: "/app/components/scope_admin/page_monhoc/monhocView.html"
    })
    .when("/admin/phonghoc", {
      templateUrl: "/app/components/scope_admin/page_phonghoc/phonghocView.html"
    })
    .when("/admin/taikhoan", {
      templateUrl: "/app/components/scope_admin/page_taikhoan/taikhoanView.html"
    })
    .when("/admin/thoikhoabieu", {
      templateUrl: "/app/components/scope_admin/page_thoikhoabieu/thoikhoabieuView.html"
    })
    .when("/admin/thongbao", {
      templateUrl: "/app/components/scope_admin/page_thongbao/thongbaoView.html"
    })
    .when("/admin/tinhnang", {
      templateUrl: "/app/components/scope_admin/page_tinhnang/tinhnangView.html"
    })
    .when("/admin/trangchu", {
      templateUrl: "/app/components/scope_admin/page_trangchu/trangchuView.html"
    })
    .when("/admin/truonglienket", {
      templateUrl: "/app/components/scope_admin/page_truonglienket/truonglienketView.html"
    })
    //otherwise
    .otherwise({
      template: "<div class='container'><hr><h3>Không tìm thấy trang này</h3><hr></div></br>"
    });
});
