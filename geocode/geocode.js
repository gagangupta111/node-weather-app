var NodeGeocoder = require('node-geocoder');

// call the provided callback with results and error
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
      .then((res) => {
        
        if(undefined === res[0]){
            callback('No results found for this address');
        }else{
            callback(undefined, {
                address: res[0].formattedAddress,
                latitude: res[0].latitude,
                longitude: res[0].longitude,
                googlePlaceId: res[0].extra.googlePlaceId
            });
        }
      })
      .catch((err) => {

        callback(err);

    });

}

// retuns the promise with resolve with results and reject with error
const fetchAddressReturnsPromise =  (address) => {

    return new Promise((resolve, reject) => {

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
          .then((res) => {       
            
            if(undefined === res[0]){
                reject('No results found for this address');
            }
            
            resolve({
                address: res[0].formattedAddress,
                latitude: res[0].latitude,
                longitude: res[0].longitude,
                googlePlaceId: res[0].extra.googlePlaceId
            });
          })
          .catch((err) => {    
            reject(err);    
        });

    });

}

module.exports.fetchAddress = fetchAddress;
module.exports.fetchAddressReturnsPromise = fetchAddressReturnsPromise;