(function() {
    'use strict';

    angular.module('cmBikers.home')
        .controller('HomeCtrl', ['$scope', 'bikers', controller]);

    function controller($scope, bikers) {
        $scope.bikers = bikers;
    }
})();
