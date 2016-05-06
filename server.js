'use strict';

const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      path       = require('path'),
      db         = require('./models'),
      Tasks       = db.Task;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/tasks', (req, res) => {
  console.log('in the server');
  Tasks.findAll()
  .then((tasks) => {
    // console.log(tasks)
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
  res.json({tasks : tasksArr})
  });
});


  db.sequelize.sync();
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});