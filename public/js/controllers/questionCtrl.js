angular.module('lfv.controllers').controller('questionController', ['$scope', 'questionService', function ($scope, questionService) {
    questionService.get(48).then(
        function (data) {
            $scope.question = data;
        });
}]);