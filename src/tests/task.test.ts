import { describe, it } from 'node:test';
import { strict as  assert } from 'node:assert';
import Task from '../domain/task/task';
import Database from '../infra/database/database';


describe('add task', () => {
    let taskId = 0;
    const createdDate = new Date();
    it('should add task', () => {
        Database.createFile(true);
        const task = Task.add({
            title: 'Test task',
            description: 'Test task',
            status: 'To Do',
            idStatus: 1,
            timeEstimated: 0,
            timeSpent: 0,
            createdDate: createdDate
        } as Task);
        assert.equal(typeof task.id, 'number');
        assert.equal(typeof task.title, 'string');
        assert.equal(task.title, 'Test task');
        assert.equal(typeof task.description, 'string');
        assert.equal(task.description, 'Test task');
        assert.equal(typeof task.status, 'string');
        assert.equal(task.status, 'To Do');
        assert.equal(typeof task.idStatus, 'number');
        assert.equal(task.idStatus, 1);
        assert.equal(typeof task.timeEstimated, 'number');
        assert.equal(task.timeEstimated, 0);
        assert.equal(typeof task.timeSpent, 'number');
        assert.equal(task.timeSpent, 0);
        assert.equal(typeof task.createdDate, 'string');
        assert.equal(new Date(task.createdDate), createdDate);
        taskId = task.id;
    });
    it('should get task', () => {
        const task = Task.get(taskId);
        assert.equal(typeof task.id, 'number');
        assert.equal(typeof task.title, 'string');
        assert.equal(task.title, 'Test task');
        assert.equal(typeof task.description, 'string');
        assert.equal(task.description, 'Test task');
        assert.equal(typeof task.status, 'string');
        assert.equal(task.status, 'To Do');
        assert.equal(typeof task.idStatus, 'number');
        assert.equal(task.idStatus, 1);
        assert.equal(typeof task.timeEstimated, 'number');
        assert.equal(task.timeEstimated, 0);
        assert.equal(typeof task.timeSpent, 'number');
        assert.equal(task.timeSpent, 0);
        assert.equal(typeof task.createdDate, 'string');
        assert.equal(new Date(task.createdDate), createdDate);
    });
    it('should edit task', () => {
        const task = Task.edit({
            id: taskId,
            title: 'Test task edited',
            description: 'Test task edited',
            status: 'Doing',
            idStatus: 2,
            timeEstimated: 0,
            timeSpent: 0,
            createdDate: createdDate
        } as Task);
        assert.equal(typeof task.id, 'number');
        assert.equal(typeof task.title, 'string');
        assert.equal(task.title, 'Test task edited');
        assert.equal(typeof task.description, 'string');
        assert.equal(task.description, 'Test task edited');
        assert.equal(typeof task.status, 'string');
        assert.equal(task.status, 'Doing');
        assert.equal(typeof task.idStatus, 'number');
        assert.equal(task.idStatus, 2);
        assert.equal(typeof task.timeEstimated, 'number');
        assert.equal(task.timeEstimated, 0);
        assert.equal(typeof task.timeSpent, 'number');
        assert.equal(task.timeSpent, 0);
        assert.equal(typeof task.createdDate, 'string');
        assert.equal(new Date(task.createdDate), createdDate);
    });
    it('should list tasks', () => {
        const tasks = Task.list();
        assert.equal(tasks.length, 1);
        assert.equal(typeof tasks[0].id, 'number');
        assert.equal(typeof tasks[0].title, 'string');
        assert.equal(tasks[0].title, 'Test task edited');
        assert.equal(typeof tasks[0].description, 'string');
        assert.equal(tasks[0].description, 'Test task edited');
        assert.equal(typeof tasks[0].status, 'string');
        assert.equal(tasks[0].status, 'Doing');
        assert.equal(typeof tasks[0].idStatus, 'number');
        assert.equal(tasks[0].idStatus, 2);
        assert.equal(typeof tasks[0].timeEstimated, 'number');
        assert.equal(tasks[0].timeEstimated, 0);
        assert.equal(typeof tasks[0].timeSpent, 'number');
        assert.equal(tasks[0].timeSpent, 0);
        assert.equal(typeof tasks[0].createdDate, 'string');
        assert.equal(new Date(tasks[0].createdDate), createdDate);
    });
    it('should delete task', () => {
        Task.delete(taskId);
        const task = Task.get(taskId);
        assert.equal(task, undefined);
    });
});