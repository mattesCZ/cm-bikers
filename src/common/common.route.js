(function(){
    'use strict';

    angular.module('cmBikers.common')
        .config(['$urlRouterProvider', config]);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise( '/home' );
    }
})();
