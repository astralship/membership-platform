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
      $rootScope.$apply();
    }).catch(function(error) {
      console.error(error);
      console.alert(alert);
    });
  }

  firebase.auth().onAuthStateChanged(function() {
    $rootScope.user = firebase.auth().currentUser;
    // console.log($rootScope.user);

    if (!$rootScope.user) {
      $location.path("login");
    }

    $rootScope.$apply();
  });

  // I've implemented it myself and then found almost identical solution: http://stackoverflow.com/a/11542936/775359
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if (!$rootScope.user) { // if we are not logged in we should redirect to login
      if (next.$$route.controller === "LoginCtrl") { // if we are already going to login: great
        return;
      } else { // otherwise redirecting to login
        $location.path( "/login" );
      }
    } 
  });

});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });