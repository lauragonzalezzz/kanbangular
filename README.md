# Kanbangular
---
[Kanbangular](https://dry-caverns-85168.herokuapp.com/)

## Introduction
---
Kanbangular is a single page kanban style web app created by [Natalie](www.github.com/nat-nat33) and [Laura](www.github.com/lauragonzalezzz).
This project utilizes the following:
- AngularJS
- PostgreSQL
- Sequelize
- NodeJS
- ExpressJS
- PassportJS
- bcrypt
- SASS
- Gulp

## Installation
---
```sh
$ npm install
```
```sh
$ psql
```
```sh
$ CREATE DATABASE kanbangular
```
```sh
$ \q
```
```sh
$ sequelize db:seed:all
```
```sh
$ node server.js
```

## User Guide
---
Visit our live site [here](https://dry-caverns-85168.herokuapp.com/) or continue locally using the following instructions:

1. If you are a first time user, click the orange *Registration* button to create an account, you will be automatically logged in.

2. If you are a returning user, click the orange *Login* button and enter your username and password.

3. Create a new task by clicking the green *Add Task* button, fill out each of the form fields, and click *Submit*. You will see your task add to the queue.

4. Edit tasks by clicking the *pencil* icon.

5. Delete tasks by clicking the *trash* icon.

6. To change task status, drag the task card to the appropriate column.

7. If you would like to logout, click the orange *Logout* button.

