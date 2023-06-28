// Artist Outreach Code

// Function to handle AJAX requests
function sendAjaxRequest(url, data, success) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			success(xhr.responseText);
		}
	};
	xhr.open('POST', url, true);
	xhr.send(data);
}

// Function to get artists from the backend server
function fetchArtists(callback) {
	var url = '/getArtists';
	sendAjaxRequest(url, {}, function(response) {
		var artists = JSON.parse(response);
		callback(artists);
	});
}

// Function to get contact info for a given artist
function fetchContactInfo(artist, callback) {
	var url = '/getContactInfo';
	sendAjaxRequest(url, {artist: artist}, function(response) {
		var contactInfo = JSON.parse(response);
		callback(contactInfo);
	});
}

// Function to send outreach message to a given contact
function sendOutreachMessage(contact, message, callback) {
	var url = '/sendOutreachMessage';
	sendAjaxRequest(url, {contact: contact, message: message}, function(response) {
		var success = JSON.parse(response);
		callback(success);
	});
}

// Function to send outreach emails to all artists
function sendOutreachEmails() {
	fetchArtists(function(artists) {
		for (var i = 0; i < artists.length; i++) {
			var artist = artists[i];
			fetchContactInfo(artist, function(contactInfo) {
				var contact = contactInfo.email;
				var message = 'Hello ' + artist + '\nWe would like to invite you to join our artist outreach program.\n\nBest,\nThe Artist Outreach Team';
				
				sendOutreachMessage(contact, message, function(success) {
					if (success) {
						console.log('Outreach message sent to ' + artist);
					} else {
						console.log('ERROR: Failed to send outreach message to ' + artist);
					}
				});
			});
		}
	});
}