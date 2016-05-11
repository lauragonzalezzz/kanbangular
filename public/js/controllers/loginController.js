'use strict';

(function(){
  angular.module('app')

  .controller("LoginController", ['$scope', 'LoginService', function($scope, LoginService){

    $scope.logout = function(user){
      LoginService.logout();
      alert("Successful logout");
    };

    $scope.login = function(user){
      LoginService.login(user)
      .then(function() {
        alert("Successful Login");
        Object.assign(user, {
          username: "",
          password: ""
        });
      })
      .catch(function(err){
        $scope.loginError = "Invalid username or password";
      });
    };

    $scope.register = function(newUser){
      if (newUser === undefined) {
        return $scope.registerError = "Please enter both username and password";
      }
      if (!newUser.username || !newUser.password){
        return $scope.registerError = "Please try again";
      }
      else {
        LoginService.register(newUser)
        .then(function() {
          alert("Successful Registration");
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