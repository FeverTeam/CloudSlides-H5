angular.module('settingSrv', [])
    .factory('settingSrv', function () {
        var _settings = {};

        //从本地存储读取设置
        try {
            _settings = JSON.parse(window.localStorage['settings']);
        } catch (e) {
        }

        var obj = {
            getSettings: function () {
                return _settings;
            },
            // Save the settings to localStorage
            save: function () {
                window.localStorage['settings'] = JSON.stringify(_settings);

                ////////
//                $rootScope.$broadcast('settings.changed', _settings);
            },
            // Get a settings val
            get: function (k) {
                return _settings[k];
            },
            // Set a settings val
            set: function (k, v) {
                _settings[k] = v;
                this.save();
            }
        }

        // Save the settings to be safe
        obj.save();
        return obj;
    });