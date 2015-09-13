angular.module('lfv.controllers').controller('questionController', ['$scope', 'questionService', function ($scope, questionService) {
    var userRestrictedQuestionIds = [];
    $scope.selectedAnswer = null;

    questionService.get(1).then(
        function (data) {
            $scope.question = data;
        });

    $scope.answerSelected = function(answer) {
        $scope.selectedAnswer = answer;

        if ($scope.question.type === 'YesNo') {
            $scope.nextQuestion();
        }
    };

    $scope.nextQuestion = function () {
        if ($scope.selectedAnswer) {
            if ($scope.selectedAnswer.restrictedQuestions) {
                userRestrictedQuestionIds = userRestrictedQuestionIds.concat(
                    $scope.selectedAnswer.restrictedQuestions.map(
                        function (x) {
                            return x._id
                        }
                    )
                );
            }

            questionService.getNext($scope.question.number, userRestrictedQuestionIds).then(
                function (data) {
                    $scope.question = data;
                    $scope.selectedAnswer = null;
                });
        }
    };
}]);