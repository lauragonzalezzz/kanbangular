'use strict';

(function(){
  angular.module('app')
  .controller("LoginController", ['$scope', 'loginService', function($scope, loginService){

    $scope.logout = loginService.logout();

    $scope.login = function(user){
      loginService.login(user)
      .success(function(response) {
        $scope.user = response.username;
      })
      .error(function(){
        $scope.user = "Please try again";
      });
    };

    $scope.register = function(user){
      loginService.register(newUser)
      .success(function(response) {
        $scope.user = response.username;
      })
      .error(function() {
        $scope.user = "An error has occurred";
      });
    };

  }]);
})();