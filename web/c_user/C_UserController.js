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
			alert(" registered successfully");
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
	function listofjob()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_job/list')
		.then(function(response)
				{
			$scope.jobs=response.data;
			$rootScope.alljobs=$scope.jobs;
			console.log("list is coming..")
			
				});
	}
	listofjob();
	
	function listOfBlogs()
	{
		console.log("list of blogs");
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/approvedBlogList')
		.then(function(response)
				{
			console.log(response.data);
			$scope.allblogdata=response.data;
			$rootScope.blogss=$scope.allblogdata;
				});
	}
	listOfBlogs();
	
	function listOfUsers()
	{
		console.log("list of users");
		$http.get('http://localhost:8081/CollaborationRestService/c_user/list')
		.then(function(response)
				{
			console.log(response.data);
			$scope.allUsers=response.data;
			$rootScope.userlist=$scope.allUsers;
				});
	}
	listOfUsers();
	
		
	$scope.logout=function()
	{
		alert("Logged out Successfully");
		delete $rootScope.currentUser;
		$location.path("/login");
	
	}
		});