angular.module('editQuestionCtrl', []).controller('editQuestionController', function ($scope, $timeout, $routeParams, Restangular) {
    if ($routeParams.number) {
        $scope.pageTitle = 'Edit Question';
        Restangular.one('api/questions', $routeParams.number).get().then(
            function (data) {
                $scope.question = data;
            });
    }
    else {
        $scope.pageTitle = 'Add New Question';
        initializeNewQuestion();
    }

    function initializeNewQuestion() {
        $scope.question = Restangular.one('api/questions');
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
        $scope.question.save().then(
            function (data) {
                if (data) {
                    $scope.question = data;
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
