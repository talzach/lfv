angular.module('QuestionCtrl', []).controller('QuestionController', function ($scope, QuestionService) {
    QuestionService.getAsync().then(function (data) {
        $scope.question = data;
    });
});
