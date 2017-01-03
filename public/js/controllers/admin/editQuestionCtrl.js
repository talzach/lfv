angular.module('lfv.controllers').controller('editQuestionController',
    ['$scope', 'questionService', '$timeout', '$routeParams', '$uibModal',
        function ($scope, questionService, $timeout, $routeParams, $uibModal)  {

            if ($routeParams.number) {
                $scope.pageTitle = 'Edit Question Number ' + $routeParams.number;
                $scope.isNewQestion = false;
                questionService.get($routeParams.number).then(data => $scope.question = data);
            } else {
                $scope.pageTitle = 'Add New Question';
                $scope.isNewQestion = true;
            }

            $('#questionTypeDropDown li').on('click', function(){
                $scope.question = questionService.create($(this).text());
            });

            $scope.addAnswer = () => {
                let newItemNo = $scope.question.possibleAnswers.length + 1;
                $scope.question.possibleAnswers.push({'number': newItemNo, text: ""});
            };

            $scope.removeAnswer = () => {
                let lastItem = $scope.question.possibleAnswers.length - 1;
                $scope.question.possibleAnswers.splice(lastItem);
            };

            $scope.removeSaveSucceed = () => $scope.IsSaved = false;

            $scope.removeSaveFailed = () => $scope.IsError = false;

            $scope.save = () => {
                questionService.save($scope.question).then(
                    data => {
                        if (data) {
                            $scope.question = data;
                            $scope.IsSaved = true;
                            $timeout($scope.removeSaveSucceed, 3000);
                        }
                    },
                    response => {
                        $scope.serverErrors = response.data.errors;
                        $scope.IsError = true;
                    });
            };

            $scope.showRestricted = (answer, $index) => {
                let modalInstance = $uibModal.open({
                    animation: false,
                    templateUrl: '../../../dialogs/restrictedQuestions.html',
                    controller: 'restrictedQuestionsCtrl',
                    size: 'md',
                    resolve: { answer: () => answer }
                });
                modalInstance.result.then(
                    newAnswer =>
                        $scope.question.possibleAnswers[$index] = newAnswer
                    );
            };
        }]);
