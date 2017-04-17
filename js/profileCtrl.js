app.controller("ProfileCtrl", function($rootScope, $scope, userService) {

	var _userBackup;
	userService.get().once("value").then(function(snap) {

		$scope.user = snap.val();
		$scope.$apply();
	})

	$scope.cancel = function() {
		$scope.user = _userBackup;
	};

	$scope.save = function() {
		var params = { uid: $rootScope.user.uid };

		if ($scope.user.name)      params.name      = $scope.user.name;
		if ($scope.user.facebook)  params.facebook  = $scope.user.facebook;
		if ($scope.user.instagram) params.instagram = $scope.user.instagram;
		if ($scope.user.phone)     params.phone     = $scope.user.phone;
		if ($scope.user.website)   params.website   = $scope.user.website;
		if ($scope.user.services)  params.services  = $scope.user.services;

		console.log("saving profile", params);

		userService.updateUser(params);
	};

});