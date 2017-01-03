angular.module('lfv.directives')
    .directive('simpleQuestion', () => {
        return {
            templateUrl: 'views/questions/simple-question.html',
            restrict: 'A'
        };
    }).directive('yesNoQuestion', () => {
        return {
            templateUrl: 'views/questions/yes-no-question.html',
            restrict: 'A'
        };
    }).directive('gradeQuestion', () => {
        return {
            templateUrl: 'views/questions/grade-question.html',
            restrict: 'A'
        };
    }).directive('editSimpleQuestion', () => {
        return {
            templateUrl: 'views/admin/editQuestions/edit-simple-question.html',
            restrict: 'A'
        };
    }).directive('editYesNoQuestion', () => {
        return {
            templateUrl: 'views/admin/editQuestions/edit-yes-no-question.html',
            restrict: 'A'
        };
    }).directive('editGradeQuestion', () => {
    return {
        templateUrl: 'views/admin/editQuestions/edit-grade-question.html',
        restrict: 'A'
    }});
