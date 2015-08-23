angular.module('lfv.controllers').controller('restrictedQuestionsCtrl', function ($scope, Restangular, $modalInstance, answer) {
    $scope.answer = answer;
    $scope.questionToAdd = null;

    var questions = Restangular.all('api/questions');
    questions.getList().then(
        function (allQuestions) {
                $scope.allQuestions = allQuestions;
        });

    $scope.hasRestrictedQuestions = function() {
        return answer.restrictedQuestions.length == 0;
    };

    $scope.removeQuestion = function ($index) {
        answer.restrictedQuestions.splice($index, 1);
    };

    $scope.addRestricted = function () {
        if (answer.restrictedQuestions.indexOf($scope.questionToAdd.originalObject) == -1) {
            answer.restrictedQuestions.push($scope.questionToAdd.originalObject);
        }
    };

    $scope.save = function () {
        $modalInstance.close($scope.answer);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
