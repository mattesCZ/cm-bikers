angular.module('cmBikers.about', [
    'ui.router'
])

.config(function ($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        views: {
            'main': {
                controller: 'AboutCtrl',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data: {pageTitle: 'What is It?'}
    });
})

.controller('AboutCtrl', function () {
});
