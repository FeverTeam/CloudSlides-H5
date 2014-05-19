angular.module('User', ['config'])
    .factory('User', function ($resource, serverAddress, $http) {
//        $http.defaults.useXDomain = true;
        var server = serverAddress;
        return $resource(
            //url
                server + '/User',

            //paramDefaults
            {

            },

            //actions
            {
                'login': {
                    method: 'POST',
                    url: serverAddress+'/User/login'
                }

            });
    });