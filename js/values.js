var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date(); // Create Date object.

// currentTime will look like '2018-08-01 at 20:40:00'
var currentTime = currentDate.getFullYear() + '-' + 	// Set year
					(currentDate.getMonth() + 1)+ '-' + // Set month
					currentDate.getDate() + ' at ' + 	// Set day of the month
					currentDate.getHours() + ':' +		// Set hours (military time)
					currentDate.getMinutes() + ':' + 	// Set minutes
					currentDate.getSeconds();			// Set seconds