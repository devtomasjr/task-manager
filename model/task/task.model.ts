import * as fs from 'fs';

class Task {
    private static readonly filePath = 'data/tasks.json';

    public static listAll(): any[] {
        return JSON.parse(fs.readFileSync(this.filePath).toString());
    }

    public static add(task: any): any {
        const tasks = this.listAll();
        const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
        task.id = lastId + 1;
        tasks.push(task);
        fs.writeFileSync(this.filePath, JSON.stringify(tasks));
        return task;
    }

    public static update(task: any): any {
        const tasks = this.listAll();
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index] = task;
        fs.writeFileSync(this.filePath, JSON.stringify(tasks));
        return task;
    }
}

export default Task;
