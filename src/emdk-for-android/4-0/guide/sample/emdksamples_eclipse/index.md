---
title: Using the EMDK Samples with Eclipse
---

##Loading the Sample Application
Sample Applications are installed along with the EMDK and can be found in your start bar. 

1. Select Start 
2. Select "EMDK for Android v2.0"
3. Select "Samples"

	  ![img](/img/sample/1.jpg)
4. Your browser should open with a list of included samples

	  ![img](/img/sample/2.jpg)
5. Select "ADTSamples" from the web page   

	  ![img](/img/sample/3.jpg)
6. Copy the path to the directory on your computer   
	  ![img](/img/sample/4.jpg)


7. In Eclipse select From the tool bar "File" -> "Import"
8.  Select Android "Existing Android Code Into Workspace"

    ![img](/img/sample/5.jpg)
9. Browse to the samples directory from the web page and select a sample for example"ProfileDataCaptureSample1"

    ![img](/img/sample/6.jpg)
10. Select Finish

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



