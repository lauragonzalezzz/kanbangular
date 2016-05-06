'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', function($scope, TaskService){

    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
    });

    $scope.addTask = function (task) {
      console.log(task, 'taskerson');
       TaskService.addTask(task);
    };

  }]);
})();