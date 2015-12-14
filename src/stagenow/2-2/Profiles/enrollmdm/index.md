---
title: Enroll in an MDM
---
Use this Wizard to enroll a device for management by an MDM.  This downloads, installs, configures, and launches an MDM agent.  This Wizard also allows you to connect to a staging and/or production network and reboot the device. 

To create an Enroll in an MDM profile:

1. Select Create New Profile.

2. Select the MX version from the drop-down menu. If any MX 4.4 features are required, e.g., connecting via Ethernet for staging), select MX 4.4

3. Select the Enroll in an MDM Wizard, and select Create.

    ![img](../../images/profiles/enrollmdm_name.jpg)

4. Enter a name for the profile and select Start.

    Note: During profile creation, the top right of the window indicates the status of the profile, e.g., Incomplete.

5. To choose to connect to this network using StageNow bar codes, select Yes, and then select the type of network. Select Continue. See [Profiles / Connect Network](/stagenow/2-2/Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window.

    ![img](../../images/profiles/enrollmdm2.jpg)

    Note: This wizard includes a Deployment section. Deployment requires that the host computer and the device(s) are on the same network. 

6. If offered, select whether to connect to this network using the Rapid Deployment (RD) Client. Note that the RD Config section only appears if you turned on Legacy Mode in the [Settings](/stagenow/2-2/gettingstarted?Settings) screen. Select Yes for devices that don't include the StageNow Client. See [Rapid Deployment (RD) Client](/stagenow/2-2/stageclient?Rapid%20Deployment%20Client) for more information.

7. If you selected Yes, choose whether to set up Wi-Fi options and/or Wi-Fi profiles. See [Setting Types / Wifi mgr](/stagenow/2-2/csp/wifi).

8. In the Deployment section of the wizard, select a method for performing the enrollment and select Continue.
* For No, I want to Download the file to my device, see [Setting Types / File mgr](/stagenow/2-2/csp/file) for instructions.
* For Yes, I want to Install the file, see [Setting Types / AppMgr](/stagenow/2-2/csp/app) for instructions, and skip to Step 10.

    ![img](../../images/profiles/enrollmdm_method.jpg)

9. Select whether or not to download an MDM agent support APK. If you select Yes, see [Setting Types / File mgr](/stagenow/2-2/csp/file) for instructions. 

10. Select whether or not to download an MDM configuration file. If you select Yes, see [Setting Types / File mgr](/stagenow/2-2/csp/file) for instructions.

11. Select whether or not to install an MDM. If you select Yes, see [Setting Types / AppMgr](/stagenow/2-2/csp/app) for instructions.

12. Select whether or not to launch an MDM Agent APK. If you select Yes, see [Setting Types / Intent](/stagenow/2-2/csp/intent) for instructions.

13. Select whether or not to connect to a production network. If you select Yes, select a network type.  See [Profiles / Connect Network](/stagenow/2-2/Profiles/ConnectNetwork) for instructions on connecting to a network and populating the settings window.

14. Select whether or not to reboot a device. If you select Yes, see [Setting Types / Power](/stagenow/2-2/csp/power) for instructions.

15. Select Continue to proceed to the [Review window](/stagenow/2-2/stagingprofiles?Review).

