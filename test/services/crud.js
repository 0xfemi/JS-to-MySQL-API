angular.module('crudService', [])

	.factory('Novett', ['$http',function($http) {
		return {
			get : function(getData) {
				return $http({method : 'GET', 
				url : 'http://localhost:8000/getQuery?' + getData
			})}
			,
			post : function(postData) {		
				return $http({
					 method : 'POST', 
					 url : 'http://localhost:8000/postQuery', 
					 data: $.param(postData), 
					 headers:{'Content-Type': 'application/x-www-form-urlencoded'}
				})},

			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			getPart : function(id) {
				///console.log(6)
				return $http.get('/api/todos/' + id);
			},
			
		}
	}]);