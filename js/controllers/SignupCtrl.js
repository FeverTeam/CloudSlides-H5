angular.module('signupCtrl', [])

    .controller('SignupCtrl', function ($scope, $location) {

        //跳转到指定url
        $scope.jumpTo = function (url) {
            $location.path(url);
        }


    });