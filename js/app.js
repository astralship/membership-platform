var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: "LoginCtrl"
    })
    .when('/dashboard', {
      templateUrl: 'templates/dashboard.html',
      controller: "DashboardCtrl"
    })
    .otherwise('/login')
});