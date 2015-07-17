angular.module('QuestionCtrl', []).controller('QuestionController', function ($scope, Question) {
    $scope.questions = '';
    $scope.getQuestions = function () {
        Question.getAsync().then(function (data) {
            $scope.question = data;
        });
    };
});
