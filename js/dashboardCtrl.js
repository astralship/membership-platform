app.controller("DashboardCtrl", function($rootScope, $scope, eventService, userService) {


	eventService.get().once('value').then(function(snapshot) {
	  var data = snapshot.val();
	  $scope.events = data;
	  $scope.$apply();
	});



	$scope.attend = function(id) {
		eventService.attend({
			uid: $rootScope.user.uid,
			eventId: id
		})
	};

	$scope.cancel = function(id) {
		eventService.cancel({
			uid: $rootScope.user.uid,
			eventId: id
		})
	}

});