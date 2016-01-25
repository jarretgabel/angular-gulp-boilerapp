angular.module('about-service', [])
  .factory('aboutService', function() {
    var aboutService = {
      
      getTest: function(val) {
        return val;
      }

    };
    return aboutService;
  });