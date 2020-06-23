const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmlsYW50cmEiLCJhIjoiY2ticjdlbHoyMXowdjJzdG1vMnppbXQzdCJ9.oq0W7K3rHWuCJLCGeeO8mA`;
    request({ url: url, json: true }, (error, response) => {
        const { center, place_name } = response.body.features[0];
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    });
}

module.exports = geocode;