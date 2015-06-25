var hasStorage;
// Check browser support
if (typeof(Storage) != "undefined") {
	hasStorage=true;

    // Retrieve
   
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

} else {
    
 hasStorage=false;
 }

var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.newTodo = '';
	if(hasStorage){
        // Store
    		localStorage.setItem("todos", JSON.stringify($scope.todos));
    	}
  
  var todosStorage=localStorage.getitem("todos");
  
  if(todosStorage!=null){
  	$scope.todos=todosStorage;
  	}else{
  $scope.todos = [
    'Solve unanswerable questions', 
    'Find the Cake',
    'Use the sword gifted to us by a strange woman lying in a pond to enforce monarchy over the Britons, claiming ourself as king'
  ];
  
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
    }
  };
});