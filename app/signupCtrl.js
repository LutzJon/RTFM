angular.module('myApp').controller('signupCtrl', function($scope, userService){
	$scope.register = function(){
		userService.register($scope.newUser)
	}

});