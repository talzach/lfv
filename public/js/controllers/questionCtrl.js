angular.module('lfv.controllers').controller('questionController',
    ['$scope', 'questionService', '$location', '$routeParams',
        function ($scope, questionService, $location, $routeParams) {

    $scope.selectedAnswer = null;
    GetQuestion();

    //region Scope Functions

    $scope.answerSelected = answer => {
        $scope.selectedAnswer = answer;

        if (isQuestionWithNextButton()) {
            $scope.nextQuestion();
        }
    };

    $scope.nextQuestion = () => {
        if ($scope.selectedAnswer) {

            addRestrictedFromSelectedAnswer();
            questionService.getNextNumber($scope.question.number, questionService.getUserRestrictedQuestionIds()).then(
                nextQuestionNumber => {
                    $location.path("/question/" + nextQuestionNumber);
                },
                response => {
                    $location.path("/question");
                });
        }
    };

    $scope.previousQuestion = () => {

    };

    //endregion Scope Functions

    //region Private Functions

    function GetQuestion() {
        questionService.get($routeParams.number).then(data => $scope.question = data);
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
        return $scope.selectedAnswer.restrictedQuestions.map(x => x._id);
    }

    //endregion Functions
}]);