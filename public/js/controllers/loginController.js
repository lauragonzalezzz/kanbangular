'use strict';

(function(){
  angular.module('app')
  .controller("LoginController", ['$scope', 'LoginService', function($scope, LoginService){

    $scope.logout = function(user){
      LoginService.logout();
    };

    $scope.login = function(user){
      LoginService.login(user)
      .then(function() {
        Object.assign(user, {
          username: "",
          password: ""
        });
      })
      .catch(function(err){
        console.log(err);
        $scope.loginError = "Invalid username or password";
      });
    };
    $scope.register = function(newUser){
      if (newUser === undefined) {
        return $scope.registerError = "Please enter username and password";
      }
      if (!newUser.username || !newUser.password){
        return $scope.registerError = "Please try again";
      }
      else {
        LoginService.register(newUser)
        .then(function() {
          Object.assign(newUser, {
            username: "",
            password: ""
          });
        })
        .catch(function() {
          $scope.registerError = "Please try again";
        });
      };
    };

  }]);
})();