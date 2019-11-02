app.controller('productosCrtl', ['$scope', '$http', '$routeParams' , function($scope,$http,$routeParams){
     
$scope.id = $routeParams.id;

//para obtener parametro el mismo nombre que se coloco en el link en html
 $scope.setActive("Minicio");
 $scope.producto = [{}];
 get_productos();
 function get_productos() {
         $scope.url = 'https://damp-caverns-71172.herokuapp.com/productos/';
   $http.get($scope.url+$scope.id)
   .then( (res)=>{
       console.log(res);
   if(res.data.exito){
    $scope.producto = res.data.productosDB;
    console.log($scope.producto);
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



