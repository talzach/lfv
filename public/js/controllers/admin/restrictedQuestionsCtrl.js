angular.module('lfv.controllers').controller('restrictedQuestionsCtrl',
    [ '$scope', 'questionService', '$uibModalInstance', 'answer', '$window',
        function ($scope, questionService, $uibModalInstance, answer, $window) {
    $scope.answer = jQuery.extend(true, {}, answer);
    $scope.questionToAdd = null;

    questionService.getAll().then(
        function (allQuestions) {
                $scope.allQuestions = allQuestions;
        });

    function loaded() {
        document.getElementById("restrictedQuestionSelector").focus();
    }

    $scope.hasRestrictedQuestions = function() {
        return $scope.answer.restrictedQuestions && $scope.answer.restrictedQuestions.length == 0;
    };

    $scope.removeQuestion = function ($index) {
        $scope.answer.restrictedQuestions.splice($index, 1);
    };

    $scope.addRestricted = function () {
        if ($scope.answer.restrictedQuestions.indexOf($scope.questionToAdd.originalObject) == -1) {
            $scope.answer.restrictedQuestions.push($scope.questionToAdd.originalObject);
        }
    };

    $scope.close = function () {
        $uibModalInstance.close($scope.answer);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.goToQuestion = function (number) {
        $window.open("/admin/editQuestion/" + number, '_blank');
    };
}]);
