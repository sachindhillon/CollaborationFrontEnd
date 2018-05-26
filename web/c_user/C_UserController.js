myApp.controller("c_userController",function($scope,$http,$rootScope)
		{
	$scope.User={username:'',user_email:'',user_password:'',mobile:'',details:'',message:''}
	$scope.register=function()
	{
		alert("hello");
		console.log("emailid"+$scope.User.user_email);
		console.log("user_password"+$scope.User.user_password);
		$http.post('http://localhost:8081/CollaborationRestService/registerUser',$scope.User)
		.then(function(response)
				{
			
			console.log("registration successfully");
			console.log(response.statusText);
			
				});
	}
	
	$scope.login=function()
	{
$http.post('http://localhost:8081/CollaborationRestService/validate',$scope.User)
		.then(function(response)
				{
			$scope.User=response.data;
			$rootScope=$scope.User;
			console.log("login Successful"+$scope.User.message);
			console.log(response.statusText);
				});
	}
	});