(function(){

	'use strict';

	angular.module('weatherApp')
		.factory('weatherFactory', ['$q', '$http', weatherFactory]);

	function weatherFactory($q, $http){
		return {
			getWeather: getWeather
		};

		function getWeather(place, units){
			var APIkey = '63ec5861a609ba463fd7d0112431d13c';
			var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + place + '&units=' + units + '&APPID=' + APIkey;
			return $http.get(URL)
				.error(function(data){
					console.log('There was an error!', data);
				});
		}
	}

})();

