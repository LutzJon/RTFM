angular.module('myApp').controller('threadsCtrl', function($scope, $firebaseArray, threadsData, userService, $state) {
	if(!userService.getUser()){
		console.log('thesese')
		$state.go('login')
	}
	
$scope.threads = $firebaseArray(threadsData);
$scope.addThread = function(){
	newThreadObj = {
		name: $scope.thread.name,
		creator: $scope.thread.creator,
	}
	console.log(newThreadObj);
    $scope.threads.$add(newThreadObj);
};
$scope.threads.$loaded().then(function(threads){
	console.log('threads');
});
}); 