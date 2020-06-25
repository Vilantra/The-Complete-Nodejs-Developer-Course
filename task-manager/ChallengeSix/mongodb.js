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
    // db.collection('users').deleteMany({
    //     age: 35
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // })

    const query = "Take couse nodejs"
    db.collection('task').deleteOne({
        description: query
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })

})