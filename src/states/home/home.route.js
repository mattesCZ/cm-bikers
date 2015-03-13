(function() {
    'use strict';

    angular.module('app.home')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'main': {
                    controller: 'HomeController',
                    templateUrl: 'states/home/home.tpl.html'
                }
            },
            resolve: {
                bikers: ['bikerService', bikers]
            }
        });

        function bikers(bikerService) {
            return bikerService.getAllBikers();
        }
    }
})();
