/*
	Map Services
*/

app
	.factory('HomeService', function($http, $q){

		var apiPostmon = "http://api.postmon.com.br/v1/cep/";

		var getAddress = function(address){
			
			if(address == "" || address == undefined){				
				return $q.reject();
			}else{

				return $q(function(resolve, reject){
					$http.get(apiPostmon + address)
						 .then(
							 function(result){
								if(result.data){
									resolve(result.data);
								}else{
									reject(reject.data);
								}
							 },
							 function(err){
							 	reject(err);
							 }
						 )
				});
			}
			
		}

		return {
			getAddress: getAddress
		}
	})