angular.module('editQuestionCtrl', []).controller('editQuestionController', function ($scope, questionService, $timeout, $routeParams) {
    if ($routeParams.question) {
        $scope.question = $routeParams.question;
        $scope.pageTitle = 'Edit Question';
    }
    else {
        initializeNewQuestion();
        $scope.pageTitle = 'Add New Question';
    }

    function initializeNewQuestion() {
        $scope.question = new questionService();
        $scope.question.number = NaN;
        $scope.question.possibleAnswers = [{}, {}];
    }

    $scope.addAnswer = function () {
        var newItemNo = $scope.question.possibleAnswers.length + 1;
        $scope.question.possibleAnswers.push({'number': newItemNo, text: ""});
    };

    $scope.removeAnswer = function () {
        var lastItem = $scope.question.possibleAnswers.length - 1;
        $scope.question.possibleAnswers.splice(lastItem);
    };

    $scope.removeSaveSucceed = function () {
        $scope.IsSaved = false;
    };

    $scope.removeSaveFailed = function () {
        $scope.IsError = false;
    };

    $scope.save = function () {
        $scope.question.$update(
            function (data) {
                if (data) {
                    $scope.IsSaved = true;
                    $timeout($scope.removeSaveSucceed, 3000);
                }
            },
            function (response) {
                $scope.serverErrors = response.data.errors;
                $scope.IsError = true;
            });
    };
});
