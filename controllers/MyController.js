angular.module("myApp")
	.controller("MyController", function ($scope, EmailParse) {
		$scope.$watch('emailBody', function (body) {
			if (body) {
				$scope.previewText = EmailParse.parse(body, {
					to: $scope.to
				});
			}
		});
	});