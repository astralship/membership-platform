app.controller("DashboardCtrl", function($rootScope, $scope) {
	$scope.message = "It works!";

	$scope.signOut = function() {
		$rootScope.signOut();
	};
});