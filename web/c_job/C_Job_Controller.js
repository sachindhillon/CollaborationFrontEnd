myApp.controller("c_job_Controller",function($http,$scope,$rootScope,$location,$route)
		{
	$scope.job={ };
	$scope.jobs;
	$scope.applied;
	$scope.appliedUser={applied_date:'',emailid:'',jobApp_Id:'',jobApp_status:'',job_id:'',jobapp_title:'',login_name:'',message:'',reason:''};
	$scope.appUser;
	
	$scope.addjob=function()
	{
		alert("add job clicked");
		$http.post('http://localhost:8081/CollaborationRestService/c_job/saveJob',$scope.job)
		.then(function(response)
				
		{
			alert("job added successfully");
			$location.path("/listofjob");
			
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
	
	$scope.approveApplication=function(jobApp_Id)
	{
		console.log("approve forum");
		$http.put('http://localhost:8081/CollaborationRestService/c_job/approveApplication/'+jobApp_Id)
		.then(function(response)
				{
			$route.reload();
				});
	}
	
	
	$scope.rejectApplication=function(jobApp_Id)
	{
		console.log("reject forum");
		$http.put('http://localhost:8081/CollaborationRestService/c_job/rejectApplication/'+jobApp_Id)
		.then(function(response)
				{
			$route.reload();
				});
	}
	
	$scope.applyForJob=function(job_id)
	{
		alert("going to apply");
		$http.post('http://localhost:8081/CollaborationRestService/jobRegistration/'+job_id)
		.then(function(response)
				{
			alert("job applied successfully");
			$location.path("/listofjob");
			
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
			$scope.appUser=response.data;
			$rootScope.appusers=$scope.appUser;
			$rootScope.jobjob_id=job_id;
			console.log($rootScope.jobjob_id);
			$location.path("/appliedjobs");
				},function(response)
				{
					alert("no user applied yet");
				});
	}
	
	$scope.deleteJob = function(job_id)
	{
		$http.delete('http://localhost:8081/CollaborationRestService/deleteJob/'+job_id)
		.then(function(response)
				{
					alert("job delete succesfully");
					$location.path("/listofjob");
				},function(response)
				{
					alert("Some Users already Applied for this Job...So can't delete right now....");
					
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
	function jobApplications()
	{
		$http.get('http://localhost:8081/CollaborationRestService/c_job/applicationList')
		.then(function(response)
				{
			$scope.application=response.data;
			$rootScope.applications=$scope.application;
			console.log("list is coming..")
			
				});
	}
	jobApplications();
	
	
		});