import Task from "../domain/task/task";
import { Request, Response } from "express";


class TaskController {
    public static async list(req: Request, res: Response) {
        const tasks = await Task.list();
        res.status(200).send(tasks);
    }

    public static async add(req: Request, res: Response) {
        const task = await Task.add(req.body);
        res.status(200).send(task);
    }

    public static async edit(req: Request, res: Response) {
        const task = await Task.edit(req.body);
        res.status(200).send(task);
    }
}

export = TaskController;