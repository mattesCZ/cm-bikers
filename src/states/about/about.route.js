(function() {
    'use strict';

    angular.module('cmBikers.about')
        .config(['$stateProvider', config]);

    function config($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                'main': {
                    templateUrl: 'states/about/about.tpl.html'
                }
            }
        });
    }
})();
