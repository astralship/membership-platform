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


app.run(function($rootScope, $location) {
  $rootScope.signOut = function() {
    firebase.auth().signOut().then(function() {
      $location.path("login");
    }).catch(function(error) {
      console.error(error);
      console.alert(alert);
    });
  }

  firebase.auth().onAuthStateChanged(function() {
    $rootScope.user = firebase.auth().currentUser;
    console.log($rootScope.user);
    $rootScope.$apply();
  });
});