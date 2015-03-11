(function() {
    'use strict';

    angular.module('cmBikers.biker-info')
        .directive('cmbBikerInfoRow', function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    ngModel: '='
                },
                templateUrl: 'common/biker-info/biker-info-row.tpl.html',
                controller: ['$scope', function ($scope) {
                    $scope.biker = $scope.ngModel;
                }]
            };
        });
})();