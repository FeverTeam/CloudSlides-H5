angular.module('CloudSlidesApp', [
    'ionic',    //Ionic Framework
    'ngRoute',   //Angular route
    'ngResource',   //Angular resource
    'pascalprecht.translate', //Angular translate

    //Controllers
    'WelcomeCtrl',
    'LoginCtrl',
    'SignupCtrl',
    'MainCtrl',
    'MyPptCtrl',
    'MyControlCtrl',
    'MyAttendCtrl',

    //Services
    'config',   //app constants
    'valiateSrv',
    'settingSrv',
    'userInfoSrv'

])


    //config i18n
    .config(['$translateProvider', function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/locale-',
            suffix: '.json'
        });
//        $translateProvider.preferredLanguage(navigator.language);
//        $translateProvider.translations('en', {
//            GREETING: 'Hello world!'
//        });
//        // registers translation table with language key 'de'
//        $translateProvider.translations('zh', {
//            GREETING: 'Hallo Welt!'
//        });
//
//        $translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
//         })
        $translateProvider.determinePreferredLanguage();


    }])

    //config routers
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
                controller: 'LoginCtrl'
            })


            //Signup
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })

            //Main
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

            //MyPpt
            .when('/myppt', {
                templateUrl: 'views/myppt.html',
                controller:'MyPptCtrl'
            })

            //MyControl
            .when('/mycontrol', {
                templateUrl: 'views/mycontrol.html',
                controller:'MyControlCtrl'
            })

            //MyAttend
            .when('/myattend', {
                templateUrl: 'views/myattend.html',
                controller:'MyAttendCtrl'
            })


            .otherwise({
                redirectTo: '/main'
            })

    }]);