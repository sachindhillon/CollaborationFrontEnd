myApp.controller("c_chatMessageController",function($scope,$rootScope,chatService)
		{
	alert("hello i m in caht");
		
	$scope.messages=[];
	$scope.message="";
	$scope.max=140;
	
	$scope.addMessage=function()
	{
		chatService.send($rootScope.currentUser.login_name+":"+$scope.message);
		$scope.message="";
	};
	
	chatService.receive().then(null,null,function(message)
	{
		$scope.messages.push(message);
	});
});