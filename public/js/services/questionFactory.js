angular.module('lfv.services').service('questionFactory', ['Restangular', function (Restangular) {
    this.createQuestion = function (type) {
        var question = Restangular.one('api/questions');
        question.number = NaN;
        question.type = type;

        if (type === "YesNo") {
            initializeYesNoQuestion(question);
        } else if (type === "Simple") {
            initializeSimpleQuestion(question);
        }

        return question;

        function initializeSimpleQuestion(question) {
            question.possibleAnswers = [{}, {}];
        }

        function initializeYesNoQuestion(question) {
            question.possibleAnswers = [{ text: 'Yes' }, { text: 'No' }];
        }
    };
}]);
