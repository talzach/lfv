angular.module('adminCtrl', []).controller('adminController', function ($scope, questionService, $timeout) {
    $scope.newQuestion = {
        number : NaN,
        text : "",
        possibleAnswers : [{'number': 1, text: ""}, {'number': 2, text: ""}] };

    $scope.addAnswer = function () {
        var newItemNo = $scope.newQuestion.possibleAnswers.length + 1;
        $scope.newQuestion.possibleAnswers.push({'number': newItemNo, text: ""});
    };

    $scope.removeAnswer = function () {
        var lastItem = $scope.newQuestion.possibleAnswers.length - 1;
        $scope.newQuestion.possibleAnswers.splice(lastItem);
    };

    $scope.finishedSaved = function () {
        $scope.IsSaved = false;
    };

    $scope.save = function(){
        $scope.IsSaved = true;
        $timeout($scope.finishedSaved, 3000);
        //
        //questionService.saveAsync().then(function(){
        //    if (isSaved) {
        //        $scope.IsSaved = true;
        //        $timeout(function () {
        //            $scope.IsSaved = false;
        //        }, 10000);
        //    }
        //});
    };
});
