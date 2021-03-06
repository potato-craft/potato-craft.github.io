
var hasStorage;
// Check browser support
if (typeof(Storage) != "undefined") {
  var hasStorage=true;
}
else {  
  var hasStorage=false;
}

var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  
  $scope.newTodo = '';

  var todosStorage=localStorage.getItem("todos");
 
    if(todosStorage!=null && todosStorage!="undefined"){
    
  	  $scope.todos=JSON.parse(todosStorage);
  	}
  	else{

      $scope.todos=[
        'Solve unanswerable questions', 
        'Find the Cake',
        'Use the sword gifted to us by a strange woman lying in a pond to enforce monarchy over the Britons, claiming ourself as king'
      ];
    }
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      	$scope.todos.splice(indexOf, 1);
      if(hasStorage){
        // Store
    		localStorage.setItem("todos", JSON.stringify($scope.todos));
    	}
    
  
  	}
  };
  
   $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';	
      if(hasStorage){
        // Store
    		localStorage.setItem("todos", JSON.stringify($scope.todos));
    	}
    }
  };
});