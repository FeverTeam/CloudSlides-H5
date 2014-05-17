angular.module('loginCtrl', [])

    .controller('LoginCtrl', function ($scope, $location) {
        //跳转到指定url
        $scope.jumpTo = function (url) {
            $location.path(url);
        }


    });