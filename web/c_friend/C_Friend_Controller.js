myApp.controller("c_friendController",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.friend={friend_id:'',login_name:'',friend_name:'',status:''}
	$scope.User={username:'', login_name:'',user_email:'',user_password:'',mobile:'',details:'',role:''}
	$scope.pendingList;
	$scope.myfriendlist;
	$scope.suggestedFriends;
	
	$scope.accept=function(friend_id)
	{
		alert("accept friend request clicked");
		$http.post('http://localhost:8081/CollaborationRestService/acceptFriendRequest/'+friend_id)
		.then(function(response)
				{
			console.log("entering the accept friend request function");
			$location.path("/showFriends");
				});
	}
	
	$scope.unfriend=function(friend_id)
	{
		alert("unfriend clicked");
		$http.post('http://localhost:8081/CollaborationRestService/deleteFriendRequest/'+friend_id)
		.then(function(response)
				{
			console.log("entering the unfriend function");
			$route.reload();
				});
	}
	
	$scope.sendRequest=function(login_name)
	{
		$http.post('http://localhost:8081/CollaborationRestService/sendFriendRequest/'+login_name)
		.then(function(response)
				{
					alert('friend request sent');
					$route.reload();
				});
	}
	
	$scope.reject=function(friend_id)
	{
		alert("reject friend clicked");
		$http.post('http://localhost:8081/CollaborationRestService/deleteFriendRequest/'+friend_id)
		.then(function(response)
				{
			console.log("entering the delete friend request function");
			$route.reload();
				});
	}
	function showFriendsList()
	{
		console.log("i mm in the show friends list");
		$http.get('http://localhost:8081/CollaborationRestService/userFriendList')
		.then(function(response)
				{
		//	alert("friends list is coming");
			$scope.myfriendlist=response.data;
			$rootScope.myFriend=$scope.myfriendlist;
			console.log($scope.myfriendlist);
			
				});
	}
	showFriendsList();
	function pendingFriendsList()
	{
		console.log("i mm in the pending friends list");
		$http.get('http://localhost:8081/CollaborationRestService/userPendingFriendRequestList')
		.then(function(response)
				{
			//alert("pending friends list is coming");
			$scope.pendingList=response.data;
			$rootScope.pending=$scope.pendingList
			console.log($scope.pendingList);
			
				});
	}
	pendingFriendsList();
	function suggestedFriendsList()
	{
		console.log("i mm in the suggested friends list");
		$http.get('http://localhost:8081/CollaborationRestService/userSuggestedFriendList')
		.then(function(response)
				{
			//alert("suggested friends list is coming");
			$scope.User=response.data;
		$rootScope.suggested=$scope.User;
			console.log($scope.User);
			
				});
	}
	suggestedFriendsList();
	
	
		});