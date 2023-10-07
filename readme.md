# Task Manager
My personal task manager. It's a work in progress, but it's already usable.

## Motivation
I've been using [Google Calendar](https://calendar.google.com) for a long time to manage my tasks. It's a great tool, but it's not perfect. I want to be able to customize it to my needs, and I want to be able to add features that I want. I also want to be able to use it as a way to pratice hexagonal architecture and microservices.

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Node Test Runner](https://nodejs.org/api/test.html)
- [Bootstrap](https://getbootstrap.com/)

## Architecture
Hexagonal architecture. The domain will be independent of the infrastructure. The infrastructure is the database, the web server, and the web client. The web client is a single page application that communicates with the web server using REST.


## Features

- [x] Add tasks
- [x] Remove tasks
- [x] List tasks
- [x] Edit tasks
- [ ] Calendar view
- [ ] Task tags
- [ ] Task recurrence
- [ ] Task reminders
- [ ] Docker
- [ ] Production database
- [ ] Deploy to production on Vercel
- [ ] Microservices architecture
    - [ ] Web client
    - [ ] Mobile client
    - [ ] Web server
    - [ ] Authentication server
    - [ ] Database
- [ ] Tests
- [ ] Authentication

## Configuration

```shell
npm install
tsc
npm run create-db
```

## Running

```shell
npm run start
```

## Testing

```shell
npm run test
```