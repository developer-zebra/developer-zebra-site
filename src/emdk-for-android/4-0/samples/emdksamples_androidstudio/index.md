---
title: Using the EMDK Samples with Android Studio
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

7. In the Android Studio Quick Start pane, select **Import project(Eclipse ADT,Gradle,etc.)**
  ![img](/img/sample/as_import_samples_1.png)

8. Paste the path copied from step 6, into the import dialog, and click OK.
  ![img](/img/sample/as_import_samples_2.png)

9. Accept the default options on the following six dialogs by clicking **Next**, then select **Finish** on the last dialog
  ![img](/img/sample/as_import_samples_9.png)

10. When the projects are imported, the run configuration for each App is defaulted to run in the android emulator. Lets change that by clicking on the run configuration drop down and select **Edit Configurations**. 
  ![img](/img/sample/as_import_samples_12.png)
11. Select the configuration you want to edit in the left pane, select the **USB device** radio button under target device, and then click **OK**
  ![img](/img/sample/as_import_samples_13.png)


  

##Deploying a Sample Application

1. Select the project you want to deploy from the run configuration drop down, then press the green play button.
![img](/img/sample/as_import_samples_11.png)

 
 Android studio will push the application to your device via USB and start the main activity.

 ![img](/img/sample/BarcodeSample1_screen.png)


