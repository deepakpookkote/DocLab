  
App.controller("BaseProductController",['$scope', '$sce','$route', '$routeParams','actionService','$templateCache',
                function($scope, $sce,$route, $routeParams,actionService,$templateCache) {


      $scope.mytitle=actionService.title;//Calling the function from the action service
      $scope.method=actionService.method;//Calling the function from the action service
      $scope.json_path=actionService.jsonPath;
      $scope.api_path = actionService.api_path;
      $scope.descriptionUrl =actionService.descriptionUrl;
      $scope.describe = actionService.describe;
      $scope.model = actionService.model;
      $scope.urlpath = actionService.urlpath;





    /*  $scope.value="value";*/
      if($scope.descriptionUrl == undefined ||
        $scope.descriptionUrl == 'undefined')
      {
          $scope.descriptionUrl = localStorage.getItem('descriptionUrl');
      }
      $.get("./api-data/"+$scope.descriptionUrl, function(info){
   
        $scope.value = info;
       /* console.log($scope.value);*/
        document.getElementById('valueId').innerHTML = $scope.value;
      });

       if($scope.model == undefined ||
        $scope.model == 'undefined')
      {
          $scope.model = localStorage.getItem('model');
      }
      $.get("./api-data/"+$scope.model, function(model){
   
        $scope.value = model;

        /*console.log($scope.value);*/
        document.getElementById('modelId').innerHTML = $scope.value;
      });


     /* console.log($scope.json_path);
      console.log($scope.api_path);*/

    /*  console.log(" Base controller is working "); */

      $scope.api_url;
      $scope.api_token;
      $scope.savedApiUrl = '';
      $scope.savedApiToken = '';

      $scope.submit = function() {
        localStorage.setItem('api_url', $scope.api_url);
        localStorage.setItem('api_token', $scope.api_token);

        var savedApiUrl = localStorage.getItem('api_url');
        var savedApiToken = localStorage.getItem('api_token');
        $scope.savedApiUrl = savedApiUrl;
        $scope.savedApiToken = savedApiToken;
     /*   console.log($scope.savedApiUrl);
        console.log($scope.savedApiToken)*/
      }


    $scope.retrive =function() {

       try{
            var savedApiUrl = localStorage.api_url;//getItem('api_url');
            var savedApiToken = localStorage.getItem('api_token');
            // savedApiUrl = savedApiUrl;
            $scope.savedApiToken = savedApiToken;
            
            if(typeof savedApiUrl == undefined)
            {
                console.log("api token is not defined");
            }
            else
            {
             /*console.log("api token :"+savedApiToken);*/
             }

      }
      catch(e)
      {
          console.log(e);
      }

    }


  $scope.retrive();
  $scope.token_check();



  /*
    console.log(localStorage.jsonPath);
    console.log(localStorage.api_path);
  */
  if($scope.json_path == undefined ||
        $scope.json_path == 'undefined')
      {
          $scope.json_path = localStorage.getItem('json_path');
      }

  $.getJSON("./api-data/"+$scope.json_path, function(json){
        $scope.data = json;
       /*  console.log('JSON--',$scope.data);*/
       $scope.processdata();
  });  

  $scope.processdata = function () {

      /*var components={

        'data': $scope.data

        };*/ var components =$scope.data

     /* console.log(components);*/

      var result='';

      var mylogic=function(obj,source){ //console.log(obj,source);

          //console.log(typeof components[obj] );
           if(typeof source[obj]=='string'){ 
             var val=[];
              if(source[obj]!=""){ 

            val =JSON.parse(   (  source[obj].replace(/'/g,'"') ) );

              return  obj +' <input id="'+val.id+'" name="'+val.name+'" type="'+val.type+'" value="'+val.value+'" placeholder="'+val.placeholder+'" type=""'+val.required+'  ><br> <code>Notes: '+val.description+'</code> <div style="border-top:1px solid rgba(236, 239, 241, 0.9);width:100%; height:5px;"></div>';
             }else{
              return  obj +' <input placeholder="'+obj+'" type="text" > <hr>';
             }
           }else{   //console.log( components[obj] );
             var subObj=source[obj]; var tempObj=[];
              

              for(item in subObj ){
               //console.log(item,'--',subObj);

               tempObj.push("&nbsp;"+obj+'&#10159;' +mylogic(item,subObj) );
            }
             return tempObj;
           }
      }

      var methodType=$scope.method;
      // console.log(methodType);
      if(methodType==""||methodType==undefined){
        methodType="post";
      } 


      result+='<form id="myform" action="'+localStorage.api_url+''
                +$scope.api_path+'" method="'+methodType+'">';
               /* console.log($scope.method);*/

      for(component in components){  
        // console.log(mylogic(component,components));
        result+= mylogic(component,components);
         // console.log('Component',components[component]);
      }

        //console.log(result);
        //Finally generating Submit button
      result+="<div> <button class='btn btn-primary' style='background:#546E7A'>Submit</button> </div></form>";

      var res=document.getElementById('result');
      result=result.replace(/,&nbsp;/g,'');
      res.innerHTML=result;  
  }
 
  /*using javascript the popup was not working so added the jquery code for submitting the form in pop-up window*/

  $(document).ready(function() { 
      
      $('#myform').submit(function() {
          window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
          this.target = 'formpopup';
      });


      $('#input_token').val($scope.savedApiToken);
      $('#input_token').prop("readonly",true);


      /*$(".schema").click(function() {
      $("#overlay").css("visibility", "visible");
      });*/



  });   

}]);

  