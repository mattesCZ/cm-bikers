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
)

.run( function () {
})

.controller( 'AppCtrl', ['$scope', function ( $scope ) {
    $scope.$on('$stateChangeSuccess', function(event, toState){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle + ' | CM Bikers' ;
        }
    });
}]);
