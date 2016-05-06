'use strict';

(function(){
  angular.module('app')
  .controller('TodoController', ['$scope', 'TaskService', function($scope, TaskService){

    $scope.TaskService = TaskService;

  }]);
});