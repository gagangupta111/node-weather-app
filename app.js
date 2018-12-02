
var request = require('request');

console.log(" calling http://www.google.com ");
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body.title); // Print the HTML for the Google homepage.
});

console.log(" calling google address api ");
request({
    uri: "http://maps.googleapis.com/maps/api/geocode/json?address=varodra",
    json : true
}, (error, response, body) => {
    console.log(body);
});

