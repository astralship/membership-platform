app.controller("LoginCtrl", function($scope, $location, userService) {
  var _clear = function() {
    $scope.data = { 
      state : "login",
      email : "",
      password : "",
      repeat : ""
    };
  };

  _clear(); // setting default data initially, also used in other places

  var search = $location.search(); // so that can link directly to login / craete / reset
  if (search.create) {
    $scope.data.state = "create";
  } else if (search.login) {
    $scope.data.state = "login";
  } else if (search.reset) {
    $scope.data.state = "reset";
  }

  $scope.doLogin = function() {

    firebase.auth().signInWithEmailAndPassword($scope.data.email, $scope.data.password)
      .then(function(user) {
        $location.path("dashboard");
        $scope.$apply();
      })
      .catch(function(error) {
        console.error(error.code);
        console.error(error.message);
        alert(error.message);
      });
  };

  $scope.doCreate = function() {
    if ($scope.data.password !== $scope.data.repeat) {
      alert("Password should be the same");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword($scope.data.email, $scope.data.password)
      .then(function(user) {
        userService.updateUser({
          uid:       user.uid,
          email:     user.email
        });

        $location.path("dashboard");
        $scope.$apply();

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
        $scope.message = "Password email reset sent";
        $scope.$apply();
      }).catch(function(error) {
        console.error(error.code);
        console.error(error.message);
        alert(error.message);
      });
  };

});