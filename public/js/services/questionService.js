angular.module('questionService', []).factory('questionService', function ($resource) {
    return $resource('/api/questions/:number');
});