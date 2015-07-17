angular.module('QuestionService', []).factory('Question', ['$http', function($http) {

    return {
        // call to get specific questions
        getAsync : function() {
            return $http.get('/api/questions/1').then(function(response) {
                return response.data;
            });
        }
    };

}]);