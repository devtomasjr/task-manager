import { createServer } from 'node:http'
import Task from './model/task/task'
import Database from './model/database/database';

async function handler(request: any, response: any) {
    if (request.url == '/api/tasks') {
        if (request.method == 'GET') {
            const tasks = Task.listAll();
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(tasks));
        } else if (request.method == 'POST') {
            let body = '';
            request.on('data', (chunk: any) => {
                body += chunk.toString();
            });
            request.on('end', () => {
                const task = Task.add(JSON.parse(body));
                response.writeHead(201, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(task));
            });
        } else {
            response.writeHead(405, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: 'Method not allowed' }));
        }
    }

}

const app = createServer(handler)

app.listen(3010, () => {
  console.log('Server listening on port 3010')
  Database.createFile(true);
})