  App.controller('SidenavController', ['$scope', 'itemsService','actionService', function($scope, itemsService,actionService,
    $location,$window,$localStorage){

   /* console.log("service is working");*/

    /*Calling the factoy service from fetch_record.js*/
    var promise = itemsService.itemDetails();

      promise.then(function (data) {
          $scope.itemDetails = data;
          // console.log(data);
      });
      $scope.select = function(item) {
        $scope.selected = item;
      }
      $scope.selected = {};

      //This function will be called in sidenav.html in the directives
      
      $scope.redirectToPage = function(json_path,api_path,title,method,descriptionUrl,describe,model,urlpath)
      {


        actionService.title=title;
        actionService.method = method;
        actionService.jsonPath = json_path;
        actionService.api_path =api_path;
        actionService.descriptionUrl = descriptionUrl;
        actionService.describe = describe;
        actionService.model = model;
        actionService.urlpath = urlpath;

        // document.location="#base-product";


        localStorage.setItem('descriptionUrl',descriptionUrl);
        localStorage.setItem('model',model);
        localStorage.setItem('json_path',json_path);


        location.href = "#base-product";
      

      }


      $scope.getlist = '';
    
      $scope.searchString = function () {
        console.log("tyyyyyyy");
            
            return function (item) {

                var string = JSON.stringify(item).toLowerCase();
                var words = $scope.getlist.toLowerCase();

                if (words) {
                    var filterBy = words.split(/\s+/);

                    if (!filterBy.length) {
                        return true;
                    }
                } else {
                    return true;
                }
                
                return filterBy.every(function (word) {
                    var exists = string.indexOf(word);

                    if(exists !== -1){
                        return true;
                    }
                });
            };
        };

     
  }]);