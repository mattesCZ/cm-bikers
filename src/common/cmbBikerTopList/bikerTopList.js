angular.module('cmbBikerTopList', [])
.directive('cmbBikerTopList', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'common/cmbBikerTopList/bikerTopList.tpl.html',
        scope: {
            header: '=',
            orderBy: '=',
            bikers: '='
        }
    };
});
