angular.module('loginCtrl', [])

    .controller('LoginCtrl', function ($scope, valiateSrv) {

        //初始化
        $scope.inputEmail = "";
        $scope.inputPassword = "";
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


        }

        $scope.onEmailBlur = function () {
            var check = checkEmail($scope.inputEmail);
            if (check.message != "") {
                $scope.reminderText = check.message;
                $scope.isCardShow = true;
                return;
            } else {
                $scope.isCardShow = false
            }
        }


        $scope.onPasswordBlur = function () {
            if ($scope.inputPassword.length < 6) {
                $scope.reminderText = "输入至少6位的密码";
                $scope.isCardShow = true;
                return;
            } else {
                $scope.isCardShow = false
            }
        }

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