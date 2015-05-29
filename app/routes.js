frontEnd.config(function($routeProvider) {
	$routeProvider

	.when("/", {
		templateUrl : 'views/home/home.html',
		controller : 'HomeCtrl'
	})
	.otherwise('/', {
		templateUrl : 'views/home/home.html'
	});
});