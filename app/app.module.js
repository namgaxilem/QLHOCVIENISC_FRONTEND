var rootApp = angular.module("rootApp", ["ngRoute"]);
rootApp.run(function($rootScope) {
    $rootScope.userType = 'student';
});
