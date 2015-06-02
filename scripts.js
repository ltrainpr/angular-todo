
var app = angular.module('app', []);

app.controller('todosController', ['$scope', '$http', function ($scope, $http) {
  $scope.todos = {};
  $http.get('todos.json').success(function(data){
    $scope.todos = data.todos;
  });

  $scope.submit = function() {
    if ($scope.text) {
      $scope.todos.push($scope.text);
      $scope.text = '';

      $http.post('http://localhost:8080/todos.json', {"task": $scope.todos}).success(function(data){
        $scope.msg = 'Data saved';
        console.log('success');
      });
    }
  };
}]);