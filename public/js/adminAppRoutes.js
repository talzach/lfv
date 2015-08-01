angular.module('adminAppRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider


        .when('/admin', {
            templateUrl: 'views/admin/newQuestion.html',
            controller: 'newQuestionController'
        });


    $locationProvider.html5Mode(true);

}]);

