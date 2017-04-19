app.controller("DashboardCtrl", function($rootScope, $scope, $q, eventService, userService) {

	eventService.get().once('value').then(function(snapshot) {
	  var data = snapshot.val();
	  $scope.events = data;
	  $scope.events.forEach(function(event) { event.attendees = event.attendees || {}; }) // sanite data so that I can add mark as attending later on
	  console.log("Events: ", $scope.events);
	  $scope.$apply();
	});

	$scope.attend = function(id, event) {
		event.attendees[$rootScope.user.uid] = true;
		eventService.attend({
			uid: $rootScope.user.uid,
			eventId: id
		})
	};

	$scope.cancel = function(id, event) {
		event.attendees[$rootScope.user.uid] = false;
		eventService.cancel({
			uid: $rootScope.user.uid,
			eventId: id
		})
	}

});