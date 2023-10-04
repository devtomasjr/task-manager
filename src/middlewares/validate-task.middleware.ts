import Task from "../domain/task/task";
import { Request, Response, NextFunction } from "express";


class ValidateTask {
    public static add(req: Request, res: Response, next: NextFunction) {
        const task = req.body as Task;
        const errors: string[] = [];
        if (!task.title) {
            errors.push('Title is required');
        }
        if (!task.description) {
            errors.push('Description is required');
        }
        if (!task.idStatus) {
            errors.push('IdStatus is required');
        }
        if (!task.timeEstimated) {
            errors.push('TimeEstimated is required');
        }
        if (!task.timeSpent) {
            errors.push('TimeSpent is required');
        }
        if (!task.createdDate) {
            errors.push('CreatedDate is required');
        }
        if (!task.deadline) {
            errors.push('Deadline is required');
        }
        if (errors.length > 0) {
            res.status(400).send({ errors });
        } else {
            next();
        }
    }

    public static edit(req: Request, res: Response, next: NextFunction) {
        const task = req.body as Task;
        const errors: string[] = [];
        if (!task.id) {
            errors.push('Id is required');
        } else {
            next();
        }
    }

    public static delete(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const errors: string[] = [];
        if (!id) {
            errors.push('Id is required');
        }
        if (errors.length > 0) {
            res.status(400).send({ errors });
        } else {
            next();
        }
    }

    public static get(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const errors: string[] = [];
        if (!id) {
            errors.push('Id is required');
        }
        if (errors.length > 0) {
            res.status(400).send({ errors });
        } else {
            next();
        }
    }

    public static list(req: Request, res: Response, next: NextFunction) {
        next();
    }
    
}

export = ValidateTask;