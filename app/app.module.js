var rootApp = angular.module("rootApp", ["ngRoute"]);
rootApp.run(function($rootScope) {
    $rootScope.loggedIn = true;
    $rootScope.userType = 'student';
});
