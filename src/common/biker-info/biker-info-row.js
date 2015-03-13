(function() {
    'use strict';

    angular.module('app.biker-info')
        .directive('cmbBikerInfoRow', bikerInfoRow);

    function bikerInfoRow() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                ngModel: '='
            },
            templateUrl: 'common/biker-info/biker-info-row.tpl.html',
            controller: ['$scope', controller]
        };

        function controller($scope) {
            $scope.biker = $scope.ngModel;
        }
    }
})();
