import Database from '../database/database';

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    idStatus: number;
    timeEstimated: number;
    timeSpent: number;
    createdAt: Date;
}

class Task {

    public static listAll(): Task[] {
        return Database.read();
    }

    public static add(task: any): Task {
        const tasks = this.listAll();
        const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
        task.id = lastId + 1;
        tasks.push(task as Task);
        Database.write(tasks);
        return task;
    }

    public static update(task: Task): Task {
        const tasks = this.listAll();
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index] = task;
        Database.write(tasks);
        return task;
    }
}

export default Task;
