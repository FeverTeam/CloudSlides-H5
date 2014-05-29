angular.module('MyPptCtrl', [])
    .controller('MyPptCtrl', function ($scope) {
        //初始化数据
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
                id: 2,
                filename: "会议概要.pptx",
                uploadTime: "2013-06-23"
            }
        ];

        //公共事件
        $scope.goDetail = function(ppt){
            alert('ppt #'+ppt.id+' details');
        }

    });
