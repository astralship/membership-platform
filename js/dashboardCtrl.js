app.controller("DashboardCtrl", function($rootScope, $scope) {

	$scope.signOut = function() {
		$rootScope.signOut();
	};
});