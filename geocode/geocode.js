var NodeGeocoder = require('node-geocoder');

function fetchAddress(address) {

    var options = {
        provider: 'google',
      
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyCYU-2LiH6mJ3YGw32x1YGx_wPrrKsrp00', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
      };
      
    var geocoder = NodeGeocoder(options);

    // promise
    geocoder.geocode(address)
      .then(function(res) {
    
        console.log("================================");
        console.log('res[0].extra.googlePlaceId:', res[0].extra.googlePlaceId);
        console.log('res[0].formattedAddress:', res[0].formattedAddress);
        console.log('res[0].latitude:', res[0].latitude);
        console.log('res[0].longitude:', res[0].longitude);
        console.log("================================");
    
      })
      .catch(function(err) {
        console.log("================================");
        console.log(err);
        console.log("================================");
      });

}

module.exports.fetchAddress = fetchAddress;
