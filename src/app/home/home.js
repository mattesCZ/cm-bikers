/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('cmBikers.home', [
    'ui.router',
    'cmbBikerInfoRow'
])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            'main': {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: {pageTitle: 'Home'}
    });
}])

.service('BikerService',
    ['$http',
    function($http) {
        var _this = this;

        _this.getAllBikers = function () {
            // TODO load bikers resource via REST API
            return $http.get('../src/data/bikers.json').then(function(response) {
                return response.data;
            });
        };
    }]
)

/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl',
    ['$scope', 'BikerService',
    function ($scope, BikerService) {
        BikerService.getAllBikers().then(function(bikers){
            $scope.bikers = bikers;
        });
    }]
);
