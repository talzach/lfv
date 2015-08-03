angular.module('questionsManagerCtrl', []).controller('questionsManagerController', function ($scope, $location, questionService) {
    questionService.query(
        function (data) {
            $scope.allQuestions = data;
        },
        function (response) {
            $scope.serverErrors = response.data.errors;
            $scope.IsError = true;
        });

    $scope.newQuestion = function () {
        $location.path("/admin/newQuestion");
    };

    $scope.editQuestion = function (question) {
        question.text += 'edited!!';
        question.$update(
            function (data) {
                question = data;
            },
            function (response) {
                $scope.serverErrors = response.data.errors;
                $scope.IsError = true;
            });
    };

    $scope.deleteQuestion = function (question, $index) {
        question.$delete(
            function (data) {
                if (data) {
                    $scope.allQuestions.splice($index, 1);
                }
            },
            function (response) {
                $scope.serverErrors = response.data.errors;
                $scope.IsError = true;
            });
    };

    $scope.removeFailedMessage = function () {
        $scope.IsError = false;
    };
});
