myApp.controller("c_forumDiscussion_Controller",function($http,$scope,$rootScope,$location)
		{
	$scope.discussion={discussion_id:'',forum_id:'',discussion:'',discussion_date:'',login_name:''};
	
	$scope.forumData;
	function listMyForumDiscussions()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_forum_discussion/list/'+$rootScope.forum_id)
		.then(function(response)
				{
			$rootScope.allForumDiscussionData=response.data;
			$rootScope.forum_id=forum_id;
			$location.path("/showforum");
				});
	}
	
	function myForum()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_forum/getForum/'+$rootScope.forum_id)
		.then(function(response)
				{
			$scope.forumData=response.data;
				});
	}
	
	$scope.addDiscussion=function()
	{
		alert("forum discussion");
		console.log($scope.discussion);
		$http.post('http://localhost:8081/CollaborationRestService/c_forum/addForumDiscussion',$scope.discussion)
		.then(function(response){
			console.log("discussion added successfully");
			console.log(response.statusText);
			$location.path("/showforum");
		});
	}
	
	myForum();
	listMyForumDiscussions();
		});