/*
	Map Controller
*/
app.
	controller('AppController', function($mdMedia, $scope, $http, $location, HomeService){
		
		var vm = this;

		console.log(vm);
		
		vm.changeTab = function(address){
			console.log(address);
			switch(address){
				case 'home':
					$location.path('/dashboard');
				break;
				case 'consumo':
					$location.path('/consumo');
				break;
				case 'conta':
					$location.path('/conta');
				break;
			}
		}
	})