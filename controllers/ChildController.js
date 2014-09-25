angular.module("app")
	.controller("ChildController", function ($scope) {
		$scope.sayHello = function () {
			$scope.person.name = "novo teste";
			$scope.person.greeted = true;
		}
	});