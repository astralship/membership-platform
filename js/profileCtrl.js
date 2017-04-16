app.controller("ProfileCtrl", function($rootScope, $scope, userService) {

	$scope.user     = firebase.auth().currentUser;
	var _userBackup = angular.copy($scope.user);

	$scope.cancel = function() {
		$scope.user = _userBackup;
	};

	$scope.save = function() {
		var params = { uid: $scope.user.uid };

		if ($scope.user.name)      params.name      = $scope.user.name;
		if ($scope.user.facebook)  params.facebook  = $scope.user.facebook;
		if ($scope.user.instagram) params.instagram = $scope.user.instagram;
		if ($scope.user.phone)     params.phone     = $scope.user.phone;
		if ($scope.user.website)   params.website   = $scope.user.website;
		if ($scope.user.services)  params.services  = $scope.user.services;

		userService.updateUser(params);
	};


	firebase.database().ref('/events/').once('value').then(function(snapshot) {
	  var data = snapshot.val();
	  $scope.events = data;
	  $scope.$apply();
	});

});