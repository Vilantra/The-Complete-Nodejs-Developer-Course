const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

/*
Goal: Create a model for task
1. Define the model with description and completed fields
2. Create a new instance of the model 
3. Save the model to database
4. Test your work!
*/

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task1 = new Task({
    description: "take course nodejs",
    completed: false
});

task1.save().then(result => {
    console.log(task1);
}).catch(error => {
    console.log(error);

})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });

// const me = new User({
//     name: "Karen",
//     age: 35
// });

// me.save().then(result => {
//     console.log(me);

// }).catch(error => {
//     console.log([`Error ${error}`]);

// })