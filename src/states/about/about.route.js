(function() {
    'use strict';

    angular.module('cmBikers.about')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                'main': {
                    templateUrl: 'states/about/about.tpl.html'
                }
            }
        });
    }]);
})();
