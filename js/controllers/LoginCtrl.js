angular.module('loginCtrl', ['User'])

    .controller('LoginCtrl', function ($scope, valiateSrv, User) {

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


            User.get({id: 1}, function (user) {
                console.log(user);;
                console.log(user.email);
            });

            User.login({email: $scope.inputEmail, password: $scope.inputPassword});


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