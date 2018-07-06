myApp.controller("c_blogController",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.Blog={blog_id:'',blog_title:'',login_name:'',blog_description:'',blog_likes:'',blog_status:''}
	
	$scope.allblogdata;
	$scope.myBlogs;
	
	
	$scope.addBlog=function()
	{
		alert("blog");
		console.log("blog_title"+$scope.Blog.blog_title);
		console.log("blog_description"+$scope.Blog.blog_description);
		$http.post('http://localhost:8081/CollaborationRestService/c_blog/add',$scope.Blog)
		.then(function(response){
			console.log("blog added successfully");
			console.log(response.statusText);
			$location.path("/myBlog");
		});
	}
	
	$scope.incrementLikes=function(blog_id)
			{
		console.log("increment like");
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/incrementLike/'+blog_id)
		.then(function(response)
				{
			alert("incrementing like");
			$route.reload();
				});
			
			}
	
	$scope.deleteMyBlog=function(blog_id)
	{
console.log("going to delete blog");
$http.get('http://localhost:8081/CollaborationRestService/c_blog/deleteBlog/'+blog_id)
.then(function(response)
		{
	alert("going to delete blog");
	$location.path("/myBlog");
		});
	
	}

	$scope.blogComment=function(blog_id)
	{
		$rootScope.blog_id=blog_id;
		console.log(blog_id);
		$location.path("/blogComment");
	}
	
	$scope.approve=function(blog_id)
	{
		console.log("approve blog");
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/approveBlog/'+blog_id)
		.then(function(response)
				{
			$route.reload();
				});
	}
	
	
	$scope.reject=function(blog_id)
	{
		console.log("reject blog");
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/rejectBlog/'+blog_id)
		.then(function(response)
				{
			$route.reload();
				});
	}
	
	
	function myBlogs()
	{
		console.log("list of my blog");
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/approvedBlogList')
		.then(function(response)
				{
			console.log(response.data);
			$scope.myBlogs=response.data;
			$rootScope.BlogData=$scope.myBlogs;
				});
	}
	
	function listOfBlogs()
	{
		console.log("list of blogs");
		$http.get('http://localhost:8081/CollaborationRestService/c_blog/list')
		.then(function(response)
				{
			console.log(response.data);
			$scope.allblogdata=response.data;
				});
	}
	listOfBlogs();
	myBlogs();
		});