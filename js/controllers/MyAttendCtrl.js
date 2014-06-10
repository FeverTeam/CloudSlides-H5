angular.module('MyAttendCtrl', [])
    .controller('MyAttendCtrl', function ($scope, $ionicActionSheet) {
        $scope.sorterList = [
            {value:'topic', text: '会议主题'},
            {value:'id', text: '会议ID'}
        ];

        //设置默认排序
        $scope.sorter = 1;

        $scope.meetings = [
            {
                id: 1,
                topic: '云幻灯用户需求会议',
                holder: {
                    id: 1002,
                    nickname: 'Tomy Wu',
                    email: 'tomy.wu@gggg.com'
                },
                ppt: {
                    id: 106,
                    filename: '云幻灯奥秘.pptx'
                }
            },
            {
                id: 2,
                topic: '生物学复习会议',
                holder: {
                    id: 1002,
                    nickname: 'Aldric',
                    email: 'aldric@qq.com'
                },
                ppt: {
                    id: 251,
                    filename: '生物学是个很有趣的东西.pptx'
                }
            },
            {
                id: 3,
                topic: '我们开个会议',
                holder: {
                    id: 1002,
                    nickname: 'Kit',
                    email: 'kit.abc@gggg.com'
                },
                ppt: {
                    id: 293,
                    filename: '云幻灯奥秘.pptx'
                }
            }
        ];



        $scope.changeSorter = function () {
            $ionicActionSheet.show({
                buttons: [
                    {text: '按 会议主题 排序'},
                    {text: '按 会议ID 排序'}
                ],
                titleText: '排序方式',
                buttonClicked: function (index) {
                    $scope.sorter = index;
                    return true; //返回true让系统小会ActionSheet
                },
                cancel: function () {
                }

            })

        }

    });
