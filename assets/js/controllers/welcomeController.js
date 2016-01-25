angular.module('welcome-controller', [])
  .controller('welcomeController', function($scope, $routeParams, $location, welcomeService) {
    this.name = "welcome-controller";
    this.params = $routeParams;

    console.log(welcomeService.getTest("bro"));
  });