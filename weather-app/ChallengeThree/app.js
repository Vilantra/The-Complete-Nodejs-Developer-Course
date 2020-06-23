const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

/*
Goal: Create a reusable fuction for getting the forecast

1. Setup a "forecast" functions in utils/forecast.js
2. Requiere the function in app.js and call it as shown below
3. The forecast function should have three potencial call to calback:
    - Low level error, pass string error
    - Coordinate error, pass string error
    - Success, pass forecast string for data (same format as from before)
*/

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})

geocode('curico', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})