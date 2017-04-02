app.controller("LoginCtrl", function($scope) {
  var _clear = function() {
    $scope.data = { 
      state : "login",
      email : "",
      password : "",
      repeat : ""
    };
  };

  _clear(); // setting default data initially, also used in other places

  $scope.doLogin = function() {

    firebase.auth().signInWithEmailAndPassword($scope.data.email, $scope.data.password)
      .then(function(user) {
        $state.go("home");
        _clear();
      })
      .catch(function(error) {
        console.error(error.code);
        console.error(error.message);
        alert(error.message);
      });
  };

  $scope.doCreate = function() {
    if ($scope.data.password !== $scope.data.repeat) {
      alert("Passwords must match.");
      return;
    }

    overlay.loading();

    firebase.auth().createUserWithEmailAndPassword($scope.data.email, $scope.data.password)
      .then(function(user) {
        $state.go("home");
        _clear();
      })
      .catch(function(error) {
        console.error(error.code);
        console.error(error.message);
        alert(error.message);
      });
  };

  $scope.doReset = function() {
    firebase.auth().sendPasswordResetEmail($scope.data.email)
      .then(function(user) {
        _clear();
        $scope.$apply(); // async reset, need manually kick
      }).catch(function(error) {
        console.error(error.code);
        console.error(error.message);
        alert(error.message);
      });
  };

});