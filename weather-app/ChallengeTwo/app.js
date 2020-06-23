const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=1c4a11231aa6929591c456d5e048c33d&query=New%20York'

// request({ url: url, json: true }, (error, response) => {
//     const { temperature, feelslike } = response.body.current;
//     console.log(`It is currently ${temperature} degress out. It feel like ${feelslike} degrees out`);
// })

/*
Goal: Print the lat /long for los Angeles
1. Fire off a new request to the URL explored in browser
2. Have a request module parse it as JSON
3. Print both the latitude and longitude to the terminal
4. Test your work!
*/

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlsYW50cmEiLCJhIjoiY2ticjdlbHoyMXowdjJzdG1vMnppbXQzdCJ9.oq0W7K3rHWuCJLCGeeO8mA';

request({ url: url, json: true }, (error, response) => {
    const { center, place_name } = response.body.features[0];
    console.log(`latitud ${center[1]} and longitud ${center[0]}`);
})