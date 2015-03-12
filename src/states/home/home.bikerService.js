(function() {
    'use strict';

    angular.module('cmBikers.home')
        .factory('BikerService', ['RestService', service]);

    function service(RestService) {
        var _this = {
            getAllBikers: getAllBikers
        };

        return _this;

        function getAllBikers() {
            return RestService.get('bikers.json');
        }
    }
})();
