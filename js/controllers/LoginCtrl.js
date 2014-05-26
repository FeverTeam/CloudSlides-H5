angular.module('LoginCtrl', ['User', 'userInfoSrv'])

    .controller('LoginCtrl', function ($scope, $location, valiateSrv, userInfoSrv, User) {

        //初始化
        $scope.inputEmail = "a@b.c";
        $scope.inputPassword = "123456";
        $scope.isCardShow = false;

        //事件
        $scope.onLoginButtonClick = function () {

            var check = checkEmail($scope.inputEmail);
            if (check.message != "") {
                $scope.reminderText = check.message;
                $scope.isCardShow = true;
                return;
            }

            if ($scope.inputPassword.length < 6) {
                $scope.reminderText = "输入至少6位的密码";
                $scope.isCardShow = true;
                return;
            }

            $scope.isCardShow = false;

            //执行登录操作
            User.login(
                {
                    email: $scope.inputEmail,
                    password: $scope.inputPassword
                },
                function (result, responseHeaders) {

                    //unimplement
//                    console.log(result);
                    //更新用户信息
                    userInfoSrv.update(result.id, result.email, result.token, result.nickname);
                    $location.path("/main");
                },
                function (httpResponse) {
                    console.log(httpResponse);
                    $location.path("/main");
                });

        };

        $scope.onEmailBlur = function () {
            var check = checkEmail($scope.inputEmail);
            if (check.message != "") {
                $scope.reminderText = check.message;
                $scope.isCardShow = true;

            } else {
                $scope.isCardShow = false
            }
        };


        $scope.onPasswordBlur = function () {
            if ($scope.inputPassword.length < 6) {
                $scope.reminderText = "输入至少6位的密码";
                $scope.isCardShow = true;
            } else {
                $scope.isCardShow = false
            }
        };

        //私有方法
        function checkEmail(email) {
            var check = {};
            check.message = "";

            if (!valiateSrv.isEmailForm(email)) {
                check.message = "请输入正确格式的电邮地址"
            }
            return check;
        }


    });