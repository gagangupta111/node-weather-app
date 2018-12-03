const request = require('request');

const getWeather = (lattitude, longitude, callback) => {

    request({
        uri: 'https://api.darksky.net/forecast/ef62f6404bca6aa6ef55c4bc67b5dcf5/' + lattitude + ',' + longitude,
        json: true
    }, (error, response, body) => {
    
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
            });
        }else{
            console.log("Unable to fetch weather");
        }
    });

}

module.exports.getWeather = getWeather;
