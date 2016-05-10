'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', 'dragulaService', 'LoginService', function($scope, TaskService, dragulaService, LoginService){

  //Task Services

    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
    });

    $scope.addTask = function (task) {
      // console.log(LoginService.get());
      if (LoginService.get() === true){
        TaskService.addTask(task).success(function (response) {
           $scope.tasks = response.tasks;
        });
      }
      else {
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