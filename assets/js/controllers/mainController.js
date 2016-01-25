angular.module('main-controller', [])
  .controller('mainController', function($scope, $route, $routeParams, $location, mainService) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    console.log(mainService.getTest("yo"));

    $scope.isCurrentPage = function (path) {
      if ($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    }
  });
