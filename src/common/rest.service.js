(function() {
    'use strict';

    angular.module('cmBikers.common')
    .service('RestService',
        ['$http',
        function($http) {
            var _this = this,
                base = '../src/data/';

            _this.get = function (urlSuffix, config) {
                return $http.get(base + urlSuffix, config).then(function(response) {
                    return response.data;
                });
            };
        }]
    );
})();
