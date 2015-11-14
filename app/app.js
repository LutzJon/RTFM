angular.module('myApp', ['firebase','ui.router'])
   .constant('fb',{
   	url:  'https://pink-hippos.firebaseio.com/'
   })



   .config(function($urlRouterProvider, $stateProvider){
       $urlRouterProvider.otherwise('/threads');
       $stateProvider
          .state('threads', {
          	url: '/threads',
          	templateUrl: 'templates/threads.html',
          	controller: 'threadsCtrl',
          	resolve: {
          		threadsData: function(threadServ){
          			return threadServ.getThreads();
          		}
          	}
          })
          .state('thread', {
          	url:'/threads/:threadId',
          	templateUrl: 'templates/thread.html',
          	controller: 'threadCtrl',
          	resolve: {
          		threadData: function(threadServ, $stateParams){
          			return threadServ.getThread($stateParams.threadId);
          		},
          		commentData: function(threadServ, $stateParams){
          			return threadServ.getComments($stateParams.threadId);
          		}
          }
   });
 });