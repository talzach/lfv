angular.module('questionService', []).factory('questionService', ['$http', function ($http) {

    return {
        getAsync: function () {
            return $http.get('/api/questions/10').then(function (response) {
                return response.data;
            });
        },
        saveAsync: function () {
            return $http.get('/api/questions/10').then(function (response) {
                return response.data;
            });
        }
    };

}]);