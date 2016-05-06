'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', function($scope, TaskService){

    // $scope.TaskService = TaskService;
    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
      console.log(response);
    })
  }]);
})();