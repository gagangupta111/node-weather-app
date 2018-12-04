const request = require('request');

// call the provided callback with results and error
const getWeather = (lattitude, longitude, callback) => {

    request({
        uri: 'https://api.darksky.net/forecast/ef62f6404bca6aa6ef55c4bc67b5dcf5/' + lattitude + ',' + longitude,
        json: true
    }, (error, response, body) => {
    
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                timezone: body.timezone,
                apparentTemperature: body.currently.apparentTemperature,
                pressure: body.currently.pressure,
                windSpeed: body.currently.windSpeed,
                cloudCover: body.currently.cloudCover,
            });
        }else{
            console.log("Unable to fetch weather");
        }
    });

}

// retuns the promise for resolve with results and reject with error
const getWeatherReturnsPromise = (lattitude, longitude) => {

    return new Promise((resolve, reject) => {

        request({
            uri: 'https://api.darksky.net/forecast/ef62f6404bca6aa6ef55c4bc67b5dcf5/' + lattitude + ',' + longitude,
            json: true
        }, (error, response, body) => {
        
            if(!error && response.statusCode === 200){
                resolve({
                    temperature: body.currently.temperature,
                    timezone: body.timezone,
                    apparentTemperature: body.currently.apparentTemperature,
                    pressure: body.currently.pressure,
                    windSpeed: body.currently.windSpeed,
                    cloudCover: body.currently.cloudCover,
                });
            }else{
                reject("Unable to fetch weather information.");
            }
        });

    });

}

module.exports.getWeather = getWeather;
module.exports.getWeatherReturnsPromise = getWeatherReturnsPromise;