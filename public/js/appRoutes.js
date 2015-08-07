angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/question', {
            templateUrl: 'views/questions/simpleQuestion.html',
            controller: 'questionController'
        });

    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);

}]);
