angular.module('lfv.controllers').controller('questionController', ['$scope', 'questionService', function ($scope, questionService) {
    var userRestrictedQuestionIds = [];
    $scope.selectedAnswer = null;
    GetFirstQuestion();
    //var dictFactory = new DictionaryFactory();
    //var myDict = dictFactory.New();

    //region Scope Functions

    $scope.answerSelected = function(answer) {
        $scope.selectedAnswer = answer;

        if (isQuestionWithNextButton()) {
            $scope.nextQuestion();
        }
    };

    $scope.nextQuestion = function () {
        if ($scope.selectedAnswer) {

            var userRestrictedQuestionIds = addRestrictedFromSelectedAnswer();
            questionService.getNext($scope.question.number, userRestrictedQuestionIds).then(
                function (data) {
                    $scope.question = data;
                    $scope.selectedAnswer = null;
                });
        }
    };

    //endregion Scope Functions

    //region Private Functions

    function GetFirstQuestion() {
        questionService.get(1).then(
            function (data) {
                $scope.question = data;
            });
    }

    function isQuestionWithNextButton() {
        return $scope.question.type !== 'Simple';
    }

    function addRestrictedFromSelectedAnswer() {

        userRestrictedQuestionIds[$scope.question.number] = getSelectedAnswerRestrictedIds();



        if ($scope.selectedAnswer.restrictedQuestions) {
            userRestrictedQuestionIds = userRestrictedQuestionIds.concat(
                getSelectedAnswerRestrictedIds()
            );
        }

        return userRestrictedQuestionIds;
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