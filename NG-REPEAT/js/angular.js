(function(){
    
    var app = angular.module('ListadoApp' , []);
        app.controller('ListadoCtrl', ['$scope' , function($scope){
            $scope.listado = ["Joel", "Jimenez","Carlos"];

            $scope.listadoObjeto = [
            {
              nombre:'Joel Jimenez',
              edad:22,
              clase: 'PEE'
            },
            {
              nombre:'Luzmery Jimenez',
              edad:22,
              clase: 'PEI'
            },
            {
              nombre:'Raquel Jimenez',
              edad:22,
              clase: 'POO'
            },
            {
              nombre:'Julio Jimenez',
              edad:22,
              clase: 'POP'
            }
        ]
            
        }]);

     

}());