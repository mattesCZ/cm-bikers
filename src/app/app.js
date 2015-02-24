angular.module( 'cmBikers', [
    'templates-app',
    'templates-common',
    'cmBikers.home',
    'cmBikers.about',
    'ui.router'
])

.config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
})

.run( function () {
})

.controller( 'AppCtrl', function ( $scope ) {
    $scope.$on('$stateChangeSuccess', function(event, toState){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | CM Bikers' ;
        }
    });
});
