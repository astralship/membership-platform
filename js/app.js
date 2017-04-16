var app = angular.module("app", ["ngRoute", "firebase"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: "LoginCtrl"
    })    
    .when('/help', {
      templateUrl: 'templates/help.html'
    })
    .when('/dashboard', {
      templateUrl: 'templates/dashboard.html',
      controller: "DashboardCtrl",
      resolve: { "currentAuth": function(Auth) { return Auth.$requireSignIn(); } }
    })    
    .when('/profile', {
      templateUrl: 'templates/profile.html',
      controller: "ProfileCtrl",
      resolve: { "currentAuth": function(Auth) { return Auth.$requireSignIn(); } }
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

  // https://github.com/firebase/angularfire/blob/master/docs/guide/user-auth.md
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });

  firebase.auth().onAuthStateChanged(function() {
    $rootScope.user = firebase.auth().currentUser;
  });

});

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });