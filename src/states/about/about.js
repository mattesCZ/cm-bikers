angular.module('cmBikers.about', [
    'ui.router'
])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        views: {
            'main': {
                controller: 'AboutCtrl',
                templateUrl: 'states/about/about.tpl.html'
            }
        }
    });
}])

.controller('AboutCtrl', [function () {
}]);
