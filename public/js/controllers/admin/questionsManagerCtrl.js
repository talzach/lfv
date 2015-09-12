angular.module('lfv.controllers').controller('questionsManagerController', ['$scope', '$location', 'questionService', 'orderByFilter',
    function ($scope, $location, questionService, orderByFilter) {
        questionService.getAll().then(
            function (allQuestions) {
                $scope.allQuestions = allQuestions;
                $scope.allQuestions = orderByFilter($scope.allQuestions, ['number']);
                saveQuestions();
            },
            function (response) {
                $scope.serverErrors = response.data.errors;
                $scope.IsError = true;
            });

        function saveQuestions() {
            if ($scope.allQuestions) {
                for (var i = 0; i < $scope.allQuestions.length; i++) {
                    $scope.allQuestions[i].number = i + 1;
                    questionService.save($scope.allQuestions[i]);
                }
            }
        }

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

        $scope.sortableOptions = {
            stop: function(e, ui) {
                saveQuestions();
            },
            axis: 'y'
        };
    }]);