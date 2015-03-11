(function() {
    'use strict';

    angular.module('cmBikers.biker-info')
    .directive('cmbBikerTopList', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'common/biker-info/biker-top-list.tpl.html',
            scope: {
                header: '=',
                orderBy: '=',
                bikers: '='
            }
        };
    });
})();
