(function() {
    'use strict';

    angular.module('app.home')
        .factory('bikerService', ['restService', bikerService]);

    function bikerService(restService) {
        var _this = {
            getAllBikers: getAllBikers
        };

        return _this;

        function getAllBikers() {
            return restService.get('bikers.json');
        }
    }
})();
