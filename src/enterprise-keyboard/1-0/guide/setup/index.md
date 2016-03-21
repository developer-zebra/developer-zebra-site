---
title: Enterprise Keyboard Setup
layout: guide.html
---

## Overview
The Zebra Enterprise Keyboard is delivered as part of the operating system on new Zebra Android Lollipop devices or installed as an OS patch on older KitKat devices. To make it available to users, it must be activated and optionally can be set as the default input method, if desired. This guide covers activation of Enterprise Keyboard and the steps for setting it as the default input device. 

Activation and configuration can be done in one of three ways: 

* Manually at the device (covered here)
* Programmatically through [EMDK for Android](/emdk-for-android/4-0/guide/about) development tools 
* Remotely:
    * Using [StageNow](/stagenow/2-2/about/) and the [UI Manager](/mx/uimgr/) service 
    * Through a company's own mobile device management (MDM) system (if supported by that system) 

## Manual Configuration
The section covers direct activation of Enterprise Keyboard on a single device. If using one of the remote methods referenced above to activate and configure multiple managed devices, please refer to the [Automated Installation section](#automatedinstallation) later in this guide. 

To enable Enterprise Keyboard on a device: 

&#49;. <b>Open the Settings panel</b> on the device:
<img alt="" style="height:350px" src="home_screen.png"/>
<br>

&#50;. Scroll to and <b>Tap Language and input</b>:
<img alt="" style="height:350px" src="input_in_settings.png"/>
<br>

&#51;. <b>Place a check next to Enterprise Keyboard</b> to enable it on the device. Uncheck other input devices to disable them, if desired. If Enterprise Keyboard was included with the device by default (and not downloaded as an OS patch), this step should have already been done. 
<img alt="" style="height:350px" src="panel_default.png"/>
<br> 

&#52;. <b>Tap Default</b> to set the default input device:
<img alt="" style="height:350px" src="default_input.png"/>

&#53;. <b>Tap the Enterprise Keyboard radio button</b> to set it as default input device:
<img alt="" style="height:150px" src="2a_choose_input.png"/>
<b>Note</b>: This panel also can be invoked by long-pressing the spacebar whenever the Android or Zebra keyboard is visible.
<br>

&#54;. <B>Tap the HOME key</b> to exit the Settings panel.  

Enterprise Keyboard setup is now complete. 

### Change Settings
Following installation, Enterprise Keyboard settings can be changed through the Android Settings panel. 

To change Enterprise Keyboard settings:

&#49;. <b>Open the Settings panel</b> on the device:
<img alt="" style="height:350px" src="home_screen.png"/>
<br>

&#50;. <b>Tap Language and input</b>:
<img alt="" style="height:350px" src="input_in_settings.png"/>
<br>

&#51;. <b>Tap the Enterprise Keyboard Settings button</b> to change settings:
<img alt="" style="height:350px" src="ekb_settings_button.png"/>
<br>

&#52;. On the Enterprise Keyboard Preferences panel, <b>tap the setting(s) that require change</b>:
<img alt="" style="height:350px" src="ekb_settings_panel.png"/>
For further information about Enterprise Keyboard settings, please refer to the [Customize section](../settings). 

### Automated Installation
Enterprise Keyboard can be configured remotely on multiple managed devices using Zebra's [StageNow](/stagenow/2-2/about/) tools and the [UI Manager](/mx/uimgr) service or an organization's own MDM system. Configuration also can be handled programmatically through Zebra's [EMDK for Android](/emdk-for-android/4-0/guide/about) software development kit. 

Actions to be executed on the Android Settings panel:
1. <b>Open Language and input</b> 
2. Add a check for <b>'Enterprise Keyboard'</b> to enable it on the device
3. <b>Select Enterprise Keyboard</b> as the default input device
4. <b>Select a language</b> if other than English (default)

Please refer to the respective tool of choice for more information. 

## Uninstallation
<b>Warning: This action will remove the Enterprise Keyboard app and all associated data, including custom dictionaries, if any</b>. 

### Manual Uninstallation
To remove Enterprise Keyboard, simply use the Android App Manager to <b>uninstall Enterprise Keyboard</b>. 

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
Enterprise Keyboard can be uninstalled from multiple managed devices using an organization's own MDM server in the same way as other Android apps. Alternatively, remote unstallation can be accomplished through Zebra's [EMDK](/emdk-for-android/4-0/guide/about) or [StageNow](/stagenow/2-2/about/) tools using the [App Manager](/mx/#app-manager) service. 

