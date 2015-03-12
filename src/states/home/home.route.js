(function() {
    'use strict';

    angular.module('cmBikers.home')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'main': {
                    controller: 'HomeCtrl',
                    templateUrl: 'states/home/home.tpl.html'
                }
            },
            resolve: {
                bikers: ['BikerService', bikers]
            }
        });
    }]);

    function bikers(BikerService) {
        return BikerService.getAllBikers();
    }
})();
