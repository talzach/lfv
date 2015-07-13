angular.module('QuestionService', []).factory('Question', ['$http', function($http) {

    return {
        // call to get all questions
        getAsync : function() {
            return $http.get('/api/questions').then(function(response) {
                return response.data;
            });
        }
    };

}]);