angular.module('questionService', []).factory('questionService', function ($resource) {
    return $resource('/api/questions/:number', { number: '@number' }, {
            update: {
                method: 'PUT'
            }
        }
    );
});