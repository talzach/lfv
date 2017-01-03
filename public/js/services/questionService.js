angular.module('lfv.services').factory('questionService',
    ['Restangular', 'questionFactory',
        function (Restangular, questionFactory) {
            let data = {
                userRestrictedQuestionIds: [],
                previousQuestions: []
            };

            return {
                get: number => {
                    return Restangular.one('api/questions', number).get().then(data => data.plain());
                },
                getNext: (currentQuestionNumber, restrictedList) => {
                    return Restangular.one('api/questions/next')
                        .customPOST({restrictedQuestions: restrictedList, lastQuestionNumber: currentQuestionNumber}).then(
                            data => data.plain()
                        );
                },
                getNextNumber: (currentQuestionNumber, restrictedList) => {
                    return Restangular.one('api/questions/nextNumber')
                        .customPOST({restrictedQuestions: restrictedList, lastQuestionNumber: currentQuestionNumber});
                },
                getAll: () => {
                    let questions = Restangular.all('api/questions');
                    return questions.getList().then(
                        function (data) {
                            return data.plain();
                        }
                    );
                },
                create: type => {
                    return questionFactory.createQuestion(type);
                },
                save: question => {
                    return question.save();
                },
                delete: number => {
                    return Restangular.one('api/questions', number).remove();
                },
                getUserRestrictedQuestionIds: () => {
                    return data.userRestrictedQuestionIds;
                },
                setUserRestrictedQuestionIds: ids => {
                    data.userRestrictedQuestionIds = ids;
                },
                previousQuestions: () => {
                    return data.previousQuestions;
                }
            };
    }]);