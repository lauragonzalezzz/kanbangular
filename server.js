'use strict';

const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      path       = require('path'),
      db         = require('./models'),
      Tasks       = db.Task;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/api/tasks', (req, res) => {
  Tasks.findAll()
  .then((tasks) => {
    let tasksArr = [];
    tasks.forEach((eachTask) =>{
      tasksArr.push({
        id: eachTask.id,
        title : eachTask.title,
        description : eachTask.description,
        dueDate : eachTask.dueDate,
        priority: eachTask.priority,
        status: eachTask.status
      });
    });
  res.json({tasks : tasksArr});
  });
});

app.post('/api/tasks', (req, res) => {
  Tasks.create({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    status: req.body.status
  })
  .then(function(){
    Tasks.findAll()
    .then((tasks) => {
      console.log(tasks);
      let tasksArr = [];
      tasks.forEach((eachTask) =>{
        tasksArr.push({
          title : eachTask.title,
          description : eachTask.description,
          dueDate : eachTask.dueDate,
          priority: eachTask.priority,
          status: eachTask.status
        });
      });
      res.json({tasks : tasks});
    });
  });
});

app.put('/api/tasks', (req, res) => {
  console.log(req.body.title, 'bodify');
  Tasks.update({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    status: req.body.status
   },
   {
    where: {
      id: req.body.id
   }
 })
  .then(function(){
    Tasks.findAll()
    .then((tasks) => {
      console.log(tasks);
      let tasksArr = [];
      tasks.forEach((eachTask) =>{
        tasksArr.push({
          title : eachTask.title,
          description : eachTask.description,
          dueDate : eachTask.dueDate,
          priority: eachTask.priority,
          status: eachTask.status
        });
      });
      res.json({tasks : tasks});
    });
  });
});

db.sequelize.sync();
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});