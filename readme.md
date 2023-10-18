# Task Manager
My personal task manager. It's a work in progress, but it's already usable.

## Motivation
I've been using [Google Calendar](https://calendar.google.com) for a long time to manage my tasks. It's a great tool, but it's not perfect. I want to be able to customize it to my needs, and I want to be able to add features that I want. I also want to be able to use it as a way to pratice hexagonal architecture and microservices and to learn new technologies.

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Node Test Runner](https://nodejs.org/api/test.html)
- [Bootstrap](https://getbootstrap.com/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) (TODO)
- [MongoDB](https://www.mongodb.com/) (TODO)
- [JWT](https://jwt.io/) (TODO)
- [Vercel](https://vercel.com/) (TODO)
- [React Native](https://reactnative.dev/) (TODO)
- [Jest](https://jestjs.io/) (TODO)


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
- [x] Docker
- [ ] Production database
- [ ] Deploy to production on Vercel
- [ ] JWT Authentication
- [ ] Microservices architecture
    - [ ] Web client
    - [ ] Mobile client
    - [ ] Web server
    - [ ] Authentication server
    - [ ] Database
- [ ] Tests
    - [x] Unit tests for the domain
    - [ ] Unit tests for the web server

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