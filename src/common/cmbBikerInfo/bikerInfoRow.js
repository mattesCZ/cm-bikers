angular.module('cmbBikerInfoRow', [])
.directive('cmbBikerInfoRow', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            ngModel: '='
        },
        templateUrl: 'cmbBikerInfo/bikerInfoRow.tpl.html',
        controller: ['$scope', function ($scope) {
            $scope.biker = $scope.ngModel;
        }]
    };
});
