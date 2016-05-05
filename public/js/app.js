angular.module('app', []);

  var app = angular.module('app');

    app.config([function () {

    }])
    .run([function () {

    }]);

    app.controller('myController', ['$scope', function ($scope) {
      $scope.cinco = 'Feliz Cinco De Mayo!';
    }]);