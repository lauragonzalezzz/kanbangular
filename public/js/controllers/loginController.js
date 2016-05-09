'use strict';

(function(){
  angular.module('app')
  .controller("LoginController", ['$scope', 'LoginService', function($scope, LoginService){
    // $scope.show = false;

    $scope.logout = function(user){
      LoginService.logout();
    };

    $scope.login = function(user){
      console.log(user);
      LoginService.login(user)
      .success(function(response) {
        console.log('controller response: ',response);
        // $scope.user = response.username;
        // $scope.show = true;
      })
      .error(function(){
        $scope.user = "Please try again";
      });
    };
    $scope.register = function(user){
      LoginService.register(newUser)
      .success(function(response) {
        // $scope.user = response.username;

      })
      .error(function() {
        $scope.user = "An error has occurred";
      });
    };

  }]);
})();