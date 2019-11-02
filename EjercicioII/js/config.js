app.config(function($routeProvider) {
   $routeProvider
        .when('/Inicio',{
            templateUrl: 'parciales/home.html',
            controller:'homeCrtl'
        })
        .when('/Inicio/:id',{
            templateUrl: 'parciales/one-productos.html',
             controller:'productosCrtl'  
        })
        .when('/Contactos',{
            templateUrl: 'parciales/contactos.html',
            controller:'contactosCrtl'
        })
        .when('/Login',{
            templateUrl: 'parciales/login.html',
            controller:'loginCrtl'
        })
        .otherwise({redirectTo:'/Inicio'});
});