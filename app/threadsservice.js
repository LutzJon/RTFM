angular.module('myApp').service('threadServ', function(fb){
this.getThread = function(id){
	console.log(id);
 return new Firebase(fb.url+ 'threads/' + id);
};
this.getThreads = function() {
	return new Firebase(fb.url + 'threads');
};
this.getComments = function(id){
	return new Firebase(fb.url + 'threads/'+ id + '/comments');
};
});