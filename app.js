const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

const argv = yargs
    .options({
      a: {
        demand: true,
        alias: 'address',
        describe: ' Address to fetch weather for',
        string: true,
      }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

geocode.fetchAddress(argv.address, (errorMessage, addressDetails) => {

    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(addressDetails, undefined, 2));
        weather.getWeather(addressDetails.latitude, addressDetails.longitude, (err, weatherDetail) => {
            if(err){
                console.log(err);
            }else{
                console.log(`Tempreture is ${weatherDetail.temperature}`);
                console.log("Other weather information", JSON.stringify(weatherDetail));
            }
        });
    }

});

