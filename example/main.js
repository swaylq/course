var good = angular.module('good', []);
good.controller('GoodController', ['$scope', function($scope) {
  $scope.hehe = 1;
  $scope.goods = [{
    id: 0,
    name: 'hehe',
    price: 12,
    number: 10
  }, {
    id: 1,
    name: 'heihei',
    price: 14,
    number: 12
  }, {
    id: 2,
    name: 'haha',
    price: 16,
    number: 14
  }];
}]);