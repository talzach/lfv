angular.module('lfv.services').service('questionFactory', ['Restangular', function (Restangular) {
    this.createQuestion = function (type) {
        var question = Restangular.one('api/questions');
            question.number = NaN;
            question.type = type;

            if (type === "YesNo") {
                initializeYesNoQuestion(question);
            } else if (type === "Simple") {
                initializeSimpleQuestion(question);
            } else if (type === "Grade") {
                initializeGradeQuestion(question);
        }

        return question;

        function initializeSimpleQuestion(question) {
            question.possibleAnswers = [{}, {}];
        }

        function initializeYesNoQuestion(question) {
            question.possibleAnswers = [{ text: 'Yes' }, { text: 'No' }];
        }

        function initializeGradeQuestion(question) {
            question.possibleAnswers = [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }];
        }
    };
}]);
