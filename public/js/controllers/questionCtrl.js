angular.module('lfv.controllers').controller('questionController', ['$scope', 'questionService', function ($scope, questionService) {
    var userRestrictedQuestionIds = [];
    $scope.selectedAnswer = null;

    questionService.get(1).then(
        function (data) {
            $scope.question = data;
        });

    function isQuestionWithNextButton() {
        return $scope.question.type !== 'Simple';
    }

    $scope.answerSelected = function(answer) {
        $scope.selectedAnswer = answer;

        if (isQuestionWithNextButton()) {
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