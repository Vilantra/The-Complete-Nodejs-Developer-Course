const express = require('express');
require('./db/moongose');
const User = require('./db/models/user');
const Task = require('./db/models/task');

const app = express();
const port = process.argv.PORT || 3000;

app.use(express.json());

app.post('/users', async(req, res) => {
    const user = new User(req.body);
    try {
        await user.save()
        res.send(user)
    } catch (e) {
        res.send(e)
    }
});

app.get('/users', async(req, res) => {
    try {
        const users = await User.find({})
        res.send(users);
    } catch (e) {
        res.status(500).send(e)
    }
});
app.get('/users/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(400).send()
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e)
    }
})

app.patch('/users/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send()
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/users/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e)
    }
})

app.post('/tasks', async(req, res) => {
    const task = new Task(req.body);
    try {
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks);
    } catch (e) {
        res.status(500).send(e)
    }
});

app.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(400).send()
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e)
    }
})
app.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task);
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/tasks/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})