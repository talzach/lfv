angular.module('lfv.controllers').controller('restrictedQuestionsCtrl', function ($scope, $modalInstance, answer) {
    $scope.answer = answer;
    $scope.selected = $scope.answer.restrictedQuestions[0];

    $scope.ok = function () {
        $modalInstance.close($scope.answer);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
