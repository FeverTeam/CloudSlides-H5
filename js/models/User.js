angular.module('User', ['config'])
    .factory('User', function ($resource, serverAddress) {
//        $http.defaults.useXDomain = true;
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