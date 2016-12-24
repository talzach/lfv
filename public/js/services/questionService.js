angular.module('lfv.services').factory('questionService',
    ['Restangular', 'questionFactory',
        function (Restangular, questionFactory) {
            var data = {
                userRestrictedQuestionIds: [],
                previousQuestions: []
            };

            return {
                get: function (number) {
                    return Restangular.one('api/questions', number).get().then(
                        function (data) {
                            return data.plain();
                        }
                    );
                },
                getNext: function (currentQuestionNumber, restrictedList) {
                    return Restangular.one('api/questions/next')
                        .customPOST({restrictedQuestions: restrictedList, lastQuestionNumber: currentQuestionNumber}).then(
                            function (data) {
                                return data.plain();
                            }
                        );
                },
                getNextNumber: function (currentQuestionNumber, restrictedList) {
                    return Restangular.one('api/questions/nextNumber')
                        .customPOST({restrictedQuestions: restrictedList, lastQuestionNumber: currentQuestionNumber});
                },
                getAll: function() {
                    var questions = Restangular.all('api/questions');
                    return questions.getList().then(
                        function (data) {
                            return data.plain();
                        }
                    );
                },
                create: function (type) {
                    return questionFactory.createQuestion(type);
                },
                save: function (question) {
                    return question.save();
                },
                delete: function (number) {
                    return Restangular.one('api/questions', number).remove();
                },
                getUserRestrictedQuestionIds: function () {
                    return data.userRestrictedQuestionIds;
                },
                setUserRestrictedQuestionIds: function (ids) {
                    data.userRestrictedQuestionIds = ids;
                },
                previousQuestions: function () {
                    return data.previousQuestions;
                }
            };
    }]);