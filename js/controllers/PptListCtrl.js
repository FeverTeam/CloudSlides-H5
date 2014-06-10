angular.module('PptListCtrl', [])
    .controller('PptListCtrl', function ($scope, $state) {
        $scope.ppts = [
            {
                id: 1,
                filename: "我的生物课.pptx",
                uploadTime: "2013-04-20"
            },
            {
                id: 2,
                filename: "会议概要.pptx",
                uploadTime: "2013-06-23"
            },
            {
                id: 3,
                filename: "会议概要.pptx",
                uploadTime: "2013-06-23"
            }
        ];

        $scope.goDetail = function(ppt){
            alert(ppt.id);
            $state.go('pptDetail', {id: ppt.id});


        }

    });