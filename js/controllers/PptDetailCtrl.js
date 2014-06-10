angular.module('PptDetailCtrl', [])
    .controller('PptDetailCtrl', function ($scope) {
        //初始化数据
        $scope.ppt =
        {
            id: 1,
            pageCount: 3,
            filename: "我的生物课.pptx",
            uploadTime: "2013-04-20"

        };


        //公共事件


    });
