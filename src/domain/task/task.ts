import Database from '../../infra/database/database';

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    idStatus: number;
    timeEstimated: number;
    timeSpent: number;
    createdDate: Date;
    startedDate?: Date;
    deadline: Date;
}

class Task {
    public static list(): Task[] {
        const tasks = Database.read();
        return tasks;
    }

    public static add(task: Task): Task {
        const tasks = this.list();
        const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
        task.id = lastId + 1;
        tasks.push(task as Task);
        Database.write(tasks);
        return task;
    }

    public static edit(task: Task): Task {
        const tasks = this.list();
        const index = tasks.findIndex((t) => t.id == task.id);
        if (index < 0) {
            throw new Error('Task not found');
        }
        tasks[index] = {...tasks[index], ...task};
        Database.write(tasks);
        return tasks[index];
    }

    public static delete(id: number): Task {
        const tasks = this.list();
        const index = tasks.findIndex((t) => t.id == id);
        const task = tasks[index];
        tasks.splice(index, 1);
        Database.write(tasks);
        return task;
    }

    public static get(id: number): Task {
        const tasks = this.list();
        const index = tasks.findIndex((t) => t.id == id);
        return tasks[index];
    }
}

export default Task;
