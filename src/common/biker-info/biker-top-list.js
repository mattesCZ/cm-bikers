(function() {
    'use strict';

    angular.module('app.biker-info')
        .directive('cmbBikerTopList', bikerTopList);

    function bikerTopList() {
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

        function linkFn(scope) {
            scope.reorder = function(property) {
                scope.orderBy = property;
            };
        }
    }
})();
