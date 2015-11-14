angular.module('myApp').service('userService', function($firebaseAuth, fb, $state){
  var ref = new Firebase(fb.url);
  var authoObj = $firebaseAuth(ref);
  
  this.register =function(newUser){
  return authoObj.$createUser(newUser)
  	  .then(function(userData){
  	  	console.log(userData);
  	  	authoObj.$authWithPassword(newUser)
  	  	 .then(function(authData){
  	  	 	console.log(authData)
  	  	 	$state.go('threads')
  	  })
})


  }
  this.loginUser = function(userObj) {
    return authoObj.$authWithPassword(userObj)
 .then(function(authData){
 	$state.go('threads');
 	console.log('AuthData',authData);
 }).catch(function(error){
 	console.log('auther failed', error)
 })
     
  }
  this.logoutUser = function(){
  	return authoObj.$unauth();
  }


  this.getUser = function(){
   var authData = authoObj.$getAuth()
   console.log(authData)
   if(authData){
   	console.log('user g2g')
   }else{
   	console.log('user noGo')
   }
   return authData
  }

  authoObj.$onAuth(function(authData){
  	if(!authData) {
  		if($state) {
  			$state.go('login');
  		}
  	}
  })
  
})