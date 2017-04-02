var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login.html',
      controller: "LoginCtrl"
    })
    .when('/dashboard', {
      templateUrl: 'dashboard.html',
      controller: "DashboardCtrl"
    })
    .otherwise('/login')
});