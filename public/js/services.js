(function () {
  angular.module('app')

  //TASK SERVICE
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

    }])

  //LOGIN SERVICE
    .service('LoginService', ['$http', function($http){

      this.isLoggedIn = false;

      this.get = function(){
        return this.isLoggedIn;
      }

      this.logout = function(){
        return $http.get('/logout')
        .then(function(){
          this.isLoggedIn = false;
        })
      };

      this.login = function(user){
        var self = this;
        return $http({
          url: '/login',
          method: 'POST',
          data: user,
          headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(function(response){
          if (response.status === 200) {
            self.isLoggedIn = true;
          };
          if (response.status !== 200) {
            console.log('ERROR');
          };
        });
      };

      this.register = function(newUser){
        var self = this;
        return $http.post('/register', newUser)
        .then(function(response){
          if (response.status === 200) {
            self.isLoggedIn = true;
          };
          if (response.status !== 200) {
            console.log('ERROR');
          };
        });
      };

    }])


})();