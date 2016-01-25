angular.module('about-controller', [])
  .controller('aboutController', function($scope, $routeParams, $location, aboutService) {
    this.name = "about-controller";
    this.params = $routeParams;

    console.log(aboutService.getTest("what's up"));
  });