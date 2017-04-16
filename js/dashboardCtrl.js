app.controller("DashboardCtrl", function($rootScope, $scope, eventService) {

	firebase.database().ref('/events/').once('value').then(function(snapshot) {
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

});