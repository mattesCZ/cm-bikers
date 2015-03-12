(function() {
    'use strict';

    angular.module('cmBikers.biker-info')
        .directive('cmbBikerInfoRow', directive);

    function directive() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                ngModel: '='
            },
            templateUrl: 'common/biker-info/biker-info-row.tpl.html',
            controller: ['$scope', controller]
        };
    }

    function controller($scope) {
        $scope.biker = $scope.ngModel;
    }
})();
