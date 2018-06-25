myApp.controller("c_job_Controller",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.job={ };
	
	$scope.addjob=function()
	{
		alert("add job clicked");
		$http.post('http://localhost:8081/CollaborationRestService/c_job/saveJob',$scope.job)
		.then(function(response)
				
		{
			alert("job added successfully");
			$location.path("/alljobsadmin");
			
		});
	}
		});