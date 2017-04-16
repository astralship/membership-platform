app.controller("ProfileCtrl", function($rootScope, $scope, userService) {

	$scope.user = firebase.auth().currentUser;

	var _userBackup = angular.copy($scope.user);


	$scope.cancel = function() {
		$scope.user = _userBackup;
	};

	$scope.save = function() {
		userService.updateUser({
			uid: $scope.user.uid,
			name: $scope.user.name,
			facebook: $scope.user.facebook,
			instagram: $scope.user.instagram,
			phone: $scope.user.phone,
			website: $scope.user.website,
			services: $scope.user.services
		});
	};


	firebase.database().ref('/events/').once('value').then(function(snapshot) {
	  var data = snapshot.val();
	  $scope.events = data;
	  $scope.$apply();
	});

});