myApp.controller("c_job_Controller",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.job={ };
	$scope.jobs;
	$scope.applied;
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
	
	$scope.viewJob=function(job_id)
	{
		console.log("in view job");
		$http.get('http://localhost:8081/CollaborationRestService/getJob/'+ job_id)
		.then(function(response)
				{
			$scope.specific_job=response.data;
			$rootScope.view_job=$scope.specific_job;
			console.log("viewing job");
			$location.path("/viewJob");
			
				});
	}
	
	
	$scope.applyForJob=function(job_id)
	{
		alert("going to apply");
		$http.post('http://localhost:8081/CollaborationRestService/jobRegistration/'+job_id)
		.then(function(response)
				{
			alert("job applied successfully");
			
				},function(response)
				{
					$scope.applied=response.data;
					alert("you already applied this job");
				});
	}
	
	$scope.viewAppliedUser=function(job_id)
	{
		alert("applied user");
		$http.get('http://localhost:8081/CollaborationRestService/c_job/appliedUsers/'+job_id)
		.then(function(response)
				{
			alert("applied users are coming");
			console.log("list is coming..");
			$scope.appliedUser=response.data;
			$rootScope.appliedUsers=$scope.appliedUser;
			$location.path("/appliedjobs");
				});
	}
	
	function listofjob()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_job/list')
		.then(function(response)
				{
			$scope.jobs=response.data;
			$rootScope.alljobs=$scope.jobs;
			console.log("list is coming..")
			
				});
	}
	listofjob();
		});