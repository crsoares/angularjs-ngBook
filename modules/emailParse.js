angular.module("emailParse", [])
	.config(['$interpolateProvider', function ($interpolateProvider) {
		$interpolateProvider.startSymbol('__');
		$interpolateProvider.endSymbol('__');
	}])
	.factory('EmailParse', ['$interpolate', function ($interpolate) {
		return {
			parse: function (text, context) {
				var template = $interpolate(text);

				return template(context);
			}
		}
	}]);