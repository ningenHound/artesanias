angular.module('starter.controllers', [])

.controller('BuscadorCtrl', function($scope, $location, $http){

		$scope.titulo = "Artesanías de Carapegua";

		$scope.verInfo = function(){
			$location.url('/info');
		};

		 $http.get("productos.json")
    		.then(function (response) {$scope.productos = response.data;});

})		

.controller('InfoCtrl', function($scope, $location){

		$scope.titulo = "Información";

		$scope.verBuscador = function(){
			$location.url('/buscador');
		};


})

