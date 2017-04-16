app.controller("ProfileCtrl", function($rootScope, $scope) {

	$scope.user = firebase.auth().currentUser;

	firebase.database().ref('/events/').once('value').then(function(snapshot) {
	  var data = snapshot.val();
	  $scope.events = data;
	  $scope.$apply();
	});

});