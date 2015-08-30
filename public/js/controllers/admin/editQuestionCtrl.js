angular.module('lfv.controllers').controller('editQuestionController',
    ['$scope', 'questionService', '$timeout', '$routeParams', '$modal',
        function ($scope, questionService, $timeout, $routeParams, $modal) {

            if ($routeParams.number) {
                $scope.pageTitle = 'Edit Question Number ' + $routeParams.number;
                $scope.isNewQestion = false;
                questionService.get($routeParams.number).then(
                    function (data) {
                        $scope.question = data;
                        $scope.question.type = 'Simple';
                    }
                );
            }
            else {
                $scope.pageTitle = 'Add New Question';
                $scope.isNewQestion = true;
            }

            $('#questionTypeDropDown li').on('click', function(){
                $scope.question = questionService.create();
                $scope.question.type = $(this).text();
            });

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

            $scope.showRestricted = function (answer, $index) {
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
                    function (newAnswer) {
                        $scope.question.possibleAnswers[$index] = newAnswer;
                    });
            };

        }]);
