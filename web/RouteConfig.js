var myApp=angular.module("myApp",['ngRoute','ngCookies'])
myApp.config(function($routeProvider)
		{
	alert("hello user welcome to site")
	
	$routeProvider
	
	.when("/",{templateUrl:"home.html"})
	.when("/login",{templateUrl:"c_user/login.html"})
	.when("/loginSuccess",{templateUrl:"home.html"})
	.when("/register",{templateUrl:"c_user/register.html"})
	.when("/contactus",{templateUrl:"contactus.html"})
	.when("/aboutus",{templateUrl:"aboutus.html"})
	.when("/blog",{templateUrl:"c_blog/blog.html"})
	.when("/showBlog",{templateUrl:"c_blog/showallblogs.html"})
	.when("/adminBlog",{templateUrl:"c_blog/adminblog.html"})
	.when("/myBlog",{templateUrl:"c_blog/myblog.html"})
	.when("/addforum",{templateUrl:"c_forum/forum.html"})
	.when("/showforum",{templateUrl:"c_forum/showforum.html"})
	.when("/adminforum",{templateUrl:"c_forum/adminforum.html"})
	.when("/myForum",{templateUrl:"c_forum/myforum.html"})
	.when("/forumDiscussion",{templateUrl:"c_forum/forumdiscussion.html"})
	.when("/blogComment",{templateUrl:"c_blog/blogcomment.html"})
	.when("/editProfile",{templateUrl:"c_user/profilepicture.html"})
	.when("/sendFriendRequest",{templateUrl:"c_friend/sendfriendrequest.html"})
	.when("/showFriends",{templateUrl:"c_friend/showfriends.html"})
	.when("/pendingFriends",{templateUrl:"c_friend/pendingfriends.html"})
	.when("/suggestedFriends",{templateUrl:"c_friend/suggestedfriends.html"})
	.when("/chat",{templateUrl:"c_chat/chatroom.html"})
	.when("/addjob",{templateUrl:"c_job/addjob.html"})
	.when("/listofjob",{templateUrl:"c_job/joblist.html"})
	.when("/appliedjobs",{templateUrl:"c_job/appliedjobs.html"})
	.when("/viewJob",{templateUrl:"c_job/viewjob.html"});
		
		});

	myApp.run(function($rootScope,$cookieStore)
			{
			console.log("m in run....");
			console.log($rootScope.currentUser);
			if($rootScope.currentUser==undefined)
				{
				$rootScope.currentUser=$cookieStore.get("UserData");
				}
			});