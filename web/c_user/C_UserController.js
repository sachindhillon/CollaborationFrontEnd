myApp.controller("c_userController",function($scope,$http,$rootScope,$location,$cookieStore)
		{
	$scope.User={username:'',user_email:'',login_name:'',user_password:'',mobile:'',details:'',message:'',role:''}
	$scope.register=function()
	{
		console.log("emailid"+$scope.User.user_email);
		console.log("user_password"+$scope.User.user_password);
		$http.post('http://localhost:8081/CollaborationRestService/registerUser',$scope.User)
		.then(function(response)
				{
			
			console.log("registration successfully");
			console.log(response.statusText);
			$location.path("/login");
				},function(response)
				{
					alert("user already registered");
				});
	}
	
	$scope.login=function()
	{
$http.post('http://localhost:8081/CollaborationRestService/validate',$scope.User)
		.then(function(response)
				{
			$scope.User=response.data;
			$rootScope.currentUser=$scope.User;
			console.log($scope.User.message);
			$cookieStore.put('UserData', response.data);
			console.log(response.statusText);
			$location.path("/loginSuccess");
				},function(response)
				{
					alert("incorrect password");
					
				});
	}
		
	$scope.logout=function()
	{
		alert("Logged out Successfully");
		delete $rootScope.currentUser;
		$location.path("/login");
		$window.location.reload();
	}
		});