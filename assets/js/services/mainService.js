angular.module('main-service', [])
  .factory('mainService', function() {
    var mainService = {
      
      getTest: function(val) {
        return val;
      }

    };
    return mainService;
  });