angular.module('questionCtrl', []).controller('questionController', function ($scope, questionService) {
    $scope.question = questionService.get({ number: 10 });
});
