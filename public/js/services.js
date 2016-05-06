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
        console.log('what is task', task);
        return $http.put('/api/tasks', task);
      };
    }]);
})();