(function() {
    'use strict';

    angular.module('cmBikers.common')
        .factory('RestService', ['$http', service]);

    function service($http) {
        var base = '../src/data/',
            _this = {
                get: get
            };

        return _this;

        function get(urlSuffix, config) {
            return $http.get(base + urlSuffix, config).then(function (response) {
                return response.data;
            });
        }
    }
})();
