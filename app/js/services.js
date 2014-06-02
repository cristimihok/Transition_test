'use strict';
/* http://docs.angularjs.org/#!angular.service */

// Demonstrate how to register services
// In this case it is a simple constant service.
angular.module('myApp.services', []);

angular.module('myApp.services')

.factory('LeapService', function ($rootScope) {
	// var leapCtrl = new Leap.Controller({enableGestures: true});
	// leapCtrl.connect();

	var gestureInProgress = false;

	var leapCtrl = LeapManager.init({
		maxCursors:1,
		enableMetaGestures: false,
		enableDefaultMetaGestureActions: false,
		useHands: true
	});

	leapCtrl.on('gesture', function (gesture,frame){
	    //console.log(gesture.type + " with ID " + gesture.id + " in frame " + frame.id);
	    //console.log(gesture);

	    if (!gestureInProgress) {

		    if (gesture.type === 'swipe') {
		    	gestureInProgress = true;
		    	console.log(gesture);
		    	var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
		    	var swipeDirection;
		          //Classify as right-left or up-down
				if(isHorizontal){
					if(gesture.direction[0] > 0){
						swipeDirection = "right";
					} else {
						swipeDirection = "left";
					}
				} else { //vertical
					if(gesture.direction[1] > 0){
						swipeDirection = "up";
					} else {
						swipeDirection = "down";
					}
				}
				console.log(swipeDirection);
				$rootScope.$broadcast('leap-swipe-' + swipeDirection);
		    }

		    if (gesture.type === 'screenTap') {
		    	gestureInProgress = true;

		    	console.log(gesture);
		    	$rootScope.$broadcast('leap-screenTap');
		    }

		    setTimeout(function () {
	    		gestureInProgress = false;
	    	}, 1000);

		}

	});


	return {
		getLeapController: function () {
			return leapCtrl;
		}

	}
})

.factory('MenuService', function ($location) {
	var menuDom = angular.element('#st-container');
	var menuItems = [
		{class: 'icon icon-data leap-interactive', href: '/view1', name: 'View 1'},
		{class: 'icon icon-location leap-interactive', href: '/view2', name: 'View 2'}
	];

	var _getPageIndex;
	(_getPageIndex = function () {
		for (var i = 0; i < menuItems.length; i++) {
			if(menuItems[i].href == $location.path()){
				menuItems.cursor = i;
			}
		};
	})()

	return {

		getItems: function () {
			return menuItems;
		},

		getPageIndex: _getPageIndex,

		getCurrentPage: function () {
			return menuItems.current;
		},

		getNextPage: function () {
			return menuItems.next();
		},

		getPrevPage: function () {
			return menuItems.prev();
		},

		goNextPage: function () {
			if (menuItems.next()){
				//console.log($('[ng-view]'));
				$('.pt-perspective').removeClass('prev-page');
				$('.pt-perspective').addClass('next-page');
				console.log(menuItems.current());
				$location.path(menuItems.current().href);
			}
		},

		goPrevPage: function () {
			if (menuItems.prev()){
				//console.log(menuItems.current());
				$('.pt-perspective').removeClass('next-page');
				$('.pt-perspective').addClass('prev-page');
				$location.path(menuItems.current().href);
			}
		},

		goToPage: function (index) {
			// $location.path(menuItems[index].href);
			if (menuItems.cursor > index) this.goPrevPage();
			else this.goNextPage();
		},

		openMenu: function () {
			menuDom.addClass('st-menu-open');
		},

		closeMenu: function () {
			menuDom.removeClass('st-menu-open');
		},

		toggleMenu: function () {
			menuDom.toggleClass('st-menu-open');
		}


	}
})
