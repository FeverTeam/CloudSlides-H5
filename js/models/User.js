angular.module('User', ['config'])
    .factory('User', function ($resource, serverAddress) {
        return $resource(
            //url
                serverAddress + '/User',

            //paramDefaults
            {

            },

            //actions
            {
                'login': {
                    method: 'POST',
                    url: serverAddress + '/User/login'
                }

            });
    });