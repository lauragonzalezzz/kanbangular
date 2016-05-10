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
        console.log('success logging in');
        if (LoginService.get() === true){
          $scope.addBtn = true;
        }
        console.log($scope.addBtn);
      })
      .catch(function(){
        alert('Invalid login credentials, please try again');
      });
    };
    $scope.register = function(newUser){
      LoginService.register(newUser)
      .then(function() {
        console.log('yuss!');
      })
      .catch(function() {
        alert("An error has occurred");
      });
    };

  }]);
})();