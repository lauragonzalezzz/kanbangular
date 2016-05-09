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

      this.updateStatus = function(updateObj){
        return $http.put('/api/status', updateObj);
      }

    }]) //end taskservice

    .service('LoginService', ['$http', function($http){

      this.logout = function(){
        return $http.get('/logout');
      };

      this.login = function(user){
        console.log('SERVICE', user);
        // return $http.post('/login', user);
        return $http({
          url: '/login',
          method: 'POST',
          data: user,
          headers: {"Content-Type": "application/json;charset=utf-8"}
        });
      };

      this.register = function(newUser){
        return $http.post('/register', newUser);
      };


    }]) //ends loginservice

})();