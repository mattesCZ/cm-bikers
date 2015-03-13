(function() {
    'use strict';

    angular.module('app.about')
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
