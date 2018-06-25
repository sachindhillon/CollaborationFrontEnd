myApp.controller("c_blogComment_Controller",function($http,$scope,$rootScope,$location)
		{
	$scope.comment={blogComment_id:'',blog_id:'',comments:'',commented_date:'',login_name:''};
	$scope.allBlogCommentData;
	$scope.blogData;
	function listMyBlogComments()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_blogComment/list/'+$rootScope.blog_id)
		.then(function(response)
				{
			$rootScope.allBlogCommentData=response.data;
			$rootScope.blog_id=blog_id;
			$location.path("/c_blogComment");
				});
	}
	
	function myBlog()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/getBlog/'+$rootScope.blog_id)
		.then(function(response)
				{
			$scope.blogData=response.data;
				});
	}
	
	$scope.addComment=function()
	{
		alert("blog comment");
		console.log($scope.comment);
		$http.post('http://localhost:8081/CollaborationRestService/c_blog/addBlogComment',$scope.comment)
		.then(function(response){
			console.log("comment added successfully");
			console.log(response.statusText);
			$location.path("/showBlog");
		});
	}
	
	myBlog();
	listMyBlogComments();
		});