angular.module( 'cmBikers', [
    'templates-app',
    'templates-common',
    'cmBikers.home',
    'cmBikers.about',
    'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope ) {
    $scope.$on('$stateChangeSuccess', function(event, toState){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | CM Bikers' ;
        }
    });
});
