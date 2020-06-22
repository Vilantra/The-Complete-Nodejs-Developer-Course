const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=1c4a11231aa6929591c456d5e048c33d&query=New%20York'

request({ url: url, json: true }, (error, response) => {
    const { temperature, feelslike } = response.body.current;
    console.log(`It is currently ${temperature} degress out. It feel like ${feelslike} degrees out`);
})

/*
Goal: Print  a small forecast to the user
1. Print: It is currently ${temperature} degress out. It feel like ${feelslike} degrees out
2. Test your work
*/