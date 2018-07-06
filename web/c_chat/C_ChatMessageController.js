myApp.controller("c_chatMessageController",function($scope,$rootScope,chatService)
		{
	
		
	$scope.messages=[];
	$scope.message="";
	$scope.max=140;
	
	$scope.addMessage=function()
	{
		chatService.send($rootScope.currentUser.login_name+":"+$scope.message);
		$scope.message="";
	},function()
	{
		alert("please login to chat");
	};
	
	chatService.receive().then(null,null,function(message)
	{
		$scope.messages.push(message);
	});
});