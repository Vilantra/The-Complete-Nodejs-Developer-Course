const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

/*
Goal: Accept location via command line argument

1. Access the command line argument without yargs
2. Use the string value as the input for geocode
3. Only geocode if a location was provided
4. Test your work with a couple locations
*/

const address = process.argv[2];

if (!address) {
    console.log('ingrese una ubicacion');
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error', error);
        }
        // const { latitude, longitude } = data;
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}