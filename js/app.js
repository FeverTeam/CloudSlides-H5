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
    .config(function ($translateProvider) {

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


    })

    //设置url router
    .config(function ($urlRouterProvider) {
        //引导首页
        $urlRouterProvider
            .when('', '/main');
    })

    //配置state provider
    .config(function ($stateProvider) {
        $stateProvider
            //Welcome
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeCtrl'

            })

            //Login
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })

            //Signup
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })

            //Main
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

            //PPT
            .state('ppt', {
                abstract: true,
                url: '/ppt',
                templateUrl: 'views/temp.html'
            })
            .state('ppt.list', {
                url: '/list',
                templateUrl: 'views/myppt.html',
                controller: 'MyPptCtrl'
            })
            .state('ppt.detail', {
                url: '/detail',
                templateUrl: 'views/pptdetail.html',
                controller: 'MyPptCtrl'
            })


            //MyControl
            .state('mycontrol', {
                url: '/mycontrol',
                templateUrl: 'views/mycontrol.html',
                controller: 'MyControlCtrl'
            })

            //MyAttend
            .state('myattend', {
                url: '/myattend',
                templateUrl: 'views/myattend.html',
                controller: 'MyAttendCtrl'
            });
    });
;