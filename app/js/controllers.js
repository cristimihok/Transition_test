'use strict';
/* App Controllers */

angular.module('myApp.controllers', [])

.controller('MainCtrl', function ($scope, $location, LeapService, MenuService) {

	$scope.menuItems = MenuService.getItems();

	$scope.$on('leap-swipe-up', function () {
		$scope.$apply(MenuService.goNextPage());			
	});
	
	$scope.$on('leap-swipe-down', function () {		
		$scope.$apply(MenuService.goPrevPage());			
	});

	$scope.$on('leap-swipe-right', function () {
		//MenuService.openMenu();			
	});

	$scope.$on('leap-swipe-left', function () {
		//MenuService.closeMenu();			
	});

	$scope.$on('leap-screenTap', function () {
		MenuService.toggleMenu();			
	});

	$scope.goToPage = function (page) {
		MenuService.goToPage(page);
	}

	$scope.toggleMenu = function () {
		MenuService.toggleMenu();
	}

	$scope.openMenu = function () {
		MenuService.openMenu();
	}

	$scope.closeMenu = function () {
		MenuService.closeMenu();
	}
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

		$scope.$on('leap-swipe-right', function () {
			owl.prev();		
		});

		$scope.$on('leap-swipe-left', function () {
			owl.next();		
		});
	},0);
})

.controller('View2', function($scope, $location) {
	$scope.cls = 'view2';

});