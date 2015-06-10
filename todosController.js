(function(){
  'use strict';

  angular.module('app').controller('todosController', todosController);

  todosController.$inject = ['$scope', '$http'];

  function todosController($scope, $http) {
    var getTodos = localStorage.getItem('todos') || JSON.stringify( { "todos": [{"task": "Numero Uno", "value": false}, {"task": "Numero Dos", "value": false}] });


    $scope.todos = JSON.parse(getTodos).todos;
    $scope.submit = function() {
      if ($scope.text) {
        $scope.todos.push({ "task": $scope.text, "value": false });
        $scope.text = '';
        localStorage.setItem('todos', JSON.stringify({"todos": $scope.todos }));
      }
    };

    $scope.selectEntity = function(todo){
      localStorage.setItem('todos', JSON.stringify({"todos": $scope.todos }));
    };

    $scope.destroyTask = function(todo){
      var todos = JSON.parse(localStorage.getItem('todos'));
      for (var i = todos.todos.length - 1; i >= 0; i--) {
        if (todos.todos[i].task == todo.task) {
          todos.todos.splice(i, 1);
        }
      }

      localStorage.setItem('todos', JSON.stringify({"todos": todos.todos}));
      location.reload();
    };
  }
})();