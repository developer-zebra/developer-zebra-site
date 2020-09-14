---
title: Smart Profiles
layout: guide.html
product: StageNow
productversion: '5.0'
---

## Overview

**StageNow 5.0 (and later) supports Smart Profiles**, which automatically calculate all required [Setting Types (CSPs)](../settingtypes) and create all necessary Profile steps for upgrading (or downgrading) the OS on device(s) to any other version. 

> **Requires MX 8.1 or later on target device(s)**

> **`IMPORTANT:`**. If a target device is downgraded to MX 8.0 or earlier and an upgrade is later required, the upgrade profile must be created using the previous "non-smart" methods. However, integration with the LifeGuard build database in StageNow 5.0 removes the requirement to manually identify the OS and LifeGuard image(s) required for the upgrade operation(s). 

-----

### Requirements

* StageNow 5.0 (or later) installed
* Target device(s) with MX 8.1 (or later)
* Login credentials for an active [Zebra OneCare](https://www.zebra.com/us/en/services/zebra-onecare-support-services.html) account 

-----

## Create a Smart Profile


##### Before beginning: 

Before creating a Smart Profile, select at least one LifeGuard device image from the "Browse LifeGuard Images" page: 

<img alt="image" style="height:400px" src="sn50_smartprofile_00.png"/>
_Click image to enlarge; ESC to exit_.<br>

#### To create a Smart Profile:

1. From the StageNow Home screen, **click "My LifeGuard Updates"** in the left-hand pane:  
<img alt="image" style="height:400px" src="sn50_smartprofile_02.png"/>
_Click image to enlarge; ESC to exit_.<br>

2. **Click the cloud icon** of the desired image (as shown below) to begin the download: 
 <img alt="image" style="height:350px" src="sn50_smartprofile_01.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>

3. When the**Enter static text** (i.e. "GMT") **and/or variables** (i.e. `%zone%`) in any combination as desired:  
 <img alt="image" style="height:350px" src="sn50_smartprofile_02.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
 A warning appears until variables are entered using the correct syntax: <br>
 <img alt="image" style="height:350px" src="sn50_smartprofile_03.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
3. **Enter remaining static text and/or variables** as desired for all fields and **click the "Continue" button**:  
 <img alt="image" style="height:350px" src="sn50_smartprofile_04.png"/>
 _Click image to enlarge; ESC to exit_.<br>
<br>
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

#### Dynamic Staging is complete

#### Notes

* Multiple simultaneous downloads are possible.
* Leaving the download screen cancels all downloads.   


-----

## Troubleshooting

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

-----
<!-- 
Then the administrator need only populate the file with the required data and select that `.csv` file when generating barcodes. 

Data-entry fields that support Dynamic Staging are indicated by a "percent sign" (%) icon similar to the image below.  

Variables can be used alone in a field or in combination with static values and/or other variables. 

For example, a valid string might read as follows: 

`192.168.%octet3%.%octet4%` to specify two static octets (192 and 168 separated by a "dot") and two variables (%octet3% and %octet4%, also separated by a dot). 

WORKFLOW

Use case- Allan: 

In general, the concept is to produce a staging profile that does different things on different devices. 

In its first iteration, dynamic parts are rendered static when barcodes or .bin files are created. 

One staging profile produces multiple barcode sheets or .bin files. 



STEPS 
1. Decide to have a dynamic profile
2. Determine what has to vary  in each profile
3. Use the "Create a template" feature (Zebra-recommended) 
4. Enter the required variables. it can be done as one master or separate CSVs for different stores.  

ONE FILE
all values, generate once
but has extra barcode sheets that might not be needed every time

One store, 10 department. one profile for each. 
one row per store
each profile references different subsets of the same file
might not have been created from a template

If customer has an access or SQL database with store info. 
output selected sets as csv files
might require referring to the file from within SN 

WORKFLOW 1- without a database of variables

WORKFLOW 2- with a database of variables


FROM POLARION:

Background:

Currently, StageNow supports Barcode and NFC Staging Modalities, but all Staging Profiles are inherently Static, which means that all values must be entered at the time the Staging Profile is created and remain fixed unless/until the Staging Profile is manually edited.
If an Administrator wishes to produce multiple variations of a Staging Profile, he must manually create a copy of the Staging Profile and edit it with the required changes and must repeat that process for each variation required.
This is error-prone and time-consuming and creates a mass of Staging Profiles to manage.
There is a strong request from the field to be able to perform Staging using multiple variations of a single Staging Profile in a more efficient manner.

Assumptions:

This may be the first increment of a larger Dynamic Staging Feature set and hence should be defined and implemented as generically possible so that it can serve as the base for future expansion.
Customers would prefer a simple and standard way to provide Data Sets to be used when generating variations for a Staging Profile (e.g. specify a .CSV file).
Customers may desire a way to manage and organize multiple Data Sets for use with the same or different Staging Profiles (e.g. a library of imported .CSV files).
Customers will likely need a way to organize and manage the multiple Barcode Sheets Sets or collections of NFC tag binaries generated via Dynamic Staging (e.g. name generated files based on variant values).
Customers may desire a way to visually differentiate Static and Dynamic Staging Profiles.
Customers may desire a way to visually differentiate Barcode Sheets Sets or NFC Instructions Sheets when generating variations for a Staging Profile.
Customers may desire a way to customize the Staging Operator instructions produced on the Barcode Sheets or NFC Instruction Sheets when generating variations for a Staging Profile.

Expectations:

The Staging Administrator can optionally choose to include a Variable anywhere the wish within any text-entry field presented within a Staging Profile.
Each Staging Profile can have as many or as few variables as the Staging Administrator wishes to use and can name variables any way he wishes.
A single text-entry field could contain mixtures of static data and variables in any combination.
Any Staging Profile containing at least one variable is a Dynamic Staging Profile and all other Staging Profiles are Static.
When the Staging Administrator or Staging Operator generates using a Dynamic Staging Profile, he will be required to supply a Data Set providing at least one or more values for every variable.
The Staging Administrator will be able to easily manage Dynamic Staging Profiles, Data Sets, and the Barcode Sheets, NFC Binary Files, Audio Files, etc. generated from them.
 -->