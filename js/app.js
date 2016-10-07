
(function(){
	'use strict';

	angular
	.module('weatherApp', ['ngRoute', 'ngAnimate'])
		.config(_config)
		.run(_run);

	function _config($routeProvider){
		$routeProvider
			.when('/weather', {
				templateUrl: 'views/weather.html',
				controller: 'weatherCtrl',
				controllerAs: 'wthr'
			})
			.otherwise({
				redirectTo: '/weather'
			});
	}

	function _run($rootScope){
		$rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
			console.log(event, current, previous, rejection);
		});
	}	
})();

