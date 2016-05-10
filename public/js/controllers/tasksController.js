'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', 'dragulaService', 'LoginService', function($scope, TaskService, dragulaService, LoginService){

  //Task Services

    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
    });

    $scope.checkLogin = function(){
      if (LoginService.get() === false){
        alert("Please login to use this service");
      }
    }

    $scope.addTask = function (task) {
      if (task.status === null){
        task.status = notStarted;
      }
      if (LoginService.get() === true){
        if (task.title === null ||
        task.priority === null ||
        task.dueDate === null ||
        task.status === null)
        TaskService.addTask(task).success(function (response) {
           $scope.tasks = response.tasks;
        })
        .then(function(){
          Object.assign(task, {
          title: "",
          description: "",
          dueDate: "",
          priority: "",
          status: ""
          });
        });
      }
      if (LoginService.get() === false){
        alert("Please log in to use this service");
      }
    };

    $scope.saveTask = function (task) {
      TaskService.saveTask(task).success(function (response) {
         $scope.tasks = response.tasks;
      });
    };

    $scope.deleteTask = function(task){
      TaskService.deleteTask(task).success(function(response){
        $scope.tasks = response.tasks;
      });
    };


  //Dragula Services
    $scope
      .$on('status-bag.drop', function(error, element){
        var status = element[0].parentNode.id;
        var titleElement = element[0].querySelectorAll('p')[0];
        var titleArr = titleElement.innerHTML.split(" ");
        titleArr.shift();
        var title = titleArr.join(' ');
        var updateObj = {
          title : title,
          newStatus : status
        };

        TaskService.updateStatus(updateObj).success(function (response){
          $scope.tasks = response.tasks;
        });
      });

  }])

})();