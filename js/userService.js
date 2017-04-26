app.service("userService", function($rootScope, $q) {

	var service = {};

	service.get = function() {
		return firebase.database().ref("users/" + $rootScope.user.uid); 
	};

	service.updateUser = function(params) {
		var uid = params.uid;
		delete params.uid;

		return firebase.database().ref("users/" + uid).update(params);
	};

	return service;
});