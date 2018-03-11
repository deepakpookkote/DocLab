	
App.config(['$routeProvider',function($routeProvider, $routeParams) {

			$routeProvider

			/*.when('/features', {
				templateUrl : 'templates/Features.html',
						
			})*/

			// route for the login page
			.when('/docs', {
				templateUrl : 'templates/Docs.html',
				controller  : 'DocsController'
			})

			// route for the dashboard page
			/*.when('/events', {
				templateUrl : 'templates/Events.html',
				controller  : 'EventsController'
			})*/

			.when('/base-product', {
				templateUrl :'templates/base_product.html',
				controller  :'BaseProductController'
				})			

			.when('/guide', {
				templateUrl :'#templates/guide.html',
				controller  :'guideController'
			})

			.when('/key', {	
				templateUrl :'templates/authenticate.html',
				controller  :'KeyController'
			})

			// .when('/', {
   //    			templateUrl: 'templates/Docs.html',
   //   		 	controller: 'DocsController'
   //  		})

			 .otherwise({
       		 redirectTo: '/docs'
				
			});

}]);


