const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

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

        // db.collection('task').insertMany([{
        //         description: 'Take course js',
        //         completed: false
        //     }, {
        //         description: 'Go to the cinema',
        //         completed: false
        //     }], (error, result) => {
        //         if (error) {
        //             return console.log(('Unable to insert user!'));
        //         }
        //         console.log(result.ops);

        //     })
        // db.collection('users').findOne({ _id: new ObjectID("5ef3de928c4c00ac841c9cc8") }, (error, user) => {
        //         if (error) {
        //             return console.log(('Unable to insert user!'));
        //         }
        //         console.log(user);
        //     })
        // db.collection('users').find({ age: 35 }).toArray((error, users) => {
        //     console.log(users);
        // })
        // db.collection('users').find({ age: 35 }).count((error, count) => {
        //     console.log(count);
        // })

        db.collection('task').findOne({ _id: new ObjectID("5ef400915a890cb153d590b0") }, (error, task) => {
            if (error) {
                return console.log(('Unable to insert user!'));
            }
            console.log(task);
        })
        db.collection('task').find({ completed: false }).toArray((error, task) => {
            console.log(task);
        })

    })
    /*
    Goal : Use find and fineOne with task

    1. Use findOne to fetch the last task by its id (print doc to console)
    2. Use find to fech all task are not completed (print doc to console)
    3. Test your work!
    */