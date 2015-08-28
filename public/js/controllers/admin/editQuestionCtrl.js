angular.module('lfv.controllers').controller('editQuestionController',
    ['$scope', 'questionService', '$timeout', '$routeParams', '$modal',
        function ($scope, questionService, $timeout, $routeParams, $modal) {

            if ($routeParams.number) {
                $scope.pageTitle = 'Edit Question Number ' + $routeParams.number;
                questionService.get($routeParams.number).then(
                    function (data) {
                        $scope.question = data;
                    }
                );
            }
            else {
                $scope.pageTitle = 'Add New Question';
                $scope.question = questionService.create();
            }

            $scope.addAnswer = function () {
                var newItemNo = $scope.question.possibleAnswers.length + 1;
                $scope.question.possibleAnswers.push({'number': newItemNo, text: ""});
            };

            $scope.removeAnswer = function () {
                var lastItem = $scope.question.possibleAnswers.length - 1;
                $scope.question.possibleAnswers.splice(lastItem);
            };

            $scope.removeSaveSucceed = function () {
                $scope.IsSaved = false;
            };

            $scope.removeSaveFailed = function () {
                $scope.IsError = false;
            };

            $scope.save = function () {
                questionService.save($scope.question).then(
                    function (data) {
                        if (data) {
                            $scope.question = data;
                            $scope.IsSaved = true;
                            $timeout($scope.removeSaveSucceed, 3000);
                        }
                    },
                    function (response) {
                        $scope.serverErrors = response.data.errors;
                        $scope.IsError = true;
                    });
            };

            $scope.showRestricted = function (answer) {
                var modalInstance = $modal.open({
                    animation: false,
                    templateUrl: '../../../dialogs/restrictedQuestions.html',
                    controller: 'restrictedQuestionsCtrl',
                    size: 'md',
                    resolve: {
                        answer: function () {
                            return answer;
                        }
                    }
                });
                modalInstance.result.then(
                    function () {
                        $scope.save();
                    });
            };

        }]);
