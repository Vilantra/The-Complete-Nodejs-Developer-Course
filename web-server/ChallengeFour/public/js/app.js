console.log('Client side javascript file is loaded!');
/*
Goal: Use input value to get weather
1. Migrate fetch call into the submit callback
2. Use the search text as the address query string value
3. Submit the form with a valid a invalid to test
*/

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value
    console.log(location);

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })

})