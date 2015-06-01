
var app = angular.module('app', []);

app.controller('todosController', ['$scope', '$http', function ($scope, $http) {
  $scope.todos = {};
  $http.get('todos.json').success(function(data){
    $scope.todos = data.todos;
  });
}]);

app.controller('todoController', ['$scope', '$http', function ($scope, $http) {
  console.log($scope.todos);
  $scope.submit = function() {
    if ($scope.text) {
      $scope.todos.push($scope.text);
      $scope.text = '';
    }
  };
  // var newTodoJson = $scope.todos.push(angular.element);
  $http.post('todos.json', {}).success(function(data){
    $scope.todos = data.todos;
  });
}]);