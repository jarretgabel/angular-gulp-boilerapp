require('angular');
require('angular-route');
require('angular-animate');

require('./controllers/mainController');
require('./controllers/aboutController');
require('./controllers/welcomeController');
require('./services/mainService');
require('./services/aboutService');
require('./services/welcomeService');
require('./filters/utils');

angular.module('AngularGulpBoilerplate', [
    'ngRoute',
    'ngAnimate',
    'main-controller',
    'welcome-controller',
    'about-controller',
    'main-service',
    'welcome-service',
    'about-service',
    'utils'
  ])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/welcome', {
          templateUrl: 'welcome.html',
          controller: 'welcomeController',
          activetab: 'welcome'
        })
        .when('/about', {
          templateUrl: 'about.html',
          controller: 'aboutController',
          activetab: 'about'
        })
        .otherwise({ redirectTo:'/welcome' });

      $locationProvider.html5Mode({ enabled: true });
    }]);