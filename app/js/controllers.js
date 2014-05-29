'use strict';
/* App Controllers */

angular.module('myApp.controllers', [])

.controller('MainCtrl', function ($scope) {

	$scope.toggleMenu = function () {
		$('#st-container').toggleClass('st-menu-open');
	}

	$scope.openMenu = function () {
		setTimeout(function(){
			$('#st-container').addClass('st-menu-open');
		},200)
	}

	$scope.closeMenu = function () {
		setTimeout(function(){
			$('#st-container').removeClass('st-menu-open');
		},500)
	}

	$scope.menuItems = [
		{class: 'icon icon-data', href: '#view1', name: 'View 1'},
		{class: 'icon icon-location', href: '#view2', name: 'View 2'}
	]
})

.controller('View1', function($scope, $location) {
	$scope.cls = 'view1';

	$scope.changePage = function () {
		$location.path('/view2')
	}

	$scope.showMenu = function () {
		$('#st-container').addClass('st-menu-open');
	}

	$scope.leapClick = function () {
		console.log('LEAP CLICK');
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

.controller('View2', function($scope, $location) {
	$scope.cls = 'view2';

	$scope.changePage = function () {
		$location.path('/view1')
	}
});