app.service("userService", function($rootScope) {

	var service = {};

	service.createUser = function(params) {
		firebase.database().ref("users/" + params.uid).update(
			{
				"email": params.email,
				"lastLogin": new Date().getTime()
			}
		);
	};

	return service;
});