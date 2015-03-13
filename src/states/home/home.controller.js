(function() {
    'use strict';

    angular.module('app.home')
        .controller('HomeController', ['$scope', 'bikers', HomeController]);

    function HomeController($scope, bikers) {
        $scope.bikers = bikers;
    }
})();
