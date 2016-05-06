'use strict';

const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      path       = require('path'),
      db         = require('./models'),
      Task       = db.Task;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/notstarted', (req, res) => {
  Tasks.findAll()
  .then((tasks) => {
    let tasksArr = [];
    tasks.forEach((eachTask) =>{
      if (eachTask.status === "notstarted"){
        tasksArr.push({
          title : eachTask.title,
          description : eachTask.description,
          dueDate : eachTask.dueDate,
          priority: eachTask.priority,
          status: eachTask.status
        })
      }
    });
  });
  // .catch(error){
  //   console.log(error);
  //   return res.send(error);
  // }
});

app.get('/api/inprogress', (req, res) => {
  Tasks.findAll()
  .then((tasks) => {
    let tasksArr = [];
    tasks.forEach((eachTask) =>{
      if (eachTask.status === 'inprogress'){
        tasksArr.push({
          title : eachTask.title,
          description : eachTask.description,
          dueDate : eachTask.dueDate,
          priority: eachTask.priority,
          status: eachTask.status
        });
      }
    });
  });
  // .catch(error){
  //   console.log(error);
  //   return res.send(error);
  // }
});

app.get('/api/completed', (req, res) => {
  Tasks.findAll()
  .then((tasks) => {
    let tasksArr = [];
    tasks.forEach((eachTask) =>{
      if (eachTask.status === "completed"){
        tasksArr.push({
          title : eachTask.title,
          description : eachTask.description,
          dueDate : eachTask.dueDate,
          priority: eachTask.priority,
          status: eachTask.status
        });
      }
    });
  });
  // .catch(error){
  //   console.log(error);
  //   return res.send(error);
  // }
});

app.listen(3000, () => {
  db.sequelize.sync();
  console.log("Server is listening on port 3000");
});