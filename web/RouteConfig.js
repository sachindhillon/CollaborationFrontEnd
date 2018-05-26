var myApp=angular.module("myApp",["ngRoute"]);
myApp.config(function($routeProvider)
		{
	alert("i am route")
	$routeProvider.when("/",{templateUrl:"/index.html"})
	.when("/login",{templateUrl:"c_user/login.html"})
	.when("/register",{templateUrl:"c_user/register.html"});
	
		});