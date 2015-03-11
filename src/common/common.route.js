(function(){
    'use strict';

    angular.module('cmBikers.common')
    .config(
        ['$stateProvider', '$urlRouterProvider',
        function ( $stateProvider, $urlRouterProvider ) {
            $urlRouterProvider.otherwise( '/home' );
        }]
    );
})();
