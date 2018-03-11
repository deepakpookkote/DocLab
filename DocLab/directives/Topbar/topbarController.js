App.controller('TopbarController', function($scope,$location) { 
	$scope.logout = function(){
      localStorage.removeItem("api_url");
      localStorage.removeItem("api_token");
      $location.path('/');
  }
});

