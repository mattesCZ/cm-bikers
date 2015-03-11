(function() {
    'use strict';

    angular.module('cmBikers.home')
    .service('BikerService',
        ['RestService',
        function(RestService) {
            var _this = this;

            _this.getAllBikers = function () {
                return RestService.get('bikers.json');
            };
        }]
    );
})();
