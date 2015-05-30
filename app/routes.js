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
			controller : 'DashCtrl',
			authenticated: true
		})
		.otherwise('/', {
			templateUrl : 'views/home/home.html',
			controller : 'HomeCtrl'
		});
});

frontEnd.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (next.$$route.authenticated) {
			console.log('Authenticated');
		} else {
			console.log('Not Authenticated');
		}
	});
});