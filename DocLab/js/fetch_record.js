
App.factory('itemsService', ['$http', function($http){
  var itemsService ={
    itemDetails: function(urlpath,json_path,title) {
      return $http(
      {
        url: "api-data/action.json",
        method: "GET",
      })
      .then(function (response) {
        return response.data;
        });
      }
    };
    return itemsService;
  
}]);




