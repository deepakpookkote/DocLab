App.controller('KeyController', ['$scope',function($scope, $localStorage) { 
		/*$scope.info = 'Welcome to Test';*/
		/*console.log(" Key controller is working ");*/
  
 
 	$scope.api_url;
    $scope.api_token;
    $scope.savedApiUrl = '';
    $scope.savedApiToken = '';

    var savedApiUrl = localStorage.getItem('api_url');
    var savedApiToken = localStorage.getItem('api_token');
    $scope.savedApiUrl = savedApiUrl;
    $scope.savedApiToken = savedApiToken;

    $scope.submit = function() {
        localStorage.setItem('api_url', $scope.api_url);
        localStorage.setItem('api_token', $scope.api_token);

        var savedApiUrl = localStorage.getItem('api_url');
        var savedApiToken = localStorage.getItem('api_token');
        $scope.savedApiUrl = savedApiUrl;
        $scope.savedApiToken = savedApiToken;
       /* console.log($scope.savedApiUrl);
        console.log($scope.savedApiToken);*/
      }
}]);