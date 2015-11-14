angular.module('myApp').controller('loginCtrl', function($scope, userService, $state){
	$scope.login = function(){
		userService.loginUser($scope.user)
		$scope.user={}
	}
});