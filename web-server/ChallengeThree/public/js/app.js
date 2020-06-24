console.log('Client side javascript file is loaded!');

/*
Goal: Fetch weather 
1. Setup a call to fetch to fetch weather for Boston
2. Get the parse JSON response
    - If error property, print error
    - If no error property, print location and forecast
3. Refresh the browser and test your work
*/

fetch('http://localhost:3000/weather?address=temuco').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    })
})