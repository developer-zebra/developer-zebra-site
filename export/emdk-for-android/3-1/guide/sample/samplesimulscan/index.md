---
title: SimulScan API Sample#
---
#SimulScan API Sample#

##Overview##
This sample application will show how the Simulscan API's can be used to capture multiple types of data from forms, boxes and the like.

##Prerequisites
[See Using the EMDK Samples](../guide/sample/emdksamples)

You will also need:

* A SimulScan licensed device
* A Simulscan template
* A printed copy of the form used to create the template

Follow the template generation and device licensing sections of the [SimulScan API tutorial](../guide/tutorial/tutSimulScanAPI)

##Loading the Sample Application
[See Using the EMDK Samples](../guide/sample/emdksamples)

##Deploying The Sample Application
[Using the EMDK Samples](../guide/sample/emdksamples)

##Using This Sample

1. Place a template on the sdcard of you SimulScan licensed device.

		:::
		adb push myTemplate.xml /sdcard/simulscan/templates/
	

2. Launch The SimulScan sample application
	
	The Simulscan sample app will find the templates you place on the devices sdcard, and populate the "Set Template" option list.  Select the template you wish to use from that list.
	![img](images/samples/simulscanSample1.png) 


3. Press the "Read" button, and follow the on screen instructions. The sample app will extract the fields defined in the template. If the "Display Results View" option is checked, a list of results will be displayed for you to review.

	![img](images/samples/simulscanSample2.png)  ![img](images/samples/simulscanSample3.png)   


4. Press the "Accept" button. The sample app will then display a screen showing how long simulscan took to capture and decode the template fields. Press the devices "Back" hardware button to return to the main screen.

	![img](images/samples/simulscanSample4.png) 


