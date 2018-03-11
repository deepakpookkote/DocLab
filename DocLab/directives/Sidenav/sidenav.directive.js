angular.module("DocumentLabApp").directive("sidenav", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/Sidenav/Sidemenu.html',
    scope: true,
    transclude : false,
    controller: 'SidenavController'
  };
});
