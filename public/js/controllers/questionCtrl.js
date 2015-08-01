angular.module('questionCtrl', []).controller('questionController', function ($scope, questionService) {
    questionService.getAsync().then(function (data) {
        $scope.question = data;
    });
});
