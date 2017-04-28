---
title: Advanced Settings
layout: guide.html
product: DataWedge
productversion: '6.3'
---
  
## Overview
This guide covers advanced DataWedge features such as the importing and exporting of Profiles and Configuration files, mass deployment of those files, and Advanced Data Formatting, which allows acquired data to be manipulated based on its contents. 

For this guide, a basic knowledge of DataWedge Profiles, Plug-ins and other concepts is required. If necessary, please see the [About](../about) and [Setup](../setup) guides for additional information. 

-----

FOR IMPORT AND EXPORT OF PROFILES, SEE DATAWEDGE SETTINGS

-----

## Sample Code 
The following sample Java code can be modified to suit individual needs. 


	    //NOTE: This Java code is for demo purposes only; it has not been checked for errors.
	    
	    InputStream fis = null;
	    FileOutputStream fos = null;
	    String autoImportDir = "/enterprise/device/settings/datawedge/autoimport/"
	    String temporaryFileName = "datawedge.tmp";
	    String finalFileName = "datawedge.db";

	    // Open the db as the input stream
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


-----

## Programming Notes

### Capture Data, Photos in One App
It is possible to take pictures and capture barcode data using the same application if the application was designed with this in mind. 

1. Add separate Activities in the app: one for barcode scanning and another for picture taking. 
2. Create a DataWedge Profile with the following settings: 
	* Associate the Profile with the picture-taking Activity
	* Disable scanning in the Profile
3. Use the standard Android-SDK APIs to control the camera
4. When the app is used for scanning, the default DataWedge profile will come into effect. 
5. For accessing specific decoders, processing rules or other special scanning needs, a second DataWedge Profile can be created and associated with the barcode scanning activity of the app.

### Disable DataWedge
**Control of barcode scanning hardware is exclusive**. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. 

**To disable DataWedge**:

&#49;. **Start DataWedge** and navigate to the Profiles list (if not shown by default).

&#50;. Tap on the "hamburger" menu and **select -> Settings**:
<img style="height:350px" src="datawedge_settings.png"/>
<br>

&#51;. **Uncheck the "DataWedge enabled" checkbox**. Control of scanner hardware is returned to the system. 
<img style="height:350px" src="datawedge_enable-disable.png"/>
<br>

To learn how to access DataWedge programmatically, see the [Data Capture API Guide](../api). 

<!--

>>UNDER CONSTRUCTION 

ANSWER:
Data will be sent upto X. (1299)
Since pad with zeros is set as 8, the length of the sending data will be adjusted to 8 by adding 0s to the beginning. (00001299). A space will be added at the end. Since it is a space you dont see it. I know we could have added a visible character there

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

-><><<M><>><-

COPIED (PARTIALLY EDITED) FROM FROM DEMO PAGE

## Programming Notes

### Overriding the Trigger Key

MY RE_WRITE: If it becomes necessary to override the scan trigger key in one or more applications, this can be accomplished by creating a DataWedge Profile that disables barcode input and associating the Profile with one or more applications. 

Use standard APIs such as `onKeyDown()` in the application to listen for the `KEYCODE_BUTTON_L1` and `KEYCODE_BUTTON_R1` presses.

###Overriding the Trigger Key
ORIGINAL: To override the trigger key in an application, create a profile for the application that disables the Barcode input. In the application, use standard APIs, such as onKeyDown() to listen for the KEYCODE_BUTTON_L1 and KEYCODE_BUTTON_R1 presses.

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


