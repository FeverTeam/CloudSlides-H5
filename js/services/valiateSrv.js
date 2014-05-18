angular.module('valiateSrv', [])
    .factory('valiateSrv', function () {

        var valiateSrv = {};

        //检查是否符合email格式
        valiateSrv.isEmailForm = function (email) {
            return (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(email);
        }

        return valiateSrv;
    });