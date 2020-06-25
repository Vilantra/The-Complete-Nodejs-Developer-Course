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

        // db.collection('users').updateOne({ _id: new ObjectID("5ef3db7437eb37ac560f6136") }, {
        //     $set: {
        //         name: "Andrea"
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        db.collection('task').updateMany({ completed: false }, {
            $set: {
                completed: true
            }
        }).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);

        })
    })
    /*
    Goal : Use updateMany to complete all task
    1. Check the documentation for updateMany
    2. Setup the call with the query and the updates
    3. Use promise method to setup the success/error handler
    4. Test your work!

   
    */