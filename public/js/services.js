(function () {
  function TaskService () {
    this.tasks = [{
      id: 1,
      title: 'saca la basura',
      description: 'take out the trash',
      dueDate: 'Friday',
      priority: 1
     },
     {
      id: 2,
      title: 'liempa el techo',
      description: 'clean the roof',
      dueDate: 'Sunday',
      priority: 2
     },
     {
      id: 3,
      title: 'lava las trastes',
      description: 'wash the dishes',
      dueDate: 'Friday',
      priority: 5
     }
   ];

   this.getTasks = function () {
    return this.tasks;
   };

   this.nextId= function () {
    return this.tasks.reduce(function (highest, task) {
      return Math.max(task.id, highest);
    }, 0)+ 1;
   };

   this.addTask = function (task) {
    this.tasks.push(Object.assign({
      id: this.nextId()
    }, task));
    Object.assign(task, {
      title: '',
      description: ''
    });
   };
  }
  angular.module('app')
    .service('TaskService', TaskService);
})();