'use strict';

const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      path          = require('path'),
      db            = require('./models'),
      Tasks         = db.Task,
      Users         = db.User,
      passport      = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      session       = require('express-session'),
      CONFIG        = require('./config/config.json'),
      bcrypt        = require('bcrypt');

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(session({
  resave: true,
  saveUninitialized : true,
  secret : CONFIG.Session.secret
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  (username, password, done) => {
    Users.findOne({
      where : {username : username}
    })
    .then((User) => {
      if (User === null) {
        return done(null, false);
      }
      bcrypt.compare(password, User.password, function(err, boolean) {
        if (boolean === false){
          return done(null, false)
        }
        let USERNAME = User.username;
        let user = {
          username: USERNAME
        };
        return done(null, user);
      });
    })
    .catch((error) => {
      throw new Error (error);
    });
  })
);

passport.serializeUser((user, done) => {
  return done(null, user);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

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

app.get('/logout', (req, res) => {
  req.logout();
  console.log('Logging out');
  res.redirect('/');
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

function isAuthenticated(req,res,next){
  if(req.isAuthenticated()) {
    return next();
  }
  return res.send(401);
}

app.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('all clear');
  res.send(req.body);
});

app.post('/register', (req, res) => {
  const saltRounds = 10;
  let pw = req.body.password;
  bcrypt.hash(pw, saltRounds, function(err, hash){
    Users.create({
      username : req.body.username,
      password : hash
    })
    .then((user) => {
      return res.json(user);
    })
    .catch((err) =>{
      return res.send(err);
    });
  });
});

app.put('/api/tasks', (req, res) => {
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

app.put('/api/status', (req, res) => {
    console.log('inside put server')
  Tasks.update({
    status : req.body.newStatus
  }, {
    where : {
      title : req.body.title
    }
  })
  .then(function(){
    Tasks.findAll()
    .then((tasks) => {
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

app.delete('/api/tasks', (req, res) => {
  console.log(req.body.id);
  Tasks.destroy({
    where: {
      id : req.body.id
    }
  })
  .then(function(){
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
});

db.sequelize.sync().then(function() {
  app.listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });
});