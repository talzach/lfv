angular.module('adminAppRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
    $routeProvider
        
        .when('/admin', {
            templateUrl: 'views/admin/questionsManager.html',
            controller: 'questionsManagerController'
        })

        .when('/admin/editQuestion/:number', {
            templateUrl: 'views/admin/editQuestion.html',
            controller: 'editQuestionController'
        })

        .when('/admin/newQuestion', {
            templateUrl: 'views/admin/editQuestion.html',
            controller: 'editQuestionController'
        });

    $routeProvider.otherwise({redirectTo: '/admin'});
    $locationProvider.html5Mode(true);
}]);

