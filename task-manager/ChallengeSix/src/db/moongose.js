const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

/*
Goal: Add a password field to User
1. Setup the field as a required string
2. Ensure the length is greater than 6
3. Trim a password
4. Ensure that password doesn't contain "password"
5. Test your work"
*/

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
});

const me = new User({
    name: "Karen",
    password: "wwww",
    email: "kkaa@gmail.com"
});

me.save().then(result => {
    console.log(me);

}).catch(error => {
    console.log([`Error ${error}`]);

})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// });

// const task1 = new Task({
//     description: "take course nodejs",
//     completed: false
// });

// task1.save().then(result => {
//     console.log(task1);
// }).catch(error => {
//     console.log(error);

// })