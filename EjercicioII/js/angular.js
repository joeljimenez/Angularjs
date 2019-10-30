 var app = angular.module('prueba_json', []);
    app.controller('estudianteCtrl', function($scope){

    $scope.editar = {};
    $scope.cuadro = true; 
    local();
      function local(){
        if(localStorage.getItem('data')){
            $scope.teacher = JSON.parse(localStorage.getItem('data'));
          }else{
            $scope.teacher = profesor;
          }
      }


        $scope.editarProfesor =  ()=>{
            $scope.editar = $scope.teacher
            $scope.cuadro = false; 
        }

        $scope.cancelarE = ()=>{
            $scope.editar = {};
            local();
            $scope.cuadro = true; 
        }

        $scope.guardarData = ()=>{
            localStorage.setItem('data', JSON.stringify($scope.editar));
            $scope.editar = JSON.parse(localStorage.getItem('data'));
            $scope.editar = {};
            $scope.cuadro = true; 
        }

    });
 
    var profesor = {
        nombre:"joel jimenez",
        edad : 22,
        foto: "img/animada.jpg",
        bio: "Saludos soy joel jimenez, les voy ayudar mucho en su trabajos"
    }


 