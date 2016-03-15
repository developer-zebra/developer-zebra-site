---
title: Using the EMDK Samples with Eclipse
layout: sample.html
product: EMDK For Android
productversion: '2.3'
---

##Loading the Sample Application

1. Choose a sample and click the **See Details** button.
    ![img](select_a_sample.png)
2. Now click the **Download** button and select **ADT Eclipse Project**
    ![img](download_a_sample.png)
3. Extract the downloaded project zip file and make note of the extracted sample's path. You will need to know where it exists on your file system in following steps.
	  
4. Now open Eclipse. Once the IDE has completely launched, select **Import** from the **File** menu.
5. Select **Android** then **Existing Android Code into Workspace** then **Next** in the **Import** dialog
6. Click the **Browse** button, and then browse to the path where you extracted the downloaded sample (from step #3)
7. Check the **Copy projects into workspace** checkbox.
8. Now click the **Finish** button.

When the import process is complete, the project load in the IDE, ready to deploy.

##Deploying a Sample Application

1. Select the project.  
2. Select "File -> Properties" or right click on the project and select "Properties".  
    ![img](/img/setup/image033.jpg)   
    ![img](/img/setup/image035.jpg)   
3.    Click "Android" from the left pane.  
    ![img](/img/setup/image037.jpg) 
4. Select the "EMDK" target name from the list of Project Build Targets for the API version you require.  
    ![img](/img/setup/image039.jpg)  

    >Note:  
    >If an "EMDK..." target name is not on the list of Build Targets, please confirm you have installed Android API 16 SDK Platform.

5. Click "Apply" and "OK".  
6. Attach an EMDK supported Android device to your computer in USB debug mode. 

	>NOTE: The device needs the EMDK runtime installed.
7. From the Package Explorer right click on the select the sample application 
8. Right click on the project and select "Run As" -> "Android Application"

	![img](/img/sample/7.jpg)
9. Select your Android device and click "Okay". 
    
    ![img](/img/sample/8.jpg)














