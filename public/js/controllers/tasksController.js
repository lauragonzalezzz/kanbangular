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
        return false;
      }
      else {
        return true;
      }
    }

    $scope.addTask = function (task) {
      if (task === undefined){
        alert("Please enter all task fields");
      }
      if (LoginService.get() === true){
        if (task.title !== undefined ||
        task.priority !== undefined ||
        task.dueDate !== undefined) {
          if (task.status === undefined){
            task.status = notStarted;
          }

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
        else {
          alert("Please enter all task fields");
        }
      }
      if (LoginService.get() === false){
        alert("Please log in to use this service");
      }
    };

    $scope.saveTask = function (task) {
      if (LoginService.get() === true){
        TaskService.saveTask(task).success(function (response) {
           $scope.tasks = response.tasks;
        });
      }
      else {
        alert("Please login to use this service");
      }
    };

    $scope.editTask = function(){
      if (LoginService.get() === false){
        alert("Please login to use this service");
        return false;
      }
      else {
        return true;
      }
    }

    $scope.deleteTask = function(task){
      if (LoginService.get() === true){
        TaskService.deleteTask(task).success(function(response){
          $scope.tasks = response.tasks;
        });
      }
      else {
        alert("Please login to use this service");
      }
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