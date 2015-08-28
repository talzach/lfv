angular.module('lfv.services').factory('questionService',
    ['Restangular',
        function (Restangular) {

        return {
            get: function (number) {
                return Restangular.one('api/questions', number).get().then(
                    function (data) {
                        return data;
                    });
            },
            getAll: function() {
                var questions = Restangular.all('api/questions');
                return questions.getList().then(
                    function (data) {
                        return data;
                    },
                    function (response) {
                        return response;
                    });
            },
            create: function () {
                var question = Restangular.one('api/questions');
                question.number = NaN;
                question.possibleAnswers = [{}, {}];

                return question;
            },
            save: function (question) {
                return question.save().then(
                    function (data) {
                        if (data) {
                            return data;
                        }
                    },
                    function (response) {
                        return response;
                    });
            }
        };

    }]);