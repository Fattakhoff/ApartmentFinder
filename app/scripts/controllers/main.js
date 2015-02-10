'use strict';

angular.module('mytodoApp').controller('myCtrl', ['$scope', function($scope){
    $scope.cities = [
      {
        city: 'Bellevue',
        imageSrc: 'images/Bellevue.jpg'
      },
      {
        city: 'Kirkland',
        imageSrc: 'images/Kirkland.jpg'
      }
      ]
}]);

var m = {
  "Moscow" : "MoscowCityIMG",
  "Saint-Petersburg" : "SaintPetersburgIMG"

};

function MyCityCtrl($scope)
{
  $scope.$items = m;
}
