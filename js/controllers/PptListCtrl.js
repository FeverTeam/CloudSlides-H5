angular.module('PptListCtrl', [])
    .controller('PptListCtrl', function ($scope, $ionicPopup) {
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
        $scope.launchMeeting = function (ppt) {
//            var alertPopup = $ionicPopup.alert({titile: "发起会议", template: "发起会议 编号" + ppt.id});
            var alertPopup = $ionicPopup.alert({
                title: '发起会议',
                template: "发起会议 编号" + ppt.id
            });
        }

    });
