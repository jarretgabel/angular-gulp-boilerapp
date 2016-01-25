angular.module('welcome-service', [])
  .factory('welcomeService', function() {
    var welcomeService = {
      
      getTest: function(val) {
        return val;
      }

    };
    return welcomeService;
  });