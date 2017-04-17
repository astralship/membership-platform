app.service("eventService", function($rootScope) {

	var service = {};

	service.get = function() {
		return firebase.database().ref('/events/');
	};

	service.attend = function(params) {
		console.log("attending", params);

		firebase.database().ref("users/" + params.uid + "/events/" + params.eventId).set(true);
		firebase.database().ref("events/" + params.eventId + "/attendees/" + params.uid).set(true);
	};	

	service.cancel = function(params) {
		console.log("cancelling", params);

		firebase.database().ref("users/" + params.uid + "/events/" + params.eventId).set(null);
		firebase.database().ref("events/" + params.eventId + "/attendees/" + params.uid).set(null);
	};

	return service;
});