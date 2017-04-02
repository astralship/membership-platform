app.controller("DashboardCtrl", function($rootScope, $scope) {
	$scope.message = "It works!";

	$scope.signout = function() {
		$rootScope.signout();
	};
});