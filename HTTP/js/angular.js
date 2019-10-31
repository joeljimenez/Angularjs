(function(){
    
    var app = angular.module('HttpApp' , []);
        app.controller('HTTPCtrl', ['$scope','$http' , function($scope,$http){
             
          $scope.productos = {};
          $scope.vista = 'parciales/productos.html';
            get_productos();

          function get_productos() {
            
            $http.get('https://damp-caverns-71172.herokuapp.com/productos/all')
            .then( (res)=>{
            console.log(res);
            if(res.data.exito){
             $scope.productos = res.data.productos;
             console.log($scope.productos);
            }
            })
            .catch( (res)=>{
             /*  console.error(res); */
            })
            .finally( ()=>{
            //terminar todo
            })
          }
            
        }]);

     

}());


