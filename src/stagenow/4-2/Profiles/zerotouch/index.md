---
title: Zero Touch Wizard
layout: guide.html
product: StageNow
productversion: '4.2'
---
Use this Wizard to configure the network settings of a "factory fresh" or factory-reset device to enable connection to the internet through Ethernet, Wi-Fi or a non-public cellular APN. This enables the device to access internet-based Google Zero Touch servers, which perform Device Owner Enrollment in an Enterprise Mobile Management (EMM) system, rendering the device manageable with no user interaction.

### Requirements

* StageNow 4.2 or later
* Zebra device running Android 10
* EMM with Zero Touch support and credentials

sn42_ztw_06.png
sn42_ztw_05.png
sn42_ztw_04.png
sn42_ztw_03.png
sn42_ztw_02.png
sn42_ztw_01.png
sn42_ztw_00.png

-----

### Using Zero Touch Wizard

**NOTE**: To create a single Profile that can be used to stage multiple devices with different settings, [enable Dynamic Staging](../../dynamicstaging/#usingdynamicstaging).  

1. From the StageNow Home screen, **click "Create new Profile"** to bring up the Wizards list.<br> 
 Then **select "Configure Zero Touch Network"** to start the Wizard:
 <img alt="image" style="height:450px" src="sn42_ztw_00.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
2. **Select the network type** for connecting the device to the internet.<br>
 **NOTE**: Only one network type may be selected:  
 <img alt="image" style="height:350px" src="sn42_ztw_02.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
3. **Enter the settings** for configuring the device for internet connectivity:  
 <img alt="image" style="height:400px" src="sn42_ztw_03.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Select Persistence preference**:  
 <img alt="image" style="height:350px" src="sn42_ztw_04.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
5. **Click "+ Expand"** to confirm settings, if desired.<br>
 Then **click "Complete Profiles"** to continue: 
 <img alt="image" style="height:350px" src="sn42_ztw_05.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
6. **Select deployment preferences**: 
 <img alt="image" style="height:350px" src="sn42_ztw_06.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
7. **Test Profile** to confirm desired behavior. 

#### The Profile is now ready for deployment. 
