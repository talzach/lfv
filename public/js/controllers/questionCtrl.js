angular.module('lfv.controllers').controller('questionController',
    ['$scope', 'questionService', '$location', '$routeParams', function ($scope, questionService, $location, $routeParams) {

    $scope.selectedAnswer = null;
    GetQuestion();

    //region Scope Functions

    $scope.answerSelected = function(answer) {
        $scope.selectedAnswer = answer;

        if (isQuestionWithNextButton()) {
            $scope.nextQuestion();
        }
    };

    $scope.nextQuestion = function () {
        if ($scope.selectedAnswer) {

            addRestrictedFromSelectedAnswer();
            questionService.getNextNumber($scope.question.number, questionService.getUserRestrictedQuestionIds()).then(
                function (nextQuestionNumber) {
                    $location.path("/question/" + nextQuestionNumber);
                },
                function (response) {
                    $location.path("/question");
                });
        }
    };

    $scope.previousQuestion = function() {

    };

    //endregion Scope Functions

    //region Private Functions

    function GetQuestion() {
        questionService.get($routeParams.number).then(
            function (data) {
                $scope.question = data;
            });
    }

    function isQuestionWithNextButton() {
        return $scope.question.type !== 'Simple';
    }

    function addRestrictedFromSelectedAnswer() {
        if ($scope.selectedAnswer.restrictedQuestions) {
            questionService.setUserRestrictedQuestionIds(questionService.getUserRestrictedQuestionIds().concat(
                getSelectedAnswerRestrictedIds()
            ));
        }

        return questionService.getUserRestrictedQuestionIds();
    }

    function getSelectedAnswerRestrictedIds() {
        return $scope.selectedAnswer.restrictedQuestions.map(
            function (x) {
                return x._id
            }
        );
    }

    //endregion Functions
}]);