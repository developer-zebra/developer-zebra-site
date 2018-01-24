---
title: Perform OS Update
layout: guide.html
product: Stagenow
productversion: '2.10'
---
Use this Wizard to perform an OS update on a device. This applies an update or a patch to the OS by downloading a zip file to the device or using an existing zip file on the device.  This Wizard also allows you to connect to a network. 

##Performing an OS Update

To create a Perform OS Update profile:

1. Select Create New Profile.

2. Select the MX version from the drop-down menu.

3. Select the Perform OS Update Wizard, and select Create.

    ![img](../../images/profiles/OSupdate_name.jpg)

4. Enter a name for the profile and select Start.

5. To choose to connect to this network using StageNow bar codes, select Yes, and then select Continue. See [Profiles / Connect Network](../../Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window. Select Continue when done.

    Note: This wizard includes a Deployment section. Deployment requires that the host computer and the device(s) are on the same network. 

6. If offered, select whether to connect to this network using the Rapid Deployment (RD) Client. Note that the RD Config section only appears if you turned on Legacy Mode in the [Settings](../../gettingstarted?Settings) screen. Select Yes for devices that don't include the StageNow Client. See [Rapid Deployment (RD) Client](../../stageclient?Rapid%20Deployment%20Client) for more information.

7. If you selected Yes, choose whether to set up Wi-Fi options and/or Wi-Fi profiles. See [Setting Types / Wifi mgr](../../csp/wifi).

    ![img](../../images/profiles/OSupdate_deploy1.jpg)

8. Choose a method for performing the OS update, and then select Continue.

    * Select No, I would like to Download the file to push an OS update zip file to the device.
    * Select Yes, I want to Apply the file to use an OS update zip file that already resides on the device.

9. If you selected No, I would like to Download the file: 

    a. Select whether or not to prevent Wi-Fi from turning off while downloading. See [Setting Types / Wi-Fi](../../csp/wifi) for information.

    ![img](../../images/profiles/OSupdate_sleep.jpg)

    b. Enter the information for the ZIP file. See [Setting Types / File](../../csp/file) for more information on the File Manager.

    ![img](../../images/profiles/OSupdate_setting.jpg)

    c. Select whether or not to allow Wi-Fi to turn off after downloading. See [Setting Types / Wi-Fi](../../csp/wifi) for information.

    ![img](../../images/profiles/OSupdate_sleep2.jpg)


10. Enter the information for the ZIP file. See [Setting Types / Power](../../csp/power) for more information on the Power Manager.

   ![img](../../images/profiles/OSupdate_sourcefile.jpg)

11. Select Continue to apply the update and proceed to the [Review window](../../stagingprofiles?Review).


##Performing an Incremental OS Update

An incremental update allows you to perform an OS update on multiple devices, and define update conditions. This feature is only supported by MX 6.0.

1. Select Create New Profile.

2. Select the MX 6.0 from the drop-down menu.

3. Select the Perform OS Update Wizard, and select Create.

4. Enter a name for the profile and select Start.

5. Select an option for your StageNow network from the drop-down menu:

   * The devices I wish to provision are currently not connected to a network. I will define a network with this profile that will be used for staging.

   * The devices I wish to provision are already connected to a network that will be used for staging. 

   * I wish to use the WiFi Hotspot feature which will automatically create a network for staging using this computer's network card. 

   ![img](../../images/profiles/OSUpdate_6_NetworkType.jpg)

   If you select the second or third option, skip to Step 7. 

6. To choose to connect to this network using StageNow bar codes, select Yes, and then select Continue. See [Profiles / Connect Network](../../Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window. Select Continue when done.

    Note: This wizard includes a Deployment section. Deployment requires that the host computer and the device(s) are on the same network. 

7. In the Deployment section, select Incremental Update from the update type drop-down menu.

  >Note:  
  >If you select Full OS Update, go to Step 8 of the previous procedure.


   ![img](../../images/profiles/OSUpdate_6_UpdateType.jpg)

8. Select Continue on the Begin window to define update conditions for the first device.

   ![img](../../images/profiles/OSUpdate_6_Incremental1.jpg)

9. Define the update conditions and select Continue.

   ![img](../../images/profiles/OSUpdate_6_Incremental2.jpg)

10. Select whether or not to prevent Wi-Fi from turning off while downloading. See [Setting Types / Wi-Fi](../../csp/wifi) for information.

    ![img](../../images/profiles/OSupdate_sleep.jpg)

11. Enter information for the first OS update file, and select Yes to add information for additional files.

    ![img](../../images/profiles/OSUpdate_6_DownloadFile.jpg)

12. When finished entering file information, select No, and then select Continue.

13. Select whether to download a UPL file, which is required to apply multiple OS update packages at a time. If you select Yes, see [Setting Types / File](../../csp/file) for more information on the File Manager.

14. Select whether to change the Wi-Fi sleep policy after download, and select Continue.

15. On the Apply Update screen, enter the information for the UPL/ZIP file, and select Continue. See [Setting Types / File](../../csp/file) for more information on the File Manager.

16. Select Continue on the End Device Update Conditions screen.

    ![img](../../images/profiles/OSUpdate_6_IncrementalEnd.jpg)

17. Select Yes to add another device update package, and repeat Steps 11 - 19.

    ![img](../../images/profiles/OSUpdate_6_IncrementalAnother.jpg)

18. Select whether to provide an error message if conditional updates fails.

19. Select Continue to apply the update and proceed to the [Review window](../../stagingprofiles?Review).

    ![img](../../images/profiles/OSUpdate_6_Review.jpg)

