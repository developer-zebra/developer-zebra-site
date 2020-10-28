---
title: Smart Profiles
layout: guide.html
product: StageNow
productversion: '5.0'
---

## Overview

**StageNow 5.0 (and later) supports Smart Profiles**, which automatically calculate all required [Setting Types (CSPs)](../settingtypes) and create all necessary Profile steps for upgrading (or downgrading) the OS on device(s) to any other version. 

> **Requires MX 8.1 or later on target device(s)**

> **`IMPORTANT:` If a target device is downgraded to MX 8.0 or earlier** and an upgrade is later required, the upgrade Profile must be created using the previous "non-smart" methods. However, integration with the LifeGuard build database in StageNow 5.0 removes the requirement to manually identify the OS and LifeGuard image(s) required for such upgrade operation(s). 

-----

### Requirements

* StageNow 5.0 (or later) installed
* Target device(s) with MX 8.1 (or later)
* Login credentials for an active [Zebra OneCare](https://www.zebra.com/us/en/services/zebra-onecare-support-services.html) account 

-----

## Working with Smart Profiles

### I. Select LifeGuard Image(s)

**Before creating a Smart Profile**, at least one LifeGuard device image must be selected from the "Browse LifeGuard Images" page. **If LifeGuard images have already been selected, [skip to Section II](#iicreateasmartprofile)**.   

#### To select LifeGuard image(s):

1. From the "<i class="fa fa-home" aria-hidden="true"></i> Home" screen, **click "My LifeGuard Updates"** in the left-hand pane. 
<img alt="image" style="height:400px" src="sn5_01.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>
2. **Click the "Browse for LifeGuard Updates" button** at the top of the screen.<br> 
<img alt="image" style="height:400px" src="sn5_02.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>
3. On the login screen, **enter Zebra OneCare login credentials** within the allotted time.<br>
**Note: If a timeout occurs, click the "Try Again" button** to return to the login screen:
<img alt="image" style="height:400px" src="sn5_05.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>
4. **Click "Allow"** to load the LifeGuard image database. 
<img alt="image" style="height:400px" src="sn5_06.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>
5. To continue, **click "confirm"** to accept automatically generated access key: 
<img alt="image" style="height:400px" src="sn5_03.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>
6. **Wait a few moments** for LifeGuard images to load.<br>
**`IMPORTANT:` Do NOT cancel this operation** or data corruption could result. 
<img alt="image" style="height:200px" src="sn5_07.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>
7. To select the desired LifeGuard image(s) to work with:<br>
&nbsp;&nbsp;&nbsp;&nbsp;a. **Check the required boxes to filter search results**.<br>
&nbsp;&nbsp;&nbsp;&nbsp;b. **Click the "Show Results" button** to display the filtered list.<br>
&nbsp;&nbsp;&nbsp;&nbsp;c. **Click the "plus" icon** to display image in "My LifeGuard Updates" list. <br>
When the image list appears as desired, **[proceed to Section II](#iicreateasmartprofile)**. 
<img alt="image" style="height:400px" src="sn5_08.png"/>
_Click image to enlarge; ESC to exit_.
<br>
<br>

#### Functions of LifeGuard Updates Page

**<u>Revoke</u>** logs out of the current OneCare account. After pressing, repeat Steps 3, 4 and 5 to continue creating a Smart Profile. <br>

**<u>Search Build Number</u>** allows for loading of a specific build number.<br> 

**<u>Clear Selection</u>** removes all selected filters.<br>

**<u>Refresh</u>** reloads the available build images from the LifeGuard database. **A "grayed-out" button indicates that StageNow already contains the latest build data**.<br>

**<u>Release notes</u>** downloads the current release notes for a build (`.pdf` file) for off-line reference.<br>

#### When desired build files are downloaded, proceed to the next section.


----- 

### II. Create a Smart Profile

When creating a Smart Profile, StageNow examines the selected LifeGuard image, calculates all required Setting Types (CSPs), and creates all Profile steps necessary to deploy the image to the target device(s). 

> **See [Notes section](#notes) below for important information**. 

#### To create a Smart Profile:

1. **Click "My LifeGuard Updates"** in the left-hand pane of the StageNow "<i class="fa fa-home" aria-hidden="true"></i> Home" screen:  
<img alt="image" style="height:400px" src="sn50_smartprofile_02.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>
2. **Click the cloud icon(s) of the desired image(s)** to begin download(s). **NOTE**: If the desired file is already downloaded (indicated by a "check mark" in the image files column), skip to the next step.<br>
**`IMPORTANT:` Exiting the download screen cancels all current downloads**.<br>
 <img alt="image" style="height:350px" src="sn50_smartprofile_03.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
3. <u>After a file has been downloaded</u>, **click the Plus (+) symbol** to create a new Smart Profile:  
 <img alt="image" style="height:350px" src="sn50_smartprofile_04.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Enter a name for the Smart Profile**. Then **click the "Start" button**:
 <img alt="image" style="height:350px" src="sn50_smartprofile_06.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
5. If a network is required, **click "Yes" to create network over which to download images to devices**.<br> Enter network settings on subsequent screens (not shown). 
<img alt="image" style="height:400px" src="sn5_09.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>
6. **Click "Continue" button** to confirm Build batch file download steps for automatic Profile:
<img alt="image" style="height:400px" src="sn5_10.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>
7. **Click "Continue" button** to confirm Build batch file execution steps for automatic Profile:
<img alt="image" style="height:400px" src="sn5_11.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>
8. On Review screen, **click "View" to see the steps created** (if desired). Then **click "Complete Profiles" button**:
<img alt="image" style="height:400px" src="sn5_12.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>
9. **Select the desired publishing medium and click the "Test" or Publish" button**:<br>
 * **<u>Barcode</u>** generates one or more barcodes that execute the Smart Profile on any device that scans it. 
 * **<u>NFC/SD/USB</u>** generates a `.bin` file to be consumed on devices by the StageNow app.<br>
 [More about publishing StageNow Profiles](../stageclient/#iiselectstagingmedium)<br>
<img alt="image" style="height:400px" src="sn5_14.png"/>
_Click image to enlarge; ESC to exit_.<br>

&#49;&#48;. **Select the desired options to test or publish the Smart Profile**:
<img alt="image" style="height:600px" src="sn5_13ab.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>

#### Smart Profile creation is complete. After testing, deploy published staging media as required. 

-----

## Notes

* **<u>Zebra strongly recommends testing ALL Profiles before deployment</u> in production environments**.  
* StageNow supports multiple simultaneous downloads from the "My LifeGuard Updates" screen **<u>only while the screen is visible</u>**. 
* **Exiting the My LifeGuard Updates screen cancels all downloads in progress**.
* **To restart an interrupted download**, quit and relaunch StageNow. Then restart the download. 
* **DO NOT use a VPN** when attaching to the LifeGuard Updates database; it could result in unpredictable behavior.  

<!-- on "My LifeGuard Updates" screen

I think I have all these: 

1) on clicking of icon beside to "+" icon will take user to Lifeguard profiles where only profiles related to that build number will be shown.

2) Also there is no mention about "LifeGuard Profiles" page anywhere in document.

3) clicking on icon beside to delete button shall open build selection page which will show only those builds which are greater than the build selected as per the stored data.

4) Document does not also talk about "View  Lifeguard Profiles".

5) Also document should talk about  numbers of profile created ("0 profiles in image").

 -->

-----
