app.service("eventService", function($rootScope) {

	var service = {};

	service.attend = function(params) {
		console.log("attending", params);

		firebase.database().ref("users/" + params.uid + "/events/" + params.eventId).set(true);
		firebase.database().ref("events/" + params.eventId + "/users/" + params.userId).set(true);
	};	

	service.cancel = function(params) {
		console.log("cancelling", params);
	};

	return service;
});