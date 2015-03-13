(function(){
    'use strict';

    angular.module('app.common')
        .config(['$urlRouterProvider', config]);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise( '/home' );
    }
})();
