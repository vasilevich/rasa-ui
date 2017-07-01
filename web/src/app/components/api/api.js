angular
.module('app')
.controller('ApiController', ApiController)

function ApiController($scope, $http, $sce) {
  $scope.parse_cmd = "test";
}
