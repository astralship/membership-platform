app.controller("DashboardCtrl", function($rootScope, $scope) {

	firebase.database().ref('/events/').once('value').then(function(snapshot) {
	  var data = snapshot.val();
	  $scope.events = data;
	  $scope.$apply();
	});

});