angular.module('lfv.directives').directive('simpleQuestion', function () {
    return {
        templateUrl: 'views/questions/simple-question.html'
    };
}).directive('editSimpleQuestion', function () {
    return {
        templateUrl: 'views/admin/editQuestions/edit-simple-question.html'
    };
}).directive('editYesNoQuestion', function () {
    return {
        templateUrl: 'views/admin/editQuestions/edit-yes-no-question.html'
    };
});
