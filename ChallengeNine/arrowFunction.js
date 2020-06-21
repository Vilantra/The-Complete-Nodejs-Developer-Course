/*
Goal: create method to get  incomplete task

1. Define getTaskToDo method
2. Use filter to return just incomplete task(arrow function)
3. Test your work by running the script
*/

const task = {
    task: [{
            text: "Grocery shopping",
            completed: true
        },
        {
            text: "Clean yard",
            completed: false
        }, {
            text: "Film course",
            completed: false
        }
    ],
    getTaskToDo() {
        return this.task.filter(task => task.completed === false)
    }
}

console.log(task.getTaskToDo());