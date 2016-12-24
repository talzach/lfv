angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/question/:number', {
            templateUrl: 'views/questions/question.html',
            controller: 'questionController'
        });

    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);

}]);
