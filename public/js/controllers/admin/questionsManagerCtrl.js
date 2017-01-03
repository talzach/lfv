angular.module('lfv.controllers').controller('questionsManagerController',
    ['$scope', '$location', 'questionService', 'orderByFilter',
    function ($scope, $location, questionService, orderByFilter) {
        questionService.getAll().then(
            allQuestions => {
                $scope.allQuestions = allQuestions;
                $scope.allQuestions = orderByFilter($scope.allQuestions, ['number']);
                saveQuestions();
            },
            response => {
                $scope.serverErrors = response.data.errors;
                $scope.IsError = true;
            });

        function saveQuestions() {
            if ($scope.allQuestions) {
                for (let i = 0; i < $scope.allQuestions.length; i++) {
                    $scope.allQuestions[i].number = i + 1;
                    questionService.save($scope.allQuestions[i]);
                }
            }
        }

        $scope.createNew = () => $location.path("/admin/newQuestion");

        $scope.editQuestion = question => $location.path("/admin/editQuestion/" + question.number);

        $scope.deleteQuestion = question => {
            questionService.delete(question.number).then(
                data => {
                    if (data) {
                        let index = $scope.allQuestions.indexOf(question);
                        $scope.allQuestions.splice(index, 1);
                    }
                },
                response => {
                    $scope.serverErrors = response.data.errors;
                    $scope.IsError = true;
                });
        };

        $scope.removeFailedMessage = () => {
            $scope.IsError = false;
        };

        $scope.sortableOptions = {
            stop: (e, ui) => {
                saveQuestions();
            },
            axis: 'y'
        };
    }]);