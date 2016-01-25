angular.module('utils', [])
  .filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
      return $filter('number')(input) + '%';
    };
  }])
  .filter('negative', ['$filter', function ($filter) {
    return function (input, decimals) {
      if(input != 0) {
        return '($' + $filter('number')(Math.round(input)) + ')';
      } else {
        return '$' + $filter('number')(Math.round(input));
      }
    };
  }]);