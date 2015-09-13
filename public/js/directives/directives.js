angular.module('lfv.directives')
    .directive('simpleQuestion', function () {
        return {
            templateUrl: 'views/questions/simple-question.html',
            restrict: 'A'
        };
    }).directive('yesNoQuestion', function () {
        return {
            templateUrl: 'views/questions/yes-no-question.html',
            restrict: 'A'
        };
    }).directive('editSimpleQuestion', function () {
        return {
            templateUrl: 'views/admin/editQuestions/edit-simple-question.html',
            restrict: 'A'
        };
    }).directive('editYesNoQuestion', function () {
        return {
            templateUrl: 'views/admin/editQuestions/edit-yes-no-question.html',
            restrict: 'A'
        };
    });
