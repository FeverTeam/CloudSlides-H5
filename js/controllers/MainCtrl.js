angular.module('MainCtrl', [])
    .controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
        $scope.here = "main";

        $scope.toggleLeftSideMenu = function () {
            alert($ionicSideMenuDelegate.isOpenLeft());
            $ionicSideMenuDelegate.toggleLeft(true ^ $ionicSideMenuDelegate.isOpenLeft());

        };

    });