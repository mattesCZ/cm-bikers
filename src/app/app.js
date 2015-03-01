angular.module( 'cmBikers', [
    'templates-app',
    'templates-common',
    'cmBikers.home',
    'cmBikers.about',
    'ui.router'
])
.config(
    ['$stateProvider', '$urlRouterProvider',
    function ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
    }]
);
