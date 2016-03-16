---
title: Enterprise Keyboard Setup
layout: guide.html
---

## Overview
Enterprise Keyboard is delivered as an APK and installs in much the same way as other Android apps. Its settings can be configured locally or remotely using a mobile device management (MDM) system. EKB also can be installed and configured programmatically through Zebra's [EMDK](/emdk-for-android/4-0/guide/about) or remotely using [StageNow](/stagenow/2-2/about/) tools and the [App Manager](/mx/#app-manager) service.


## Manual Installation

These instructions apply to direct installation (from a computer to a single device) using the installer APK (`FILE_NAME_TBD.apk`). If installing from an MDM, please refer to the [Automated Installation section](#automatedinstallation) below. 

To install Enterprise Keyboard manually: 

&#49;. <b>Connect the device</b> via USB to a PC or Mac.

&#50;. <b>Copy the </b>`FILE_NAME_TBD.apk` <b>file</b> from the PC to any writable device folder.

&#51;. On the device, <b>launch File Browser</b> from the App Drawer:
<img alt="" style="height:350px" src="appdrawer.png"/>
<br>

&#52;. <b>Locate and launch</b> `FILE_NAME_TBD.apk`:
<img alt="" style="height:350px" src="ekb_file_browser.png"/>
<br>

&#53;. <b>Tap Install</b> after reading the privacy warnings: 
<img alt="" style="height:350px" src="access_1.png"/>

<img alt="" style="height:350px" src="access_2.png"/>

<img alt="" style="height:350px" src="access_3.png"/>
<br>

&#54;. <b>Tap Open</b> to launch the configuration wizard, which  semi-automates the steps for activating EKB. 
<img alt="" style="height:350px" src="ekb_installed_open.png"/>
<br>

<b>Note</b>: If "Done" was accidentally selected instead of "Open," tap Enterprise Keyboard from the App Drawer (shown below) to launch the configuration wizard (subsequent launches from the App Drawer will open the EKB Settings panel).
<img alt="" style="height:350px" src="ekb_appdrawer.png"/>
<br>

The wizard splash screen should appear: 

<img alt="" style="height:350px" src="0_splash.png"/>
<br>

&#55;. <b>Tap 'Get started' </b> to dismiss the splash screen and start the wizard: 
<img alt="" style="height:350px" src="1_intro.png"/>
<br>

&#56;. <b>Tap 'Enable in Settings'</b> to bring up the 'Language and input' panel: 
<img alt="" style="height:350px" src="panel_default.png"/>
Place a <b>check in Enterprise Keyboard</b> in the screen above to enable it on the device. Uncheck other input devices to disable them on the device, if desired.
<br> 

&#57;. <b>Tap the BACK button</b> to bring up the next wizard screen:
<img alt="" style="height:350px" src="2_switch_to_ekb.png"/>
...or <b>tap Default</b> in the Language and input panel (Step 8, above).  

&#49;&#48;. <b>Tap Enterprise Keyboard</b> to make it the default keyboard. 
<img alt="" style="height:350px" src="2a_choose_input_ekb.png"/>
<br> 

&#49;&#49;. <B>Tap the HOME key</b> to exit the Settings panel.  

Enterprise Keyboard setup is now complete. 

### Automated Installation
Enterprise Keyboard can be installed from an organization's own MDM server to multiple managed devices in the same way as other Android apps. Alternatively, remote deployment and management--including the configuration of EKB settings--can be accomplished through Zebra's [EMDK](/emdk-for-android/4-0/guide/about) or [StageNow](/stagenow/2-2/about/) tools using the [App Manager](/mx/#app-manager) service. 

In the Android Settings panel:
1. <b>Open Language and input</b> 
2. Place a <b>check next to 'Enterprise Keyboard'</b> to enable it on the device
3. <b>Select Enterprise Keyboard</b> as the active input device
4. <b>Select a language</b> if other than English (default)



## Uninstallation

### Manual Uninstallation
To remove EKB, simply use the Android App Manager to <b>uninstall EBK</b>. This automatically removes EKB and all associated data. 

&#49;. <b>Tap Apps</b> to bring up the Android App Manager: 
<img alt="" style="height:350px" src="app_settings.png"/>
<br>

&#50;. Locate and <b>Tap EHS Installer</b>:
<img alt="" style="height:350px" src="uninstall_select ekb.png"/>
<br>

&#51;. <b>Tap the Uninstall button</b>:
<img alt="" style="height:350px" src="uninstall_ekb.png"/>
<br>

&#52;. <b>Click OK</b> to confirm:
<img alt="" style="height:350px" src="uninstall_confirm.png"/>
<br>

Manual uninstallation of EKB is complete. 

### Automated Uninstallation
Enterprise Keyboard can be uninstalled from an organization's own MDM server to multiple managed devices in the same way as other Android apps. Alternatively, remote unstallation can be accomplished through Zebra's [EMDK](/emdk-for-android/4-0/guide/about) or [StageNow](/stagenow/2-2/about/) tools using the [App Manager](/mx/#app-manager) service. 

