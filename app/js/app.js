'use strict';
/* http://docs.angularjs.org/#!angular.service */

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngAnimate', 'myApp.filters', 'myApp.services'])
.run(function ($rootScope) {
	// $rootScope.$on('$locationChangeSuccess', function() {
	// 	alert('CHANGE')
	// })
})
.config(function ($routeProvider) {
	$routeProvider
	.when('/view1', {
		templateUrl: 'partials/partial1.html',
		controller: 'View1'
	})

	.when('/view2', {
		templateUrl: 'partials/partial2.html',
		controller: 'View2'
	})

	.otherwise({
		redirectTo: '/view1'
	});

	//document.getElementById('test').addEventListener('click', function(){alert('TEST')}, false);
});

angular.module('myApp')

.controller('View1', function($scope, $location) {
	$scope.cls = 'view1';

	$scope.changePage = function () {
		$location.path('/view2')
	}

	$scope.showMenu = function () {
		$('#st-container').addClass('st-menu-open');
	}

	setTimeout(function () {
		$("#owl-example").owlCarousel({
			items: 1,
			itemsScaleUp: true,
			slideSpeed: 1000,
			navigation: true,
			pagination: true,
			responsive: true,
			itemsDesktopSmall: [979, 1],
			itemsTablet: [768, 1],
			itemsMobile: [479, 1]
		});

		var owl = $("#owl-example").data('owlCarousel');

		setInterval(function () {
			owl.next();
		}, 2000)
	},0);

})

.controller('MainCtrl', function ($scope) {

	$scope.toggleMenu = function () {
		$('#st-container').toggleClass('st-menu-open');
	}
})

.controller('View2', function($scope, $location) {
	$scope.cls = 'view2';

	$scope.changePage = function () {
		$location.path('/view1')
	}
});

var closeMenu = function () {
	$('#st-container').removeClass('st-menu-open');
}

var showMenu = function () {
	// var elem = document.getElementById('st-container');
	// console.log(elem);
	// elem.className = elem.className + ' st-menu-open';
	console.log($('#st-container'));
	$('#st-container').toggleClass('st-menu-open');
}





