---
title: Perform OS Update
---
Use this Wizard to perform an OS update on a device. This applies an update or a patch to the OS by downloading a zip file to the device or using an existing zip file on the device.  This Wizard also allows you to connect to a network. 

To create a Perform OS Update profile:

1. Select Create New Profile.

2. Select the MX version from the drop-down menu.

3. Select the Perform OS Update Wizard, and select Create.

    ![img](../../images/profiles/OSupdate_name.jpg)

4. Enter a name for the profile and select Start.

5. To choose to connect to this network using StageNow bar codes, select Yes, and then select Continue. See [Profiles / Connect Network](/stagenow/2-2/Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window. Select Continue when done.

    Note: This wizard includes a Deployment section. Deployment requires that the host computer and the device(s) are on the same network. 

6. If offered, select whether to connect to this network using the Rapid Deployment (RD) Client. Note that the RD Config section only appears if you turned on Legacy Mode in the [Settings](/stagenow/2-2/gettingstarted?Settings) screen. Select Yes for devices that don't include the StageNow Client. See [Rapid Deployment (RD) Client](/stagenow/2-2/stageclient?Rapid%20Deployment%20Client) for more information.

7. If you selected Yes, choose whether to set up Wi-Fi options and/or Wi-Fi profiles. See [Setting Types / Wifi mgr](/stagenow/2-2/csp/wifi).

    ![img](../../images/profiles/OSupdate_deploy1.jpg)

8. Choose a method for performing the OS update, and then select Continue.

    * Select No, I would like to Download the file to push an OS update zip file to the device.
    * Select Yes, I want to Apply the file to use an OS update zip file that already resides on the device.

9. If you selected No, I would like to Download the file: 

    a. Select whether or not to prevent Wi-Fi from turning off while downloading. See [Setting Types / Wi-Fi](/stagenow/2-2/csp/wifi) for information.

    ![img](../../images/profiles/OSupdate_sleep.jpg)

    b. Enter the information for the ZIP file. See [Setting Types / File](/stagenow/2-2/csp/file) for more information on the File Manager.

    ![img](../../images/profiles/OSupdate_setting.jpg)

    c. Select whether or not to allow Wi-Fi to turn off after downloading. See [Setting Types / Wi-Fi](/stagenow/2-2/csp/wifi) for information.

    ![img](../../images/profiles/OSupdate_sleep2.jpg)


10. Enter the information for the ZIP file. See [Setting Types / Power](/stagenow/2-2/csp/power) for more information on the Power Manager.

   ![img](../../images/profiles/OSupdate_sourcefile.jpg)

11. Select Continue to apply the update and proceed to the [Review window](/stagenow/2-2/stagingprofiles?Review).

