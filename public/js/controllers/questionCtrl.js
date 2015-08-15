angular.module('lfv.controllers').controller('questionController', function ($scope, Restangular) {
    $scope.question = Restangular.one('api/questions', 48).get().then(
        function (data) {
            $scope.question = data;
        }
    )
});