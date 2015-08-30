angular.module('lfv.controllers').controller('questionsManagerController',
    ['$scope', '$location', 'questionService',
        function ($scope, $location, questionService) {
            questionService.getAll().then(
                function (allQuestions) {
                    $scope.allQuestions = allQuestions;
                },
                function (response) {
                    $scope.serverErrors = response.data.errors;
                    $scope.IsError = true;
                });

            $scope.createNew = function () {
                $location.path("/admin/newQuestion");
            };

            $scope.editQuestion = function (question) {
                $location.path("/admin/editQuestion/" + question.number);
            };

            $scope.deleteQuestion = function (question) {
                questionService.delete(question.number).then(
                    function (data) {
                        if (data) {
                            var index = $scope.allQuestions.indexOf(question);
                            $scope.allQuestions.splice(index, 1);
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
        }]);
