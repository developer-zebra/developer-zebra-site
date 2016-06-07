---
title: Advanced Settings
layout: guide.html
product: DataWedge
productversion: '5.0'
---

## Overview
This guide covers advanced DataWedge features such as the importing and exporting of Profiles and Configuration files, mass deployment of those files, and Advanced Data Formatting, which allows acquired data to be manipulated based on its contents. 

For this guide, a basic knowledge of DataWedge Profiles, Plug-ins and other concepts is required. If necessary, please see the [About](../about) and [Setup](../setup) guides for additional information. 

## DataWedge Settings
Most of the functionality referenced in this guide will be accessed through the DataWedge Settings panel. 

**To access DataWedge Settings**: 

&#49;. From the Profiles screen, **tap the "hamburger" menu** and **select Settings** as highlighted below. The DataWedge Settings panel appears similar to the image in Step 2. 
<img style="height:350px" src="datawedge_settings.png"/>
_Access the DataWedge Settings panel from the Profiles screen_. 
<br>

&#50;. **Tap the desired feature** to invoke or change its status. 
<img style="height:350px" src="datawedge_settings_panel.png"/>
_The DataWedge Settings panel_. 
<br>

**Functions of the DataWedge Settings panel**: 

* **DataWedge enabled -** Controls the DataWedge service. Uncheck this box to disable DataWedge and return control of scanning hardware to the system.

* **Enable logging -** Enables DataWedge to output logs for viewing in Logcat, Android Studio or a compatible viewer.

* **Import -** Invokes navigation for importing a DataWedge configuration file from device storage. This action replaces the current configuration.

* **Export -** Exports the current DataWedge configuration to device storage. 

* **Import Profile -** Invokes navigation for importing a DataWedge Profile from device storage. If a Profile of the same name already exists in DataWedge, it     will be replaced by the imported one. 

* **Export Profile -** Exports an individual DataWedge profile to device storage.

* **Restore -** Returns DataWedge on the device to factory default settings. 

### Logging
DataWedge provides the option of outputting system log messages for viewing through the Logcat command line tool, Android Studio or another compatible viewer, usually over a USB connection. 

**To Enable/Disable logging**: 

From the DataWedge Settings panel, **tap Enable Logging** to enable or disable logging as desired. 
<img style="height:350px" src="datawedge_logging.png"/>
<br>

### Import a Config File
DataWedge can accept settings created on another device and distributed throughout an enterprise by importing a DataWedge Configuration file. This file contains Profiles, Plug-ins and other DataWedge settings stored on the device. 

The DataWedge configuration file is always named `datawedge.db`.  

**To Import a DataWedge Configuration file**:    

&#49;. From the DataWedge Settings panel, **tap Import**. A screen appears similar to the one in Step 2, below. 
<img style="height:350px" src="datawedge_import_config.png"/>
<br>

&#50;. **Navigate to the imported file** on device storage using the interface provided:  
<img style="height:350px" src="01_import_config.png"/>
Imported settings take effect immediately and overwrite all prior settings.   
<br>

### Export a Config File
Once DataWedge is set up and configured as desired on a device, its settings file can be exported, distributed to other devices, imported and activated automatically (or imported manually, as above). 

**See Configuration File Management section of this guide for other important information**.  

**To Export a DataWedge Configuration file**: 

&#49;. From the DataWedge Settings panel, **tap Export** as highlighted below. A screen appears similar to the one in Step 2. 
<img style="height:350px" src="datawedge_export_config.png"/>
<br>

&#50;. If more than one storage device exists, **tap the desired storage device, then tap Export**. Only the storage device may be selected; the path will be inserted automatically.  
<img style="height:350px" src="02_export_config.png"/>
<br>

The default path and filename of an exported configuration file is:
`/storage/sdcard0/Android/data/com.symbol.datawedge/files/datawedge.db` 

If an external SD card is installed, an alternate path can be selected: 
`/storage/sdcard1/Android/data/com.symbol.datawedge/files/datawedge.db`

&#51;. **Retrieve the file `datawedge.db` from the device** and distribute to other devices manually or through a Mobile Device Management (MDM) system. 

### Import a Profile
Importing a Profile enables settings created elsewhere to quickly be activated on a device. This enables organizations to develop and fine-tune Profiles in a test lab, for example, before exporting and deploying them to the field. For more information, see Export a Profile, below.  

While the Profile importing _process_ is similar to that of the Configuration file, and both replace what came before, the Profile _itself_ is very different. A Profile contains settings that control how DataWedge will behave with one or more specific applications. A Config file might contain numerous Profiles as well as other DataWedge settings, and when imported, **overwrites all previous DataWedge settings and Profiles**. 

**To Import a DataWedge Profile**:  

&#49;. From the DataWedge Settings panel, **tap Import Profile** as highlighted below. A screen appears similar to the one in Step 2. 
<img style="height:350px" src="datawedge_import_profile.png"/>
<br>

&#50;. **Navigate to the file being imported** from device storage using the interface provided: 
<img style="height:350px" src="03_import_profile.png"/>
**Warning**: If a Profile of the same name already exists on the device, it will be replaced by the imported one. 
<br>

### Export a Profile
Once a DataWedge Profile is set up and configured as desired on a device, it can be exported and distributed for use on other devices throughout an enterprise. This enables a company to fine-tune settings for the acquisition, manipulation and disposition of data for specific applications(s), and easily propagate those settings to others in the organization.  

If more than one Profile is to be created, exported and distributed at the same time, it might be beneficial to create and export the Profiles together as a single DataWedge Configuration file. 

**To Export a Profile**: 

&#49;. From the DataWedge Settings panel, **tap Export Profile** as highlighted below. A list of Profiles on the device appears similar to the image in Step 2.
<img style="height:350px" src="datawedge_export_profile.png"/>
<br>

&#50;. If more than one storage device exists, **tap the desired storage device, then the name of the Profile to be exported, then tap Export**. Only the storage device and Profile may be selected; the path will be inserted automatically.
<img style="height:350px" src="04_export_profile.png"/>
<br>

The default path and filename of an exported Profile is:
`/storage/sdcard0/Android/data/com.symbol.datawedge/files/dwprofile_profilename.db` 

If an external SD card is installed, an alternate path can be selected: 
`/storage/sdcard1/Android/data/com.symbol.datawedge/files/dwprofile_profilename.db`

&#51;. **Retrieve the exported file from the device** and distribute to other devices manually or through a Mobile Device Management (MDM) system. 

**Warning: If a Profile exists on the device with the same name as one being imported, the existing profile will be overwritten by the imported one**. 

### Restore (defaults)
DataWedge has the ability to reset all user-configured settings and restore them to their original factory defaults. **This action cannot be undone**. 

**To Restore DataWedge to its factory-default settings**:

&#49;. From the DataWedge Settings panel, **tap Restore** as highlighted below. A confirmation screen appears similar to the image in Step 2.
<img style="height:350px" src="datawedge_restore.png"/>
<br>

&#50;. **Tap Yes to Restore factory defaults** or No to cancel. 
<img style="height:350px" src="05_restore_defaults.png"/>
<br>

## Advanced Data Formatting
DataWedge permits data acquired from barcode scanning, magstripe reading or other methods to be manipulated based on the data content. The Advanced Data Formatting (ADF) Process Plug-in can be configured to determine whether and how the data should be altered according to rules that perform actions based on specific criteria relating to the data itself. For example, a rule might be created to check the first four digits of any 16-digit number to determine if it's from a credit card affiliated with a specific bank. 

**ADF Components**:

**Rules -** The containers for one or more processing Actions and the user-definable criteria that trigger Action(s). All DataWedge Output Plug-ins can contain one or more ADF rules for the processing of acquired data.

**Criteria -** The triggers for taking a processing Action. Criteria can be set according to input type (i.e. only data from a barcode scanner), Symbology (i.e. only Code39 data), and a specified string within the data (optionally at a specified position in the data string and/or of a specified length). Acquired data not matching all defined criteria will not trigger Action(s).

**Actions -** A set of procedures for analyzing, identifying and processing acquired data. 

**The four Action types**: 
* **Cursor movement** (i.e. skip the first 10 characters)
* **Data modification** (i.e remove all spaces; pad the left side with four zeros)
* **Data sending** (i.e. output the last four digits)
* **Delay** (i.e. wait 50 ms before doing something)

### Creating ADF Rules
Setting up Advanced Data Formatting is done in three basic steps: 

1. Create a Rule
2. Define Criteria to activate the Rule
3. Define the Action(s) to be executed by the Rule

These steps are all carried out within the Advanced Data Formatting Process Plug-in, which is part of every DataWedge Output Plug-in. For further details, see the Plug-ins section of the [DataWedge Setup Guide](../setup). 

**To Create an ADF Rule**: 

&#49;. In the Profile that requires ADF, **tap on Advanced data formatting** as highlighted below. A screen appears similar to the image in Step 2.
<img style="height:350px" src="adf_intent_output.png"/>
<br>

&#50;. **Tap the "hamburger" menu, select New rule** and enter a name for the rule. The new Rule appears with other Rules in the Output Plug-in screen similar to the image in Step 3, below.   
<img style="height:350px" src="Figure_14_Adv_DataFormattingScreen.png"/>
<br>

&#51;. **Tap the new Rule** to access its settings. A screen appears similar to the image in Step 4.  
<img style="height:350px" src="adf_15_rules_list.png"/>
<br>

&#52;. **Tap Criteria** as highlighted below to enter the criteria that will activate the Rule.  
<img style="height:350px" src="adf_16_add_criteria.png"/>
<br>

&#53;. From the Criteria screen, **enter the criteria that will activate the Rule** based on the options below.  
<img style="height:350px" src="adf_23_source_criteria.png"/>
<br>

**Action Criteria**:

* **String to check for -** Allows a string to be entered that will initiate the action(s) when present anywhere in the acquired data.

* **String position -** An optional parameter that allows a character offset from the starting position (0) to be entered after which the "String to check for" must be present. For example, the target String "text" with a String position offset of 2 would invoke action(s) only if a string such as "00text" was acquired. 

* **String length -**  An optional parameter that allows a specific length (in characters) to be present before action(s) will be invoked. For example, if scanning Social Security numbers, a String length of nine (9) might be used as a means of initial validation. 

* **Source criteria -** An optional parameter that can invoke action(s) only when data is acquired by means of a barcode scanner (through which specific decoders can be further selected or excluded), or through SimulScan. 

&#54;. **Tap the BACK button** to save and return to the Rule screen.
<img style="height:350px" src="adf_17_criteria_list.png"/>
<br>

&#55;. From the Rule screen, **tap the "hamburger" menu and select New action** as highlighted below. A  scrollable list of Actions appears similar to the image in Step 8.
<img style="height:350px" src="adf_18_new_action.png"/>
<br>

&#56;. **Select an Action from the Actions list**, scrolling as necessary. **Tap BACK** to save and return to the Rule screen. 
<img style="height:350px" src="adf_19_actions1.png"/>
For more information about Actions, see the table below. 
<br>

### Supported ADF Actions
<table rules="all"
width="100%"
frame="border"
cellspacing="0" cellpadding="4">
<caption class="title"></caption>
<col width="22%" />
<col width="22%" />
<col width="55%" />
<thead>
<tr>
<th align="left" valign="top">Type</th>
<th align="left" valign="top">Actions</th>
<th align="left" valign="top">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5" align="left" valign="top"><p class="table">Cursor Movement</p></td>
<td align="left" valign="top"><p class="table">Skip ahead</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward by the specified number of characters.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Skip back</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor back by the specified number of characters.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Skip to start</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor to the beginning of the data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Move to</p></td>
<td align="left" valign="top"><p class="table">Moves the cursor forward until the string specified in the data field is found.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Move past</p></td>
<td align="left" valign="top"><div><div class="paragraph"><p>Moves the cursor forward past the string specified in the data field.</p></div></div></td>
</tr>
<tr>
<td rowspan="10" align="left" valign="top"><p class="table">Data Modification</p></td>
<td align="left" valign="top"><p class="table">Crunch spaces</p></td>
<td align="left" valign="top"><p class="table">Reduce spaces between words to one and remove all spaces at the beginning and end of the data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop space crunch</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>Crunch spaces</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Remove all spaces</p></td>
<td align="left" valign="top"><p class="table">Remove all spaces in the data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop space removal</p></td>
<td align="left" valign="top"><p class="table">Disables the last <strong>Remove all spaces</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Remove leading zeros</p></td>
<td align="left" valign="top"><p class="table">Remove all zeros at the beginning of data.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop zero removal</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>Remove leading zeros</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Pad with zeros</p></td>
<td align="left" valign="top"><p class="table">Left-pad data with the specified number of zeros.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop pad zeros</p></td>
<td align="left" valign="top"><p class="table">Disables the previous <strong>Pad with zeros</strong> action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Replace string</p></td>
<td align="left" valign="top"><p class="table">Replaces a specified string with a new specified string. Both must be specified.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Stop all replace string</p></td>
<td align="left" valign="top"><p class="table">Stop all <strong>Replace string</strong> actions.</p></td>
</tr>
<tr>
<td rowspan="6" align="left" valign="top"><p class="table">Data Sending</p></td>
<td align="left" valign="top"><p class="table">Send next</p></td>
<td align="left" valign="top"><p class="table">Sends the specified number of characters from the current cursor position.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send remaining</p></td>
<td align="left" valign="top"><p class="table">Sends all data that remains from the current cursor position.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send up to</p></td>
<td align="left" valign="top"><p class="table">Sends all data up to the specified string.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send pause</p></td>
<td align="left" valign="top"><p class="table">Pauses the specified number of milliseconds before continuing the next action.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send string</p></td>
<td align="left" valign="top"><p class="table">Sends the specified string.</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Send char</p></td>
<td align="left" valign="top"><p class="table">Sends the specified ASCII/ Unicode character. The maximum Unicode character value can be entered is U-10FFFF (= 1114111 in decimal).</p></td>
</tr>
</tbody>
</table>
</div>
_**Note**: To help minimize data loss, **Zebra recommends sending a Pause Action** of 50 ms after using a Send String and/or Send Char Action to send ENTER, LINE FEED or TAB characters._

&#57;. **Repeat Step 8 until all required Actions appear in an Actions list** similar to the image below. Actions execute from top to bottom. To re-order an Action, drag by its "hamburger" icon. **See additional notes, below**.  
<img style="height:350px" src="adf_22_actions_list.png"/>
<br>

**Action Notes**: 
* Actions are processed from the top of the list downward to the bottom. 
* To reposition an Action, drag the Action by its handle (to the right of its name). 
* To delete an Action, long-press the Action name. 
* A Pause Action of 50 ms after sending ENTER, LINE FEED or TAB Actions can help minimize data loss.

**Rules Notes**: 
* Once a Rule is enabled (with a check mark in its Rule screen), a Rule will apply whenever its parent Profile is used. 
* All data acquired through the Profile will be processed according to the Actions defined in the Rule before being transferred to the selected Output Plug-in. 
* If no ADF rule is enabled or defined, DataWedge passes decoded data to the Output Plug-in without processing.

## Sample ADF Rule
The following is an example of the creation process for an Advanced Data Formatting Rule that might be typical for data processing scenarios. 

**Barcode scanning criteria**:
* Barcode: Code39
* Decoded Length: 12 characters
* Starting Position contents: "129" 

**How DataWedge should format the data**:
* Pad all sends with zeros to a length of 8
* Send all data up to character X
* Send a space character

**To create an ADF rule for this example**:
1. Tap **HOME -> DataWedge -> Profile0**.
1. Tap **Advanced data formatting**.
1. Tap **Enable**.
1. Tap **Rule0**.
1. Tap **Criteria**.
1. Tap **String to check for**. In the text box, **enter 129** and **Tap OK**.
1. Tap **String position**. Change value to 0 and **Tap OK**.
1. Tap **String length**. Change value to 12 and **Tap OK**.
1. Tap **Source criteria**.
1. Tap **Barcode input**.
1. Tap **All decoders enabled** to uncheck and disable all decoders.
1. Tap **Code39** to enable the Code39 decoder only. 
1. Tap **BACK** three times.
1. Tap and hold the **Send remaining** until a menu appears.
1. Tap **Delete action**.
1. Tap **Menu -> New action**. Select **Pad with zeros**. The Pad with zeros Action appears in the Actions list.
1. Tap the **Pad with zeros** Action.
1. Tap **How many**. Change value to 8 and **Tap OK**.
1. Tap **BACK**.
1. Tap **Menu -> New action**. Select **Send up to**. The Send up to Action appears in the Action list.
1. Tap **Send up to** Action.
1. Tap **String**. In the text box, **enter X** and **Tap OK**.
1. Tap **BACK**.
1. Tap **Menu -> New action**. Select **Send char**. The Send char Action appears in the Action list.
1. Tap **Send char** Action.
1. Tap **Character code**. In the text box, **enter 32** and **Tap OK**.
1. Tap **BACK**.

The Rule0 screen should appear similar to the image below. 
<img style="height:350px" src="Figure_18_ADF_SampleScreen.png"/>
<br>

## Configuration File Management
Once DataWedge is set up and configured as desired on a device, settings can be saved to a file and distributed to other devices either manually or using a Mobile Device Management (MDM) system. For further information and specific instructions, see **Export a Config File** and **Import a Config File** sections, above. 

The DataWedge Configuration File is always named `datawedge.db`. 

DataWedge Profiles are always named `dwprofile_profilename.db`.  

### Enterprise Folder
On Zebra devices, internal storage contains a directory named `/enterprise` that persists (is not erased) after an Enterprise reset is performed on the device. DataWedge stores its files in several directories below `/enterprise`, which allows them to persist after an Enterprise reset as well.

**Directory Behavior**:

* `/enterprise/device/settings/datawedge/enterprisereset/` - DataWedge checks this folder following an Enterprise reset and imports a configuration file and Profile(s), if present. 

* `/enterprise/device/settings/datawedge/autoimport` - DataWedge monitors this folder whenever it's running and immediately imports and activates any configuration file placed here, overwriting prior settings. See Auto Import, below.   

**Notes:** 
* A DataWedge Restore operation will delete the working .db file.
* A _**Factory**_ reset **deletes all files** in the `/enterprise` folder.
* If a `datawedge.db` file exists in the `/enterprisereset` directory, DataWedge will activate it as the new working config file.

### Auto Import
DataWedge supports remote deployment of Configuration Files (`datawedge.db`) and Profiles (`dwprofile_profilename.db`) to devices through commercially available third-party Mobile Device Management (MDM) systems. When DataWedge launches, it checks the `/enterprise/device/settings/datawedge/autoimport` directory for the presence of such files. If any are found, it executes the functions below.  

**DataWedge Auto-Import routine**:
1. Import the new file(s) 
2. Replace the existing Configuration File and like-named Profile(s) (if any) 
3. Delete the imported files
4. Put new settings immediately into effect

While DataWedge is running, it receives a system notification whenever a config file or Profile is placed in the `/autoimport` folder and executes the same four functions. 

**Notes**:
* For the best experience, **Zebra strongly recommends that users be advised to exit DataWedge** before new config files are remotely deployed. 
* Devices running Android KitKat or later are unable to view contents of the `/enterprise` folder with File Explorer or other user-level tools. Therefore, <finish> <<<<<<<<<<<---------

Due to this the only possible way of copying configuration files to /autoimport or /enterprisereset folder is by copying using a staging client or programmatically by a user app.

Devices that do not show contents under the `/enterprise` folder user may have to programmatically write files to `/enterprisereset` folder and to `/autoimport' folder.

* DataWedge will attempt to consume any of the monitored “.db” files as soon the file name(s) appear in the `/autoimport` folder. Therefore, **it is possible for DataWedge to attempt to consume a file before it is completely written**. To avoid this condition, Zebra recommends initially storing the file with an alternate extension (i.e. ".tmp") and changing the extension to .db once writing is complete. See sample code, below. 

* **Zebra recommends applying explicit file permissions to the all .db files** so that DataWedge will not be impeded from any of its file procedures.

## Sample Code 
The following sample JavaScript can be modified to suit individual needs. 


	    //NOTE: Below code is for demo purpose only, has no error checks
	    InputStream fis = null;
	    FileOutputStream fos = null;
	    String autoImportDir = "/enterprise/device/settings/datawedge/autoimport/"
	    String temporaryFileName = "datawedge.tmp";
	    String finalFileName = "datawedge.db";
	    // Open your db as the input stream
	    fis = context.getAssets().open("datawedge.db");
	    // create a File object for the parent directory
	    File outputDirectory = new File(autoImportDir);
	    // create a temporary File object for the output file
	    File outputFile = new File(outputDirectory,temporaryFileName);
	    File finalFile = new File(outputDirectory, finalFileName);
	    // attach the OutputStream to the file object
	    fos = new FileOutputStream(outputFile);
	    // transfer bytes from the input file to the output file
	    byte[] buffer = new byte[1024];
	    int length;
	    int tot = 0;
	    while ((length = fis.read(buffer)) > 0) {
	            fos.write(buffer, 0, length);
	            tot+= length;
	    }
	    Log.d("DEMO",tot+" bytes copied");
	    //flush the buffers
	    fos.flush();
	    //release resources
	    try {
	            fos.close();
	    }catch (Exception e){
	    }finally {
	            fos = null;
	            //set permission to the file to read, write and exec.
	            outputFile.setExecutable(true, false);
	            outputFile.setReadable(true, false);
	            outputFile.setWritable(true, false);
	            //rename the file
	            outputFile.renameTo(finalFile);
	    }


## Programming Notes

### Overriding the Trigger Key
If it becomes necessary to override the scan trigger key in one or more applications, this can be accomplished by creating a DataWedge Profile that disables barcode input and associating the Profile with one or more applications. 

Use standard APIs such as `onKeyDown()` in the application to listen for the `KEYCODE_BUTTON_L1` and `KEYCODE_BUTTON_R1` presses.

### Capture Data and Photos in the Same App
To capture barcode data and take a photo in the same application:

1. Add two Activities in the application: one for barcode scanning and another for picture taking. 
2. Create a DataWedge Profile associated with the picture-taking Activity, disable scanning and use standard Android SDK APIs to control the camera.

The default DataWedge profile takes care of the scanning when other activities in the app come foreground. It might be useful to create another DataWedge Profile that caters to any specific scanning needs and associate it with the barcode scanning activity of the app.

### Disable DataWedge
**Control of barcode scanning hardware is exclusive**. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. 

**To disable DataWedge**:

&#49;. **Start DataWedge** and navigate to the Profiles list (if not shown by default).

&#50;. Tap on the "hamburger" menu and **select -> Settings**:
<img style="height:350px" src="datawedge_settings.png"/>
<br>

&#51;. **Uncheck the "DataWedge enabled" checkbox**. Control of scanner hardware is now returned to the system. 
<img style="height:350px" src="datawedge_enable-disable.png"/>
_The DataWedge Settings panel controls Profile import/export, logging and other general functions_. 
<br>


<!--

>>UNDER CONSTRUCTION 

To test the new ADF rule, open any app on the device that has a text field capable of accepting input and click in the field. Then scan the barcode below: 
<img style="height:150px" src="Figure_19_BarcodeSample.png"/>
A Code39 barcode with "129" in the starting position. 
<br>

&#49;. To scan, press and hold the device's Scan/Action button. Depending on the configuration, the red laser aiming pattern turns on to assist in aiming. Ensure that the barcode is within the area formed by the aiming pattern. The Left and Right LEDs light red to indicate that data capture is in process. The Left and Right LEDs light green, a beep sounds and the mobile computer vibrates, by default, to indicate the bar code was decoded successfully. 

The formatted data "000129X " (with a trailing space) appears in the text field. Scanning a Code 39 bar code of 1299X15598 does not transmit data (rule is ignored) because the bar code data did not meet the length criteria.
<img style="height:350px" src="Figure_20_FormattedData.png"/>
<br>

**Note**: When ADF data processing needs to find or replace non-printable characters such as control characters or extended ASCII characters, \xNN can be used to specify hex value of the character, or \uNNNN can be used to specify the Unicode value of the character to be processed by the ADF. For example, if the captured data contains the GS character (\x1D) and data needs to be separated by the GS character, the following ADF actions can be added to the ADF rule:

* **Data**: 8100712345(GS)2112345678
* **Actions**: Send upto (\x1D)
* **Skip ahead (1)**
* **Send remaining**

-------- 

COPIED (PARTIALLY EDITED) FROM FROM DEMO PAGE

## Programming Notes

###Overriding the Trigger Key
To override the trigger key in an application, create a profile for the application that disables the Barcode input. In the application, use standard APIs, such as onKeyDown() to listen for the KEYCODE_BUTTON_L1 and KEYCODE_BUTTON_R1 presses.

Capture Data and Taking a Photo in the Same Application
To be able to capture bar code data and take a photo in the same application:

Add two Activities in your application for barcode scanning and picture taking actions respectively. Create a DataWedge profile associated to the picture taking Activity in your application and disable scanning and use standard Android SDK APIs to control the Camera.

The default DataWedge profile takes care of the scanning when other activities in your application comes foreground. You might want to create another DataWedge profile that caters to any specific scanning needs, and associate it to the barcode scanning activity of your application.

Disable DataWedge on mobile computer and Mass Deploy
To disable DataWedge and deploy onto multiple mobile computers:

Touch  Home > DataWedge >  Menu > Settings.

Unselect the DataWedge enabled check box.

Export the DataWedge configuration. See Export Configuration File above for instructions.

See Configuration File Management above for instructions for using the auto import feature.



-->


