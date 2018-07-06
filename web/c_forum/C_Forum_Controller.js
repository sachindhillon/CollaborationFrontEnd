myApp.controller("c_forum_Controller",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.forum={forum_id:'',login_name:'',forum_name:'',forum_description:'',forum_created_date:'',
	forum_likes:'',forum_unlikes:'',forum_status:''}
	$scope.listForumData;
	$scope.listApprovedData;
	
	$scope.insertForum=function()
	{
		alert("inserting forum data");
		alert($scope.forum.forum_name);
		$http.post('http://localhost:8081/CollaborationRestService/c_forum/add',$scope.forum)
		.then(function(response)
				{
			alert("statustext"+response.statusText);
			$location.path("/myForum");
				})
		
	}
	
	
	$scope.incrementLikes=function(forum_id)
	{
console.log("increment forum like");
$http.get('http://localhost:8081/CollaborationRestService/c_forum/incrementLike/'+forum_id)
.then(function(response)
		{
	$route.reload();
		});
	
	}
	
	
	$scope.forumDiscussion=function(forum_id)
	{
		$rootScope.forum_id=forum_id;
		console.log(forum_id);
		$location.path("/forumDiscussion");
	}
	
	$scope.deleteMyForum=function(forum_id)
	{
console.log("going to delete forum");
$http.get('http://localhost:8081/CollaborationRestService/c_forum/deleteForum/'+forum_id)
.then(function(response)
		{
	$route.reload();
		});
	
	}
	
	$scope.approveForum=function(forum_id)
	{
		console.log("approve forum");
		$http.get('http://localhost:8081/CollaborationRestService/c_forum/approveForum/'+forum_id)
		.then(function(response)
				{
			$route.reload();
				});
	}
	
	
	$scope.rejectForum=function(forum_id)
	{
		console.log("reject forum");
		$http.get('http://localhost:8081/CollaborationRestService/c_forum/rejectForum/'+forum_id)
		.then(function(response)
				{
			$route.reload();
				});
	}
	
	
	function listOfForums()
	{
		console.log("list of forums");
		$http.get('http://localhost:8081/CollaborationRestService/c_forum/list')
		.then(function(response)
				{
			console.log(response.data);
			$scope.listForumData=response.data;
				});
	}
	
	function showForumList()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_forum/approvedForumList')
		.then(function(response)
				{
			$scope.listApprovedData=response.data;
			console.log($scope.listApprovedData);
			$rootScope.forumData=$scope.listApprovedData;
				});
	}
	showForumList();
	listOfForums();
		});