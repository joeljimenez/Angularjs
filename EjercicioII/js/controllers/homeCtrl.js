  app.controller('homeCrtl', ['$scope', '$http' , function($scope,$http){
       //https://damp-caverns-71172.herokuapp.com/productos/
    $scope.setActive("Minicio");
    $scope.tabla_producto = 'parciales/tabla-productos.html';
    $scope.productos = [{}];
    $scope.posicion = 2;
    get_productos();
    function get_productos() {
            
      $http.get('https://damp-caverns-71172.herokuapp.com/productos/all')
      .then( (res)=>{
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

    /*======================================
      Paginacion
    ====================================== */
    $scope.siguiente = function(){
      if( $scope.productos.length >$scope.posicion){
        $scope.posicion +=2;
      }
    }
    $scope.atras = function(){
      if($scope.posicion > 2){
        $scope.posicion -=2;
      }
    }

    }]);

 


