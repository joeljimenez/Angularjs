  
    var app = angular.module('HttpApp' , ['ngRoute', 'ui.mask','jcs-autoValidate']);
        app.controller('HTTPCtrl', ['$scope','$http' , function($scope,$http){
            $scope.menu = 'parciales/menu.html';

            $scope.setActive = function (Opcion) {
                $scope.Minicio = "";
                $scope.Mcontactos = "";
                $scope.Mmapa = "";

                $scope[Opcion] = "active";
            }
        }]);



        //creando filtro personalisado
/*     app.filter('telefono',function () {
        return function (numero) {
            //retornara lo que va hacer el filter
        }
    }); */
    

