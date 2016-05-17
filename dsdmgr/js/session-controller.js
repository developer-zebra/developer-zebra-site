
angular.module('sessionController', [])
.controller('sessionCtrl', function($scope, $state,$http,$filter, $firebaseArray,toastr,mx) {

$scope.dsds = [];
$scope.selectedDSD = null;
$scope.ctr = {
	dsds: 0,
	dsds_processed: 0
}
$scope.requires = {};

	$.getJSON("/dsds", function(result) {
		$scope.ctr.dsds = result.length;
	   	$.each(result, function(i, item) {
	      	console.log(item);
	      	
			$.get(item, function(d){
				var dsd = {};
		        var dsdname = "";

		        //get csp name
		        dsdname = $(d).find("characteristic[type]").first().attr("type");
		        console.log(dsdname);

		        dsd.name = dsdname.toLowerCase() ;
		        dsd.parms = [];
		        
		        $(d).find("parm").each(function(){
		            var parm_xml = $(this)[0];
		            // console.log(parm) 
		            var parm = {

		            };
		            var parm_prompt = $(parm_xml).attr('promptref');

		            parm.name = $(parm_xml).attr('name');
		            parm.label = $(d).find("prompt[name='"+parm.name+"']").first().attr('value');
		            var list = $(parm_xml).attr('listref');
		            if(list){
		            	parm.listitems=[];
		            	$(d).find("list[name='"+list+"'] > item").each(function(){
				            var listitem_xml = $(this)[0];
				            // console.log(listitem) 
				            var listitem = {}
				            $.each(listitem_xml.attributes, function(val, attrib){
							    listitem[attrib.name] = attrib.value;
				    			
							})
							parm.listitems.push(listitem);
						
						})

		            }
		            dsd.parms.push(parm);
					
				});

		        $scope.ctr.dsds_processed +=1;
		        $scope.dsds.push(dsd);

		        if($scope.ctr.dsds_processed == $scope.ctr.dsds){
		        	console.log("done loading DSDs");
			        console.log($scope.dsds);
			        $scope.load_extras()

		        }

			});

		});
	});

	$scope.load_extras = function(){



		$.each($scope.dsds, function(i, dsd) {	
			
			$.get("dsds/"+dsd.name+".extra", function(d){
				var dsd_extra = JSON.parse(d);
				$.each(dsd.parms,function(i,dsd_parm){
					$.each(dsd_extra.parms,function(i,dsd_extra_parm){
						if(dsd_parm.name == dsd_extra_parm.name){
							dsd_parm.requires = dsd_extra_parm.requires;
							if(dsd_extra_parm.listitems){
								$.each(dsd_extra_parm.listitems,function(i,listitem_extra){
									$.each(dsd_parm.listitems,function(i,listitem_parm){
										if(listitem_parm.code == listitem_extra.code){
											listitem_parm.requires = listitem_extra.requires;
										}
									})
								})
							}
							// $scope.add_requires(dsd.name,dsd_parm.name,dsd_extra_parm.requires)
						}
					})
				})

			})

		})	
	}


	$scope.setRequires = function(){
		for (var i = 0; i < $scope.selectedDSD.parms.length; i++) {
			if($scope.selectedDSD.parms[i].listitems){
				for (var l = 0; l < $scope.selectedDSD.parms[i].listitems.length; l++) {
					if($scope.selectedDSD.parms[i].listitems[l].selected){
						$scope.selectedDSD.parms[i].listitems[l].requires = $scope.requires;
					}
				};
			}
			else{
				if($scope.selectedDSD.parms[i].selected){
					$scope.selectedDSD.parms[i].requires = $scope.requires;
				}
			}
		};

		$http.post("/dsd", angular.toJson($scope.selectedDSD))
		.then(function successCallback(data) {
				console.log("Saved")
			  }, function errorCallback(e) {
			  	console.log("Error")
		})

	}

	$scope.selectMissing = function(){
		angular.forEach($scope.selectedDSD.parms, function(parm, key){
	      if(parm.listitems){
	      	angular.forEach(parm.listitems, function(listitem, key){
	        	if(listitem.requires){

	        	}
	        	else{
	        		listitem.selected = true;
	        	}
	     	})
	      }
	      else{
	      	if(parm.requires){

	      	}
	      	else{
	      		parm.selected = true;
	      	}
	      }
	   	});
	}

});
