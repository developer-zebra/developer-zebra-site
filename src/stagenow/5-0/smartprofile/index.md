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

**Before creating a Smart Profile**, at least one LifeGuard device image must be selected from the "Browse LifeGuard Images" page. **If LifeGuard images have already been selected, skip to Section II**.   

#### To select LifeGuard image(s):

1. From the "<i class="fa fa-home" aria-hidden="true"></i> Home" screen, **click "My LifeGuard Updates"** in the left-hand pane. 
<img alt="image" style="height:400px" src="sn5_01.png"/>
_Click image to enlarge; ESC to exit_.
<br>
2. **Click the "Browse for LifeGuard Updates" button** at the top of the screen.<br> Log in with Zebra OneCare credentials, if prompted. 
<img alt="image" style="height:400px" src="sn5_02.png"/>
_Click image to enlarge; ESC to exit_.
<br>
3. If necessary, **check the required boxes to filter search results** and display images of desired target device(s). 
<img alt="image" style="height:400px" src="sn5_03.png"/>
_Click image to enlarge; ESC to exit_.
<br>
4. **Click the "Show Results" button**. 
<img alt="image" style="height:400px" src="sn5_04.png"/>
_Click image to enlarge; ESC to exit_.
<br>
5. **Click the icon in the "Add to My LifeGuard Updates" column** to select the desired images. 

<img alt="image" style="height:400px" src="sn5_05.png"/>
_Click image to enlarge; ESC to exit_.
<br>


<img alt="image" style="height:400px" src="sn5_06.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_07.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_08.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_09.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_10.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_11.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_12.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_13a.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_13b.png"/>
_Click image to enlarge; ESC to exit_.
<br>

<img alt="image" style="height:400px" src="sn5_14.png"/>
_Click image to enlarge; ESC to exit_.
<br>


<!-- this is the montage image
<img alt="image" style="height:400px" src="sn50_my_lg_browse.png"/>
_Click image to enlarge; ESC to exit_.<br>
-->
----- 

### II. Create a Smart Profile

When creating a Smart Profile, StageNow examines the selected LifeGuard image, calculates all required Setting Types (CSPs) and creates all Profile steps necessary to deploy the image to the target device(s). 

> **See [Notes section](#notes) below for important rules and restrictions**. 

#### To create a Smart Profile:

1. From the StageNow "<i class="fa fa-home" aria-hidden="true"></i> Home" screen, **click "My LifeGuard Updates"** in the left-hand pane:  
<img alt="image" style="height:400px" src="sn50_smartprofile_02.png"/>
_Click image to enlarge; ESC to exit_.<br>
<br>
2. On the "My LifeGuard Updates" page, **click the cloud icon of the desired image** (as shown below) to begin a download.<br> Multiple images can be downloaded simultaneously, but **exiting the download screen cancels all remaining downloads**.
 <img alt="image" style="height:350px" src="sn50_smartprofile_03.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
3. <u>When the download completes</u>, **click the Plus (+) symbol** to create a new Smart Profile:  
 <img alt="image" style="height:350px" src="sn50_smartprofile_04.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Enter a name for the Smart Profile**. Then **click the "Start" button**:
 <img alt="image" style="height:350px" src="sn50_smartprofile_06.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>

> Next steps here. 

#### Whiz, bang... smart profile is made. 

<!-- 

4. To test a Dynamic Profile, **select a barcode type and click the "Test" button**: <br>
 <img alt="image" style="height:450px" src="SN41_dynamic_05.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
5. A prompt appears for selecting (**or *creating***) the `.csv` file similar to the image below:<br>
  <img alt="image" style="height:350px" src="SN41_dynamic_07b.png"/>
  **To select an <i><u>existing</u></i> `.csv` file skip to Step 6**.<br>
 **To create a** `.csv` **file "on the fly"** from variables created in the Profile:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;a. **Click "Save a CSV Template"** in the dialog shown below, **name and save the file** as prompted.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;b. In the same dialog (as below), **click "Open a CSV file for editing**, navigate to and open the file saved in Step a.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;c. **Enter data for all variables (separated by semi-colons)**, save and close the file.<br> 
  `IMPORTANT:` **Use semi-colons to separate variable names and data, and at the end of each line** (see Notepad image, below).<br> 
  <img alt="image" style="height:350px" src="SN41_dynamic_07.png"/>
  The image below shows a correctly formatted `.csv` file:<br>
  <img alt="image" style="height:350px" src="SN41_dynamic_16.png"/>
 _Click image to enlarge; ESC to exit_.<br>
 <a name="step6"></a>
6. **Select the** `.csv` **file that contains variable data for the Dynamic Profile**: <br> 
 <img alt="image" style="height:350px" src="SN41_dynamic_07a.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
 **On success, a barcode sheet is produced for each row of the** `.csv` **file** similar to the image below.<br> 
 **The Profile name is appended with the row number** on the printout for identification.<br>
 <img alt="image" style="height:350px" src="SN41_dynamic_15.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
7. **`If errors occur`** refer to the [Troubleshooting section](#troubleshooting) below for instructions.  
8. When testing is completed, **click Publish**. A prompt appears for entering Staging Operator instructions.<br> 
Combine variables and static text as desired. An example is shown below.<br>
 <img alt="image" style="height:350px" src="SN41_dynamic_06.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
9. **Click "Publish Now"** to complete the process; distribute staging materials as normal.  

-->

### Notes

* Multiple simultaneous downloads are possible.
* Leaving the download screen cancels all downloads.   
* more, yo

-----

<!-- ## Troubleshooting

Dynamic Staging errors occur when StageNow is unable to acquire data from a `.csv` file for generating staging media. 

#### Typical causes: 

* The `.csv` file is missing data for one or more variables
* One or more variables were entered incorrectly in StageNow
* The `.csv` file is not present on the host workstation
* The `.csv` file is open or otherwise locked on the host workstation

> **NOTE**: The "Host the Deployment Package Outside of StageNow FTP Server" option is not available when using Dynamic Staging.

#### Error Diagnosis:  

1. If StageNow displays a "CSV Issues" message like the one below, **click "Save the log"** to generate a list of issues. 
 <img alt="image" style="height:350px" src="SN41_dynamic_10.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
2. **Name and save the file** in the desired location: 
 <img alt="image" style="height:350px" src="SN41_dynamic_11.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
3. **Click the "Open a log file for viewing" button**, navigate to and open the log file saved in the previous step.<br>
 A sample log file is shown below: 
 <img alt="image" style="height:350px" src="SN41_dynamic_12.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
4. **Open the log in a text editor, make corrections to the** `.csv` **file as needed**. <br>
 Then **return to StageNow and click "Start Over"** button:  
 <img alt="image" style="height:350px" src="SN41_dynamic_10a.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
5. **Return to <a href="#step6">Step 6</a>** in the previous section and try Dynamic Staging again. 

-->

-----

