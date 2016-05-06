'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', function($scope, TaskService){

    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
    });

    $scope.addTask = function (task) {
      TaskService.addTask(task).success(function (response) {
         $scope.tasks = response.tasks;
      });
    };

    $scope.saveTask = function (task) {
      console.log(task, 'task');
      TaskService.saveTask(task).success(function (response) {
         $scope.tasks = response.tasks;
      });
    };

  }]);
})();