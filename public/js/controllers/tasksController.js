'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', function($scope, TaskService){

    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
    });

    $scope.addTask = function (task) {
      TaskService.addTask(task).success(function (response) {
        // console.log(response.data);
         $scope.tasks = response.tasks;
      });
    };

  }]);
})();