(function() {
    'use strict';

    angular.module('cmBikers.biker-info')
        .directive('cmbBikerTopList', directive);

    function directive() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'common/biker-info/biker-top-list.tpl.html',
            scope: {
                header: '=',
                orderBy: '=',
                bikers: '='
            },
            link: linkFn
        };
    }

    function linkFn(scope) {
        scope.reorder = function(property) {
            scope.orderBy = property;
        };
    }
})();
