angular.module("google-chart",[])
  .directive("googleChart", function(){  
    return{
      restrict : "A",
      link: function($scope, $elem, $attr){
        var dt = $scope[$attr.ngModel].dataTable;

        var options = {
          slices: {
            0: { color: '#0096d0' },
            1: { color: '#9AE5FC' }
          }
        };

        if($scope[$attr.ngModel].title)
            options.title = $scope[$attr.ngModel].title;

        var googleChart = new google.visualization[$attr.googleChart]($elem[0]);
        googleChart.draw(dt,options)
      }
    }
  });