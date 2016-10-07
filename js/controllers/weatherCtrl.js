(function(){

	'use strict';

	angular.module('weatherApp')
	.controller('weatherCtrl', ['weatherFactory', weatherCtrl]);

	function weatherCtrl(weatherFactory){
		var vm = this;

		vm.badCode = badCode;
		vm.input = "";
		vm.imperial = "Imperial";
		vm.metrics = "Metric";
		vm.radioValue = vm.imperial;
		vm.search = search;
		vm.weatherData = "";

		function badCode(code){
			return code == 404;
		}

		function search(input, radioValue){
			weatherFactory.getWeather(input, radioValue.toLowerCase())
				.success(function(jsonData, statusCode){
					vm.weatherData = jsonData;
			});
		};
	}
})();

