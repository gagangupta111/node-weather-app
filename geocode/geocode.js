var NodeGeocoder = require('node-geocoder');

const fetchAddress =  (address, callback) => {

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
        
        callback(undefined, {
            address: res[0].formattedAddress,
            latitude: res[0].latitude,
            longitude: res[0].longitude,
            googlePlaceId: res[0].extra.googlePlaceId
        });
    
      })
      .catch(function(err) {

        callback(err);

    });

}

module.exports.fetchAddress = fetchAddress;
