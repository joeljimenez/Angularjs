app.controller('contactosCrtl', ['$scope','$http','$window' , function($scope,$http,$window){
       
    $scope.setActive("Mcontactos");
$scope.objeto = {
    nombre:'',
    email:'',
    password:'',
}

//http://192.168.0.26:3001/user/createUser


        $scope.enviar = function(valid) {
            if(valid){
                registrar();
            }else{
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Campos Vacios',
                  })
            }
        }
//servicios
        function registrar() {
            $http.post('http://192.168.0.26:3001/user/createUser', $scope.objeto)
            .then((res)=>{
                Swal.fire({
                    type: 'info',
                    title: 'Exito',
                    text: 'Post Registrado',
                    showConfirmButton: false,
                    timer: 1500
                  });
                 setTimeout(() => {
                    $scope.objeto = {};
                    $window.location.href = '#!/Inicio';
                  }, 1500);
            })
            .catch((err)=>{
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'La peticion Fallo',
                  });
            });
        }
    }]);


