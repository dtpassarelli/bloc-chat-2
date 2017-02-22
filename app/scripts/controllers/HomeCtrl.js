(function() {
	function HomeCrtl(Room) {
		this.allRooms = Room.all;

	}

	$stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
    });

	angular
		.module("BlocChat")
		.controller('HomeCtrl', ['Room', HomeCtrl])
})