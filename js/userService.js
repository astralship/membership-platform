app.service("userService", function($rootScope) {

	var service = {};

	service.updateUser = function(params) {
		var uid = params.uid;
		delete params.uid;

		firebase.database().ref("users/" + params.uid).update(params);
	};

	return service;
});