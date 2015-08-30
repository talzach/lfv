angular.module('lfv.services').factory('questionService',
    ['Restangular',
        function (Restangular) {

        return {
            get: function (number) {
                return Restangular.one('api/questions', number).get();
            },
            getAll: function() {
                var questions = Restangular.all('api/questions');
                return questions.getList();
            },
            create: function () {
                var question = Restangular.one('api/questions');
                question.number = NaN;
                question.possibleAnswers = [{}, {}];

                return question;
            },
            save: function (question) {
                return question.save();
            },
            delete: function (number) {
                return Restangular.one('api/questions', number).remove();
            }
        };

    }]);