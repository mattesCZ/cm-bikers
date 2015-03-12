(function() {
    'use strict';

    angular.module('cmBikers.home')
    .controller('HomeCtrl',
        ['$scope', 'bikers',
        function ($scope, bikers) {
            $scope.bikers = bikers;
        }]
    );
})();
