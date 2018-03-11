angular.module("DocumentLabApp").directive("footerbar", function() {
  return {
    restrict: 'AE',
    templateUrl: 'directives/footer/footer.html',
    scope: true,
    transclude : false,
    controller: 'footerController'
  };


  
});


