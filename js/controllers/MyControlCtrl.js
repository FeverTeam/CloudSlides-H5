angular.module('MyControlCtrl', [])
    .controller('MyControlCtrl', function ($scope, $ionicActionSheet) {
        $scope.sorterList = [
            {value:'topic', text: '会议主题'},
            {value:'id', text: '会议ID'}
        ];

        //设置默认排序
        $scope.sorter = 1;

        $scope.meetings = [
            {
                id: 11,
                topic: '梁博文有个会议',
                holder: {
                    id: 532,
                    nickname: 'Simon Liang',
                    email: 'simonlbw@gmail.com'
                },
                ppt: {
                    id: 106,
                    filename: '梁博文与云幻灯.pptx'
                }
            },
            {
                id: 20,
                topic: '很好的一个会议',
                holder: {
                    id: 532,
                    nickname: 'Simon Liang',
                    email: 'simonlbw@gmail.com'
                },
                ppt: {
                    id: 532,
                    filename: '很好会议讲稿.pptx'
                }
            },
            {
                id: 32,
                topic: '今晚吃什么会议',
                holder: {
                    id: 532,
                    nickname: 'Simon Liang',
                    email: 'simonlbw@gmail.com'
                },
                ppt: {
                    id: 293,
                    filename: '今晚会议.pptx'
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
