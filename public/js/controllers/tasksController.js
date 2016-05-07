'use strict';

(function(){
  angular.module('app')
  .controller('tasksController', ['$scope', 'TaskService', 'dragulaService', function($scope, TaskService, dragulaService){
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
    $scope
      .$on('status-bag.drop', function(error, element){
        var status = element[0].parentNode.id;
        console.log(status);
        // var titleElement = element[0].querySelectorAll('p')[0];
        // index = titleElement.indexOf('Title: ')
        // console.log(titleElement);

        // TaskService.updateStatus(element).success(function (response){
        //   $scope.tasks = reponse.tasks;
        // });
      });


  }]);
})();