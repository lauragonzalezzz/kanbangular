(function () {
  angular.module('app')
    .service('TaskService', ['$http', function($http){

      this.getTasks = function(){
        return $http.get('/api/tasks');
      };

      this.addTask = function (task) {
        return $http.post('/api/tasks', task);
      };

      this.saveTask = function (task) {
        return $http.put('/api/tasks', task);
      };

      this.deleteTask = function(task){
        return $http({
          url: '/api/tasks',
          method: 'DELETE',
          data: task,
          headers: {"Content-Type": "application/json;charset=utf-8"}
        });
      };

    }]);
})();