frontEnd.config(function($routeProvider) {
	$routeProvider

		.when("/", {
			templateUrl : 'views/home/home.html',
			controller : 'HomeCtrl'
		})
		.when("/fb/login", {
			templateUrl : 'views/process/login.html',
			controller : 'LoginCtrl'
		})
		.when('/dashboard', {
			templateUrl : 'views/home/dashboard.html',
			controller : 'DashCtrl'
		})
		.otherwise('/', {
			templateUrl : 'views/home/home.html',
			controller : 'HomeCtrl'
		});
});