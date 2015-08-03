angular.module('newQuestionCtrl', []).controller('newQuestionController', function ($scope, questionService, $timeout) {
    $scope.newQuestion = new questionService();
    $scope.newQuestion.number = NaN;
    $scope.newQuestion.text = "";
    $scope.newQuestion.possibleAnswers = [{'number': 1, text: ""}, {'number': 2, text: ""}];

    $scope.addAnswer = function () {
        var newItemNo = $scope.newQuestion.possibleAnswers.length + 1;
        $scope.newQuestion.possibleAnswers.push({'number': newItemNo, text: ""});
    };

    $scope.removeAnswer = function () {
        var lastItem = $scope.newQuestion.possibleAnswers.length - 1;
        $scope.newQuestion.possibleAnswers.splice(lastItem);
    };

    $scope.finishedSaved = function () {
        $scope.IsSaved = false;
    };

    $scope.saveFailed = function () {
        $scope.IsError = false;
    };

    $scope.save = function () {
        $scope.newQuestion.$save({},
            function (data, headers) {
                if (data != null) {
                    $scope.IsSaved = true;
                    $timeout($scope.finishedSaved, 3000);
                }
            },
            function (response) {
                $scope.serverErrors = response.data.errors;
                $scope.IsError = true;
            }
        );
    };

    //$scope.save = function () {
    //    questionService.save($scope.newQuestion).$promise.then(function (data) {
    //        $scope.IsSaved = true;
    //        $timeout($scope.finishedSaved, 3000);
    //    }, function (error) {
    //        $scope.IsError = true;
    //        $timeout($scope.saveFailed, 3000);
    //    });
    //};
});
