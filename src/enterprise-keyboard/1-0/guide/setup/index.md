---
title: Enterprise Keyboard Setup
layout: guide.html
---

## Overview
Enterprise Keyboard is delivered as part of the operating system on Zebra devices, but is not enabled. To make it available to users, it must be activated and should also be set as the default input method (optional). 

Activation can be accomplished manually at the device(s), programmatically through Zebra's [EMDK](/emdk-for-android/4-0/guide/about), or remotely using [StageNow](/stagenow/2-2/about/) and the [UI Manager](/mx/uimgr#setdefaultinputmethod) services. or an existing mobile device management (MDM) system (if supported by that system). 

also need App Manager to install it? 

## Manual Activation

The section covers direct activation of Enterprise Keyboard on a single device. If using one of the remote methods referenced above to activate multiple managed devices, please refer to the [Automated Installation section](#automatedinstallation) later in this guide. 

To activate Enterprise Keyboard on a device: 

&#49;. <b>Open the Settings panel</b> on the device:



&#54;. <b>Tap Open</b> to launch the configuration wizard, which  semi-automates the steps for activating Enterprise Keyboard. 
<img alt="" style="height:350px" src="ekb_installed_open.png"/>
<br>

<b>Note</b>: If "Done" was accidentally selected instead of "Open," tap Enterprise Keyboard from the App Drawer (shown below) to launch the configuration wizard (subsequent launches from the App Drawer will open the Enterprise Keyboard Settings panel).
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
<b>Note</b>: Following installation, this selector can be invoked directly by long-pressing the spacebar from the Android or Zebra keyboards.
<br> 

&#49;&#49;. <B>Tap the HOME key</b> to exit the Settings panel.  

Enterprise Keyboard setup is now complete. 

### Automated Installation
Enterprise Keyboard can be installed from an organization's own MDM server to multiple managed devices in the same way as other Android apps. Alternatively, remote deployment and management--including the configuration of Enterprise Keyboard settings--can be accomplished through Zebra's [EMDK](/emdk-for-android/4-0/guide/about) or [StageNow](/stagenow/2-2/about/) tools using the [App Manager](/mx/#app-manager) service. 

In the Android Settings panel:
1. <b>Open Language and input</b> 
2. Place a <b>check next to 'Enterprise Keyboard'</b> to enable it on the device
3. <b>Select Enterprise Keyboard</b> as the active input device
4. <b>Select a language</b> if other than English (default)



## Uninstallation

### Manual Uninstallation
To remove Enterprise Keyboard, simply use the Android App Manager to <b>uninstall EBK</b>. This automatically removes Enterprise Keyboard and all associated data. 

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

Manual uninstallation of Enterprise Keyboard is complete. 

### Automated Uninstallation
Enterprise Keyboard can be uninstalled from an organization's own MDM server to multiple managed devices in the same way as other Android apps. Alternatively, remote unstallation can be accomplished through Zebra's [EMDK](/emdk-for-android/4-0/guide/about) or [StageNow](/stagenow/2-2/about/) tools using the [App Manager](/mx/#app-manager) service. 

