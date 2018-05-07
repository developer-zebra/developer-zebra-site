---
title: Manage Profiles
layout: guide.html
product: DataWedge
productversion: '6.8'
---

## Overview
DataWedge can be associated with any app on the device and called upon to acquire barcode, mag-stripe or other data, to process the data in a specified way, and to pass it to one or more apps. Therefore, each Profile must specify these three things: 

1. **Input device** determines whether to acquire data from [barcodes](../input/barcode), a [magnetic stripe](../input/msr) or using [SimulScan](../input/simulscan).

2. **Process options** manipulate the acquired data using [Basic](../process/bdf) or [Advanced](../process/adf) data formatting processes. 

3. **Output method** specifies whether to pass data as [keystrokes](../output/keystroke), within an [intent](../output/intent) and/or over an [IP network](../output/ip). 

For more information about DataWedge Profiles, see the [Architecture Overview](../overview). 

-----

## Create a New Profile
The launcher icon for DataWedge varies from one system and version to another. The icon for DataWedge 6.x is shown below. Locate the DataWedge icon and tap it to begin. 

<img style="height:350px" src="02_datawedge_launcher.png"/>
_Launcher icon for DataWedge 6.x_
<br>

On a new installation, the DataWedge Profiles screen appear similar to that of the image below, showing the three included (visible) Profiles. White text indicates enabled Profiles. Also shown is a fourth, disabled Profile (grey text) that's not present out-of-the-box. 
<img style="height:350px" src="01a_ProfilesScreen.png"/>

**Note**: If DataWedge had been opened previously, it will reopen to the last screen used. If necessary, press BACK until the Profiles screen appears.  
<br>

&#50;. **Tap the "hamburger"** menu and **select -> New profile**.  
<img style="height:350px" src="02_OptionsMenu.png"/>
<br>

&#51;.  **Enter a name** for the new Profile and **tap OK**. The Profiles list appears, similar to the image in Step 4, below.  
<img style="height:350px" src="03_name_profile.png"/>
Zebra recommends that Profile names be unique and contain alpha-numeric characters only.
<br>

#### Associate the Profile with App(s) and/or Activities: 

&#52;. **Tap the Profile** to be associated: 
<img style="height:350px" src="04_profile_list.png"/>
<br>

&#53;. From the Profile screen, **tap the "Profile enabled" checkbox** to enable it, then **tap "Associated apps"** to link it with an app or activity:
<img style="height:350px" src="05_enable_profile.png"/>
<br>

&#54;. **Tap the menu** and **select -> New app/activity**. A list appears with all apps and activities installed on the device. 
<img style="height:350px" src="06_associate_menu.png"/>
<br>

&#55;. From the device apps/activities list, **select the app or activity to associate** with the Profile being edited. When an app is selected, its activities list appears (see Step 8). 
<img style="height:350px" src="07_select_app_to_associate.png"/>
<br>

&#56;. From the app activities list, **tap the asterisk to associate all app activities** with the Profile, or tap on an indvidual activity to use DataWedge for **that specific activity only**:
<img style="height:350px" src="08_pick_asterisk.png"/>
<br>

&#57;. The app now appears in the Profile associations list as below. **Repeat Steps 6-8** until all desired apps and/or activities are associated. 
<img style="height:350px" src="09_confirm_association.png"/>
When finished adding associations, **Tap the BACK button** to return to the Profile screen. 
<br>
<br>

#### Configure a Profile for Input, Processing and Output:

&#49;&#48;. From the Profile screen, **enable the desired Input device** (scrolling down as necessary). For example, the Barcode Input displays an option for Scanner selection: 
<img style="height:350px" src="10_enable_new_profile.png"/>
<br>

&#49;&#49;. From the Scanner selection screen, **select the desired scanner** or imager. **Tap BACK** to return to the Input screen. 
<img style="height:350px" src="11_select_input.png"/>
**Note: Lists such as the one above display only devices that are present on (or connected to) the unit being configured**. For related information, see [Scanner Selection](../input/barcode/#scannerselection) in the Barcode Input guide. 
<br>

&#49;&#50;. From the Decoders screen (accessible from the Input screen), **select only the decoders required by the application** to optimize scanning performance. **Tap BACK** to return to the Input screen. For more information about configuring Decoder parameters, see the [Barcode Input Guide](../input/barcode).
<img style="height:350px" src="12_select_decoders.png"/>
<br>

&#49;&#51;. From the Profile screen, **select the desired Output method** (scrolling down as necessary). For example, the image below shows that Keystroke Output is enabled: 
<img style="height:350px" src="13_select_output.png"/>
**Note**: Output sections contain selectors for configuring "Basic data formatting" and "Advanced data formatting." **These contain the data Processing options**.  
<br>

&#49;&#52;. **Select the Basic data formatting** for options on inserting special keystrokes or adding text before (prefix) and/or after (suffix) the collected data:  
<img style="height:350px" src="14_basic_data_formatting.png"/>
<br>

See [Basic Data Formatting](../process/bdf) and [Advanced Data Formatting](../process/adf) sections for more information about processing of acquired data.
<br>

The app will now use DataWedge for barcode data acquisition. 

-----

## Editing Profiles

**To modify, rename, delete or clone a profile**: 

&#49;. **Long-press the Profile name** to bring up its Context menu.

&#50;. **Tap on the desired action**: 
<img style="height:350px" src="profile_context_menu.png"/>
<br>
Editing a Profile also can be started by tapping the Profile name in the Profile list. 

-----

**Related Guides**: 

* **[Profile Architecture Overview](../overview) -** explains how DataWedge uses Profiles
* **[Profile Options](../profiles) -** links and details for all DataWedge Profile options
* **[DataWedge APIs](../api) -** access DataWedge programmatically 
