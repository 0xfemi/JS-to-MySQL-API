angular.module('novettController', [])

	.controller('mainController', ['$scope','$http','Novett', function($scope, $http, Novett) {
		
		$scope.postAction = function() {
		
                $scope.loading = true;
                ///declare API params
                $db_host = 'www.vanizon.com';
                $db_portnumber = 3306;
                $db_name = 'vanizonc_dbase';
                $db_username = 'vanizonc_user';
                $db_password = '^Zuw2_o]J}x+';
                $db_query_statement= 'SELECT * FROM users';

                var formData2= {'db_password': $db_password,'db_portnumber': $db_portnumber,'db_name': $db_name,
                'db_host': $db_host,'db_username': $db_username, 'db_query_statement': $db_query_statement };
              
				Novett.post(formData2)
					
					.success(function(data) {
						$scope.loading = false;
						$scope.novett_post_output = data; 
                        console.log(data);
                        
					}).error(function(data) {
						$scope.loading = false;
						
						$scope.novett_post_output = data; 
						console.log(data);
					});
			//}
		};

        $scope.getAction = function() {
            
                    $scope.loading = true;
                   ///declare API params
                $db_host = 'www.vanizon.com';
                $db_portnumber = 3306;
                $db_name = 'vanizonc_dbase';
                $db_username = 'vanizonc_user';
                $db_password = '^Zuw2_o]J}x+';
                $db_query_statement= 'SELECT * FROM users';

                $formData2= 'db_portnumber='+$db_portnumber+'&db_name='+$db_name +'&db_host='+$db_host+
                '&db_username='+$db_username+'&db_query_statement='+$db_query_statement+'&db_password='+$db_password;
              
                  
                    Novett.get($formData2)
                        
                        .success(function(data) {
                            $scope.loading = false;
                            $scope.novett_get_output = data; 
                            console.log(data);
                            
                        }).error(function(data) {
                            $scope.loading = false;
                            
                            $scope.novett_get_output = data; 
                            console.log(data);
                        });
                //}
            };


	}]);
