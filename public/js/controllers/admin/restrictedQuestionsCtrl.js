angular.module('lfv.controllers').controller('restrictedQuestionsCtrl',
    [ '$scope', 'questionService', '$uibModalInstance', 'answer', '$window',
        function ($scope, questionService, $uibModalInstance, answer, $window) {
    $scope.answer = jQuery.extend(true, {}, answer);
    $scope.questionToAdd = null;

    questionService.getAll().then(allQuestions => $scope.allQuestions = allQuestions);

    function loaded() {
        document.getElementById("restrictedQuestionSelector").focus();
    }

    $scope.hasRestrictedQuestions = () => {
        return $scope.answer.restrictedQuestions && $scope.answer.restrictedQuestions.length == 0;
    };

    $scope.removeQuestion = $index => {
        $scope.answer.restrictedQuestions.splice($index, 1);
    };

    $scope.addRestricted = () => {
        if ($scope.answer.restrictedQuestions.indexOf($scope.questionToAdd.originalObject) == -1) {
            $scope.answer.restrictedQuestions.push($scope.questionToAdd.originalObject);
        }
    };

    $scope.close = () => {
        $uibModalInstance.close($scope.answer);
    };

    $scope.cancel = () => {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.goToQuestion = (number) => {
        $window.open("/admin/editQuestion/" + number, '_blank');
    };
}]);
