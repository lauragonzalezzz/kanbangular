'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', function($scope, TaskService){
    TaskService.getTasks().then(function(response) {
      $scope.tasks = response.data.tasks;
      console.log($scope.tasks);
    });

    $scope.addTask = function (task) {
      TaskService.addTask(task).success(function (response) {
         $scope.tasks = response.tasks;
      });
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

  //Drag and Drop functionality
    $scope.dropSuccessHandler = function($event,index,array){
      console.log('$event', $event)
      array.splice(index,1);
    };

    $scope.onDrop = function($event,$data,array){
      console.log('$data',$data);
      array.push($data);
    };

  }]);
})();