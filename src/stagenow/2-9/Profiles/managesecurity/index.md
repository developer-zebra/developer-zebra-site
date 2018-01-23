---
title: Manage Device Security
layout: guide.html
product: Stagenow
productversion: '2.8'
---
Use this Wizard to configure security options and policies for a device.  This can whitelist and blacklist applications, control screen time-outs, and enable or disable an SD card, camera, GPRS, Bluetooth, GPS, or USB. This can also encrypt SD cards and control the PowerKey menu, settings UI, unknown sources, and threat management. 

To create a Manage Device Security profile:

1. Select Create New Profile.

2. Select the MX version from the drop-down menu.

3. Select the Manage Device Security Wizard, and select Create.

    ![img](../../images/profiles/managesecurity_name.jpg)

4. Enter a name for the profile and select Start.

    ![img](../../images/profiles/managesecurity_whitelist.jpg)

    Note: During profile creation, the top right of the window indicates the status of the profile, e.g., Incomplete.

5. Select whether or not to perform Application Whitelisting. If you select Yes, see [Setting Types / AccessMgr](../../csp/access) for instructions. 

6. Select whether or not to Blacklist an Application. If you select Yes, see [Setting Types / AppMgr](../../csp/app) for instructions. 

7. Select whether or not to control the Display Timeout. If you select Yes, see [Setting Types / DisplayMgr](../../csp/display) for instructions. 

8. Select whether or not to control the Screen Lock Timeout. If you select Yes, see [Setting Types / DevAdmin](../../csp/devadmin) for instructions. 

9. Select whether or not to control the Installation of Applications from Unknown Sources. If you select Yes, see [Setting Types / DevAdmin](../../csp/devadmin) for instructions. 

10. Select whether or not to control the contents of the Power Key Menu. If you select Yes, see [Setting Types / PowerKeyMgr](../../csp/powerkey) for instructions.

    ![img](../../images/profiles/managesecurity_powerkey.jpg)

11. Select whether or not to control what the Settings UI can accomplish. If you select Yes, see [Setting Types / SettingsMgr](../../csp/settingsmgr) for instructions.

12. Select whether or not to configure Threat Management. If you select Yes, see [Setting Types / ThreatMgr](../../csp/threat) for instructions.

13. Select whether or not to control USB usage. If you select Yes, see [Setting Types / UsbMgr](../../csp/usb) for instructions.

14. Select whether or not to control Wireless usage. If you select Yes, see [Setting Types / WirelessMgr](../../csp/wireless) for instructions.

15. Select whether or not to control Camera usage. If you select Yes, see [Setting Types / CameraMgr](../../csp/camera) for instructions.

16. Select whether or not to SD Card usage. If you select Yes, see [Setting Types / SdCardMgr](../../csp/sdcard) for instructions.

17. Select whether or not to encrypt the SD Card. If you select Yes, select the method for providing the Encryption Key.

   ![img](../../images/profiles/managesecurity_encryptSDcard.jpg)


    Then see [Setting Types / EncryptMgr](../../csp/encrypt) for instructions.

18. Select Continue to proceed to the [Review window](../../stagingprofiles?Review).






