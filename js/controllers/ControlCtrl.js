angular.module('ControlCtrl', [])
    .controller('ControlCtrl', function ($scope, $stateParams) {
        $scope.id = $stateParams.id

    });