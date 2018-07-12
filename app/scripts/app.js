angular.module('lightApp', [
        'ui.router',
        'ngRoute',
        'ngResource',
        'lightApp.controllers',
        'lightApp.services'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$compileProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

            $compileProvider.debugInfoEnabled(true);

            $locationProvider.html5Mode(true);

            //config ui-route
            $urlRouterProvider.otherwise('/list');
            $stateProvider
                .state('list', {
                    url: '/list',
                    templateUrl: 'views/list.html',
                    controller: 'ListController'
                })
                .state('single', {
                    url: '/list/:id',
                    templateUrl: 'views/single.html',
                    controller: 'SingleController'
                }).state('new', {
                    url: '/list/new',
                    templateUrl: 'views/new.html',
                    controller: 'NewController'
                }).state('edit', {
                    url: '/list/:id/edit',
                    templateUrl: 'views/edit.html',
                    controller: 'EditController'
                });
        }
    ]).run(['$state',
        function($state) {
            $state.go('list');
        }
    ]);