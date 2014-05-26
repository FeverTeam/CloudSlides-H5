angular.module('MainCtrl', [])
    .controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

        //初始化
        $scope.translationData = {
            userName:"Simon"
        }

        $scope.toggleLeftSideMenu = function () {
            $ionicSideMenuDelegate.toggleLeft(true ^ $ionicSideMenuDelegate.isOpenLeft());
        };

    });