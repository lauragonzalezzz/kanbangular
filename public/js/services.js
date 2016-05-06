(function () {
  // function TaskService () {

  //  this.nextId= function () {
  //   return this.tasks.reduce(function (highest, task) {
  //     return Math.max(task.id, highest);
  //   }, 0)+ 1;
  //  };

  //  this.addTask = function (task) {
  //   this.tasks.push(Object.assign({
  //     id: this.nextId()
  //   }, task));
  //   Object.assign(task, {
  //     title: '',
  //     description: ''
  //   });
  //  };
  // }

  angular.module('app')
    .service('TaskService', ['$http', function($http){
      this.getTasks = function(){
        console.log('hello');
        return $http.get('/api/tasks');
      }
    }]);
})();