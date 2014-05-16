angular.module('CloudSlidesApp', [
    'ionic',    //Ionic Framework
    'ngRoute',   //Angular route

    //Controllers
    'welcomeCtrl'
])

    .config(['$routeProvider', function ($routeProvider) {


        //    set router
        $routeProvider

            //Welcome Screen
            .when('/welcome', {
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeCtrl'

            })

            //Login
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'Login'
            })

            .otherwise({
                redirectTo: '/welcome'
            })

    }]);