
  App.controller('SidenavController', ['$scope', 'itemsService', function($scope, itemsService,
    $location,$window,$localStorage){

    console.log("service is working");
    
    itemsService.activePage.path="aaaa";

    $scope.path = itemsService.activePage.path;

      promise.then(function (data) {
          $scope.itemDetails = data;
        /*  console.log(data);*/
      });
      $scope.select = function(item) {
        $scope.selected = item;
      }
      $scope.selected = {};

      $scope.redirectToPage = function(json_path,api_path)
      {
    
        /*localStorage.setItem('path',json_path);
        localStorage.setItem('api_path',api_path);

        location.href = "#base-product";*/
         $scope.jsonPath = itemsService.itemDetails();
         $scope.pathUrl =itemsService.itemDetails();

       /*  console.log($scope.jsonPath);*/


      }

  }]);




App.factory('itemsService', ['$http', function($http){
  var itemsService ={
    itemDetails: function() {
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

App.service('URLService',function(){

    return {
    
        'activePage':

             api_path:"",
             json_path:"",
             title:""









   /*var sharedData={
    api_path:"",
    json_path:"",
    title:""
   };*/

  /* return {
    getSharedData:function()
    {
        return sharedData;
    },
    setSharedData: function(api_path, json_path, title)
    {
        sharedData.api_path = api_path;
        sharedData.json_path = json_path;
        sharedData.title = title;
    }
   };*/

});


/*App.service('itemsService',function(){


    
          this.jsonPath ='';
          this.pathUrl =''; 
          this.header ='';


});*/


/*App.controller('BaseProductController', ['$scope', 'itemsService', function($scope, itemsService){

  console.log("Loading json array name is working fine and tested in console")
  var promise = itemsService.itemDetails();

    promise.then(function (data) {
        $scope.itemDetails = data;
        console.log(data);
    });
    $scope.select = function(item) {
      $scope.selected = item;
    }
    $scope.selected = {};


    $scope.redirectToPage1 = function() 
      {

                alert("test works");  

        console.log("service test works");



      }

}]);*/


  App.controller('SidenavController', ['$scope', 'itemsService', 'URLService', function($scope, itemsService,
    $location,$window,$localStorage, URLService){

    console.log("service is working");

    var promise = itemsService.itemDetails();

      promise.then(function (data) {
          $scope.itemDetails = data;
        /*  console.log(data);*/
      });
      $scope.select = function(item) {
        $scope.selected = item;
      }
      $scope.selected = {};

      $scope.redirectToPage = function(json_path,api_path)
      {


        URLService.setSharedData(api_path,json_path,"title");
        localStorage.setItem('path',json_path);
        localStorage.setItem('api_path',api_path);

        location.href = "#base-product";
         /*$scope.jsonPath = itemsService.itemDetails();
         $scope.pathUrl =itemsService.itemDetails();*/

       /*  console.log($scope.jsonPath);*/


      }

  }]);


App.service('getURLservice',function(){

    return{

       'activePage':{
          'jsonPath':'test',
          'pathUrl':'test1', 
          'header':''
       }

    }

});



//code backup on 29-05-2017
/*
  var postType="";

  result+='<form method="'+postType!=''?postType:'post'+'" id="myform" action="http://128.199.209.142/green-building/dev-1/api/'
                +localStorage.api_path+'"  method="post" >';

*/