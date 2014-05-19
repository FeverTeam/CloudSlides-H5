angular.module('userInfoSrv', [])
    .factory('userInfoSrv', function () {
        var _userinfo = {};


        //从本地存储读取用户信息
        try {
            _userinfo = JSON.parse(window.localStorage['userInfo']);
        } catch (e) {
        }

        var obj = {
            getUserInfo: function () {
                return _userinfo;
            },
            save: function () {
                window.localStorage['userInfo'] = JSON.stringify(_userinfo);
            },
            // Get a settings val
            get: function (k) {
                return _userinfo[k];
            },
            // Set a settings val
            set: function (k, v) {
                _userinfo[k] = v;
                this.save();
            },
            // Update user info
            update: function (id, email, token, nickname) {
                _userinfo['id'] = id;
                _userinfo['email'] = email;
                _userinfo['token'] = token;
                _userinfo['nickname'] = nickname;
                this.save();
            }

        };

        return obj;
    });