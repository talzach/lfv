angular.module('lfv.services').factory('questionService',
    ['Restangular', 'questionFactory',
        function (Restangular, questionFactory) {

        return {
            get: function (number) {
                return Restangular.one('api/questions', number).get();
            },
            getNext: function (currentQuestionNumber, restrictedList) {
                return Restangular.one('api/questions/next')
                    .customPOST({restrictedQuestions: restrictedList, lastQuestionNumber: currentQuestionNumber});
            },
            getPrevious: function (currentQuestionNumber, restrictedList) {
                return Restangular.one('api/questions/next')
                    .customPOST({restrictedQuestions: restrictedList, lastQuestionNumber: currentQuestionNumber});
            },
            getAll: function() {
                var questions = Restangular.all('api/questions');
                return questions.getList();
            },
            create: function (type) {
                return questionFactory.createQuestion(type);
            },
            save: function (question) {
                return question.save();
            },
            delete: function (number) {
                return Restangular.one('api/questions', number).remove();
            }
        };

    }]);