interface Task {
    id: number;
    name: string;
    completed: boolean;
}

class TaskService {
    private tasks: Task[] = [];

    // Create
    addTask(name: string) {
        const newTask: Task = {
            id: this.tasks.length + 1,
            name,
            completed: false
        };
        this.tasks.push(newTask);
        return newTask;
    }

    // Read
    getTasks() {
        return this.tasks;
    }

    // Update
    updateTask(id: number, updatedTask: Task) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        this.tasks[taskIndex] = updatedTask;
        return this.tasks[taskIndex];
    }

    // Delete
    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}

const taskService = new TaskService();

// Adding a new task
taskService.addTask("Learn TypeScript");
taskService.addTask("Create CRUD example");

// Getting all tasks
const tasks = taskService.getTasks();

// Updating a task
taskService.updateTask(1, { id: 1, name: "Update task", completed: true });

// Deleting a task
taskService.deleteTask(2);

// Displaying the tasks in an HTML table
const table = document.createElement("table");
table.innerHTML = <thead><tr><th>ID < /th> <th>Name</th > <th>Completed < /th> </tr > </thead> <tbody> ${tasks.map(task =>
    < tr >
    <td>${ task.id } </td>
        < td > ${ task.name } </>
            < td > ${ task.completed } </>
                < /tr>
).join("")} </tbody>;
document.body.appendChild(table);