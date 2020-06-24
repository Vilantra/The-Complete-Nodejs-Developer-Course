const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(('Unable to connect to database!'));
    }
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Karen',
    //     age: 35
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(('Unable to insert user!'));
    //     }
    //     console.log(result.ops);

    // })
    // db.collection('users').insertMany([{
    //     name: 'Susan',
    //     age: 25
    // }, {
    //     name: 'Hola',
    //     age: 30
    // }], (error, result) => {
    //     if (error) {
    //         return console.log(('Unable to insert user!'));
    //     }
    //     console.log(result.ops);

    // })

    db.collection('task').insertMany([{
        description: 'Take course nodejs',
        completed: true
    }, {
        description: 'Go to the Supermarket',
        completed: false
    }], (error, result) => {
        if (error) {
            return console.log(('Unable to insert user!'));
        }
        console.log(result.ops);

    })
})

/*
GOAL: Insert 3 task into a new collection

1. Use insertMany to insert to documents
    - description(string), completed(boolean)
2. Setup the callback to handle error or print ops
3. Run the script
4. Refresh the database in Robo 3t and view data in task collection
*/