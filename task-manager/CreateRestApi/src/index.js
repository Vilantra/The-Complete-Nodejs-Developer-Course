const express = require('express');
require('./db/moongose');
const User = require('./db/models/user');
const Task = require('./db/models/task');

const app = express();
const port = process.argv.PORT || 3000;

/*
Goal: Setup the task creation endpoint
1. Create separate file for the task model (load it into index.js)
2. Create the task creation endpoint (handle success and error)
3. Test the endpoint from postman with good and bad data
*/

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})