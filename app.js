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

app.run(function($rootScope, $location) {

  $rootScope.signout = function() {
    firebase.auth().signOut().then(function() {
      $location.path("login");
      $rootScope.$apply();
    }).catch(function(error) {
      console.error(error);
      alert(error);
    });
  };

});