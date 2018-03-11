angular.module("DocumentLabApp").directive("token", ['$location',function(location) {
  return {
    restrict: 'EA',
    replace: true,
        template: '<div></div>',
        link: function($scope, element, attrs) {
            console.log('in directive');
            $scope.token_check = function() {
                if (localStorage.getItem("api_token") == null) {
                	
                	console.log("token not present redirected to authenticate page");

                			location.path('/key');

                }else
                    {

                    	//console.log("token exists");
                    }
            } 
        }


  }; 
}]);



