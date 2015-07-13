angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/question', {
            templateUrl: 'views/question.html',
            controller: 'QuestionController'
        });

    $locationProvider.html5Mode(true);

}]);
