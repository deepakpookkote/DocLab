angular.module("DocumentLabApp").directive("topbar", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/Topbar/Topbar.html',
    scope: true,
    transclude : false,
    controller: 'TopbarController'
  };
});