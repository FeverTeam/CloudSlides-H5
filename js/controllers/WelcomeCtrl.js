angular.module('WelcomeCtrl', [])

    .controller('WelcomeCtrl', function ($scope, $interval, $location) {
        $interval(function () {
            $location.path('#/login');
        }, 1000, 1);

    });