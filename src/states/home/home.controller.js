(function() {
    'use strict';

    angular.module('cmBikers.home')
    .controller('HomeCtrl',
        ['$scope', 'BikerService',
        function ($scope, BikerService) {
            BikerService.getAllBikers().then(function(bikers){
                $scope.bikers = bikers;
            });
        }]
    );
})();
