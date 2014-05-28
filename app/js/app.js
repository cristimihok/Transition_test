'use strict';
/* http://docs.angularjs.org/#!angular.service */

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngAnimate', 'myApp.filters', 'myApp.services', 'myApp.controllers'])
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

	$('.st-pusher .st-over-layer').click(function(){
		$('#st-container').removeClass('st-menu-open');
	})
});









