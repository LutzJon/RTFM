angular.module('myApp')
    .controller('threadCtrl', function($scope, $firebaseObject, $firebaseArray, $state, threadData, commentData, userService) {
	if(!userService.getUser()){
		$state.go('login')
	}
	var thread =$firebaseObject(threadData);


	thread.$bindTo($scope,'thread');

	$scope.comments = $firebaseArray(commentData);
	$scope.addComment = function(){
         $scope.comments.$add($scope.newComment);
	};
}); 
