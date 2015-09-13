angular.module('lfv.services').factory('questionService',
    ['Restangular', 'questionFactory',
        function (Restangular, questionFactory) {

        return {
            get: function (number) {
                return Restangular.one('api/questions', number).get();
            },
            getNext: function (number, restricted) {
                return Restangular.one('api/questions/next').customPOST({restrictedQuestions: restricted, lastQuestionNumber: number});
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