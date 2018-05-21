/*
	Avenue Code - Main Module
*/
var app = angular
				.module('app', ['ngMaterial','ngRoute', 'ngAnimate'])
				.config(function ($routeProvider) {
					$routeProvider
						.when('/dashboard', {
							templateUrl: '/views/dashboard.html'
						})
						.when('/conta', {
							templateUrl: '/views/conta.html'
						})
						.when('/consumo', {
							templateUrl: '/views/pedidos.html'
						})
						.otherwise({
							templateUrl: '/views/dashboard.html'
						});
				});
			