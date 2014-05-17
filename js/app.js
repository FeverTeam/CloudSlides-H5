angular.module('CloudSlidesApp', [
    'ionic',    //Ionic Framework
    'ngRoute',   //Angular route
    'pascalprecht.translate', //Angular translate

    //Controllers
    'welcomeCtrl',
    'loginCtrl',
    'signupCtrl'
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

            .otherwise({
                redirectTo: '/login'
            })

    }]);