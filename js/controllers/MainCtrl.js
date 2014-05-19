angular.module('MainCtrl', [])
    .controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeftSideMenu = function () {
            $ionicSideMenuDelegate.toggleLeft(true ^ $ionicSideMenuDelegate.isOpenLeft());
        };

    });