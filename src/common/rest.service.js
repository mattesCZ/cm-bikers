(function() {
    'use strict';

    angular.module('app.common')
        .factory('restService', ['$http', restService]);

    function restService($http) {
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
