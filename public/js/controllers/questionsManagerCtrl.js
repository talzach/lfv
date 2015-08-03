angular.module('questionsManagerCtrl', []).controller('questionsManagerController', function ($scope, $location, questionService) {
    questionService.query(
    function(data) {
        $scope.allQuestions = data;
    },
    function(response) {
        $scope.serverErrors = response.data.errors;
        $scope.IsError = true;
    });

    $scope.newQuestion = function () {
        $location.path("/admin/newQuestion");
    };

    $scope.editQuestion = function () {

    };

    $scope.removeQuestion = function () {

    };

    $scope.removeFailedMessage = function () {
        $scope.IsError = false;
    };
});
