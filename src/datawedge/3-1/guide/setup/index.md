---
title: DataWedge Setup
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Overview

This guide covers the basic usage of DataWedge, which provides barcode scanning and processing services on Zebra devices. DataWedge sits between a user app and scanning hardware of a device, acquiring and processing barcode data and handing the data to the app in a generic format or by rules specified in advance using a DataWedge Profile. 

Profiles and Plug-ins are the basis for most DataWedge operations. A Profile contains information about how DataWedge should behave when providing scanning services for a particular application. Plug-ins allow input, output and processing capabilities to be added and controlled. Several Plug-ins are included with DataWedge that can be modified to suit individual needs. 

This guide covers DataWedge for Android; Windows features and usage may vary.  

<!-- DataWedge functions covered in this guide: 

* Using DataWedge with default settings
* Setting DataWedge as the default scanner for an app
* Creating Profiles to implement specific DataWedge features 
* Enabling/Disabling specific decoders as needed 
* Formatting output according to custom rules
* Working with plug-ins for input, output and processing
* Importing and exporting DataWedge settings 
* Restoring settings to factory defaults
* Remotely configuring DataWedge 
* Deploying DataWedge via MDM
* Importing and applying new settings at each launch 
--> 

Other DataWedge guides: 
* [DataWedge IP Output](../ipoutput)
* [DataWedge API for Android](../androidapi)
* [DataWedge Capture API](../capture)

**Note: Control of barcode scanning hardware is exclusive**. When DataWedge is active, Scanner and Barcode APIs of apps such as Enterprise Browser and others will be inoperative. Likewise, when an app such as Enterprise Browser controls the scanning hardware, other apps (including DataWedge) are locked out. It is therefore important to understand how to take control of a device's scanner hardware and, if necessary, release it to other apps when scanning is complete. This guide includes instructions for such operations. 

&#50;. <b>Bold text for command</b> then the rest of the instruction here.  
<img alt="DataWedge App in the Android Launcher" style="height:450px" src="datawedge_launcher.png"/>

<b>Note</b>: Formatting of how it's been done in other docs. 

##Profiles

Profiles contain information about how DataWedge should behave when providing scanning services for a particular application. 

Profile information consists of:

Associated application

Input plug-in configurations

Output plug-in configurations

Process plug-in configurations

Using profiles, each application can have a specific DataWedge configuration. For example, each user application can have a profile which outputs scanned data in the required format when that application comes to the foreground. DataWedge can be configured to process the same set of captured data differently based on the requirements of each application.

DataWedge includes the following visible and hidden pre-configured profiles which support specific built-in applications:

Visible profiles:

**Profile0 -** created automatically the first time DataWedge runs. Generic profile used when there are no user created profiles associated with an application.

**Launcher -** DataWedge configuration to be loaded when Launcher screen in the foreground.

**DWDemo -** This profile gets loaded when DataWedge Demo (DWDemo) application comes to the foreground. User can capture data to the DWDemo application.

Hidden profiles (not shown to the device):

**RD Client -** provides support for MSP.

**MSP Agent -** provides support for MSP.

**MspUserAttribute -** provides support for MSP.

**Camera -** disables scanning when the default camera application is in foreground.

**RhoElements -** disables scanning when RhoElements is in foreground.

Profile0
Profile0 can be edited but cannot be associated with an application. That is, DataWedge allows manipulation of plug-in settings for Profile0 but it does not allow assignment of a foreground application. This configuration allows DataWedge to send output data to any foreground application other than applications associated with user-defined profiles when Profile0 is enabled.

Profile0 can be disabled to allow DataWedge to only send output data to those applications which are associated in user-defined profiles. For example, create a profile associating a specific application, disable Profile0 and then scan. DataWedge only sends data to the application specified in the user-created profile. This adds additional security to DataWedge enabling the sending of data only to specified applications.

##Plug-ins

A plug-in is a software module utilized in DataWedge to extend its functionality to encompass technologies such as bar code scanning. The plug-ins can be categorized into three types based on their operations:

Input Plug-ins

Output Plug-ins

Process Plug-ins

Input Plug-ins
An Input Plug-in supports an input device, such as a bar code scanner contained in, or attached to the mobile computer. DataWedge contains base plug-ins for these input devices.

Bar Code Scanner Input Plug-in

The Bar Code Scanner Input Plug-in is responsible for reading data from the integrated bar code scanner and supports different types of bar code readers including laser, imager and internal camera. Raw data read from the bar code scanner can be processed or formatted using Process Plug-ins as required. DataWedge has built-in feedback functionality for the bar code scanner to issue user alerts. The feedback settings can be configured according to user requirement.

### MSR Input Plug-in

The MSR Input Plug-in is responsible for reading data from the integrated MSR reader or attached Scan/MSR Module. Raw data read from the bar code scanner can be processed or formatted using Process Plug-ins as required.

SimulScan Input Plug-in

The SimulScan Input Plug-in is responsible for capturing data from a form through Simultanious Scanning (SimulScan) capabilities available in the device. When form is captured according to the set SimulScan template data can be processed or formatted using Process Plug-ins as required.

Note    DataWedge will concatenate all the text data in to a single string and proceesing will be done on the concatenated string.
Process Plug-ins
Process Plug-ins are used in DataWedge to manipulate the received data according to the requirement, before sending to the foreground application via the Output Plug-in.

Basic Format Process Plug-in

The Basic Format Plug-in allows DataWedge to add a prefix and/or a suffix to the captured data before passing it to an Output Plug-in.

Advanced Format Process Plug-in

The Advanced Format Plug-in allows DataWedge to add a prefix and/or a suffix to the captured data before passing it to an Output Plug-in.

Output Plug-ins
Output Plug-ins are responsible for sending the data from Input Plug-ins to a foreground application on the ET1.

Keystroke Output Plug-in

The Keystroke Output Plug-in collects and sends data received from the Input Plug-in to the foreground applications by emulating keystrokes.

Intent Output Plug-in

The Intent Output Plug-in collects and sends data received from the Input Plug-ins to foreground applications using the Android Intent mechanism.

IP Outut Plug-in

The IP Output Plug-in allows captured data to be sent over an IP network to a specified IP address and port using either TCP or UDP transport protocols.

Profiles Screen

To launch DataWedge, touch  Home > DataWedge. The DataWedge Profiles screen appears. By default, three profiles appear:

Profile0

## Launcher

DWDemo

Profile0 is the default profile and is used when no other profile can be applied.

DataWedge Profiles Screen
Figure 1. DataWedge Profiles Screen
Profile names are color coded. Enabled profiles are white and disabled profiles are gray.

To configure a profile touch the profile name.

Profile Context Menu
Touch and hold a profile to open a context menu that allows additional actions to be performed on the selected profile.

Profile Context Menu
Figure 2. Profile Context Menu
The profile context menu allows the profile to be edited (same as just touching a profile), renamed, deleted or cloned.

Note    When a profile is cloned the application association will be empty in the new profile. This is according to the rule that two profiles cannot be associated with same application. All other settings will be identical.
Options Menu
Touch  Menu to open the options menu.

DataWedge Options Menu
Figure 3. DataWedge Options Menu
The menu provides options to create a new profiles, access to general DataWedge settings and DataWedge version information.

Disabling DataWedge
To disable DataWedge:

Touch  Home > DataWedge

Touch  Menu > Settings

Touch DataWedge enabled. The green check disappears from the checkbox indicating that DataWedge is disabled.

Create a New Profile

To create a new profile:

Touch  Home > DataWedge. The DataWedge Profiles window appears.

Touch  Menu > New profile.

In the dialog box, enter a name for the new profile. It is recommended that profile names be unique and made up of only alpha-numeric characters (A-Z, a-z, 0-9).

New Profile Name Dialog Box
Figure 4. New Profile Name Dialog Box
Touch OK. The new profile name appears in the DataWedge profiles screen.

Configuring a Profile

To configure the Profile0 or a user-created profile, touch the profile name. The Profile configuration screen appears.

Profile Configuration Screen
Figure 5. Profile Configuration Screen
Profile enabled - Enables or disables this profile. A check in the checkbox indicates that the profile is enabled.

Applications
Use the Applications option to associate applications with this profile.

Associated Apps

User created profiles should be associated with one or more applications and its activities.

Touch Associated apps. A list of applications/activities associated with the profile displays. Initially the list does not contain any applications/activities.

Associated Apps Screen
Figure 6. Associated Apps Screen
Touch  Menu > New app/activity. The Select application menu appears.

Select Application Menu
Figure 7. Select Application Menu
Select the desired application from the list. The Select activity menu appears.

Select Activity Menu
Figure 8. Select Activity Menu
Selecting the activity adds that application/activity combination to the associated application list for that profile. Selecting * as the activity results in all activities within that application being associated to the profile. During operation, DataWedge will try to match the specific application/activity combinations with the foreground application/activity before trying to match the general application/* combinations.

Touch  Back .

Selected Application/Activity
Figure 9. Selected Application/Activity

## Data Capture Plus (DCP)
Data Capture Plus (DCP) is a DataWedge feature that enables the users to trigger the scanner by clicking on a designated part of the device screen. DataWedge will respond to the click in a similar manner as it responds to the hardware trigger button press.

The DataWedge profile configuration screen allows the user to configure how the DCP should appear on the screen once the particular profile is loaded. The DCP is in the disabled status by default. If the user checks the option to enable the DCP it will add five additional parameters to the preference screen for configuring the DCP as shown in following figure.

DCP Preferences
Figure 10. DCP Preferences
Following are the configurable parameters for the profile:

Dock button on - Allowed floating DCP docking policy. Restricted to the right hand side, to the left hand side or allowed in both sides of the screen are the available options.

Start in - Initial DCP appearance mode. Button mode, full screen mode or button only mode are the available options.

Top of button range - The top of the range the user is allowed to move the DCP, given as a percent of the screen height.

Bottom of button range - The bottom of the range the user is allowed to move the DCP, given as a percent of the screen height.

Drag Detect Time - The DCP wait interval in milliseconds before firing the scanner. This allows the user to drag the button without firing the trigger.

These parameters can be customized to change the look and feel of the DCP.

Note    
For the users who are familiar with the Data Capture Panel in previous DataWedge versions, the corresponding new parameters of Data Capture Plus are shown in the below table. Some parameters are not migrated to the new component.

Table 1. Mapping
<caption class="title">Table 1. Mapping</caption>
<col width="50%" />
<col width="50%" />
<thead>
<tr>
<th align="left" valign="top">Old Parameter</th>
<th align="left" valign="top">New Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left" valign="top"><p class="table">Show</p></td>
<td align="left" valign="top"><p class="table">Enabled</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Start state</p></td>
<td align="left" valign="top"><p class="table">Start in</p></td>
</tr>
</tbody>
</table>
</div>
</td>
</tr></table>
</div>

Note    The DCP will not appear during the profile load if the scanner is disabled for the profile even though the enabled option is set.
Minimized DCP in DataWedge Demo app
Figure 11. Minimized DCP in DataWedge Demo app
Changing Settings At Runtime

The DCP can be maximized by dragging if it is pre-configured to minimized state. Changing the state at runtime does not save it to the profile. Also the vertical position and the docking side in device screen can be adjusted by dragging the minimized DCP. Note that these two settings will be saved for the given profile when changed at the runtime.

Maximized DCP in DataWedge Demo app
Figure 12. Maximized DCP in DataWedge Demo app
Start scanning with DCP
To scan a barcode DCP should be touched and hold to emit the scan beam or start the camera viewfinder. Releasing the DCP will stop the scan beam or close the viewfinder.

Note    When using camera scanner in some instances quick touch and release on the DCP could start the viewfinder. Press the back button could close the viewfinder if it was not intended.
Barcode Input
Use the Bar Code Input options to configure the Bar Code Scanner Input Plug-in for the profile.

Enabled

Enables or disables this plug-in. A check in the checkbox indicates that the plug-in is enabled.

## Scanner Selection

Configures which scanning device to use for data capture.

Auto - Automatically determines the best scanning device. If a Scan Module or Scan/MSR Module is installed on the mobile computer, then the 2D imager is selected. Otherwise the camera is selected.

Camera Scanner - Scanning is performed with the rear-facing camera.

2D Imager - Scanning is performed using the installed Scan or Scan/MSR module.


## Supporting Bluetooth Scanner

DataWedge supports the RS507 Bluetooth Scanner. To configure RS507 in DataWedge profile, it must be paired and connected with the mobile computer. After the first connection the Bluetooth Scanner can be enabled and disabled in the profile configuration even if it is disconnected with the device. But it must be connected with the device to configure other scanner settings such as decoders, Reader params etc…

While DataWedge was working in auto scanner selection mode, and internal scanner is working at the time of RS507 get connected, DataWedge will continue to work with the currently enabled scanner. In the next profile change RS507 gets enabled if profile has auto or Bluetooth Scanner as the scanner selection.

Auto Scanner Selection and Battery Swap

If the Scanner Selection is set to auto and RS507 was enabled prior to the battery swap, once the RS507 gets re-connected with the device after the battery swap it starts working with DataWedge. If RS507 does not get connected with the mobile computer after the battery swap the current default scanner will continue to work with DataWedge.

Keep Enabled on Suspend

This feature is enabled only for the RS507 scanner. If enabled DataWedge will keep it enabled during the device suspend. If the feature is not supported for the selected scanner the option will be disabled. When the RS507 trigger is pressed the device will wake from the suspend.

Note    
Enabling this option could drain the device battery faster when device is in the suspended mode.

MSR Input
Use MSR Input options to configure the MSR Input Plug-in for the profile.

Enabled

Enables or disables this plug-in. A check in the checkbox indicates that the plug-in is enabled.

SimulScan Input
SimulScan Input plug-in can be used to capture data in documents using SimulScan capability available in the Symbol Technologies devices. Use the SimulScan Input options to configure the SimulScan Input Plug-in for the profile.

SimulScan Preferences
Figure 13. SimulScan Preferences
Enabled

Enables or disables this plug-in. A check in the checkbox indicates that the plug-in is enabled. When SimulScan plug-in enabled Barcode Input plug-in gets disabled if it is already enabled in the profile configuration.

Template selection

Template selection option can be use to set the required SimulScan template for the profile configuration. There will be four templates included with DataWedge. Default template for SimulScan input plug-in is "Default Default-DocCap+Optional-Barcode.xml".

Default-DocCap+Optional-Barcode.xml(default) - Capture the form as a picture and optionally decode a barcode if available in the form.

Default-DocCap+Required-Barcode.xml - Capture the form and decode available barcode.

Default-One-Barcode.xml - Decode a single barcode in the form and returns a single data region as the output.

Default-Two-Barcodes.xml - Decode two barcodes in a form and return the data as two data regions.

To use customized templates, template xmls must be copied to the /enterprise/device/settings/datawedge/templates directory. Templates modified after the configuration is done.

Region separator

Region separator option can be used to configure a separator character for SimulScan region data. When there are multiple text regions the region separator will be inserted between two data strings. By default no separator will be set. Possible values for region separator are None, Tab, Line feed and Carriage return. Region separator can be used with the Keystrokes plug-in Action key character setting to dispatch SimulScan region data to separate text fields.

Note    Barcode, OCR and OMR regions are considered as text regions in DataWedge. When using keystroke output and IP output, only text region data will get dispatched to the foreground application and the remote server respectively.
Note    Picture region data can only be retrieved through Intent output plug-in.
Keystroke Output
Use to configure the Keystroke Output Plug-in for the profile.

Enabled - Enables or disables this plug-in. A check in the checkbox indicates that the plug-in is enabled.

Action key character - Enabled decoding a special characters embedded within a bar code or MSR data.

Multi byte character delay - Inter character delay for multi byte characters specified in milliseconds. This parameter is introduced to avoid some problems occurred while sending Unicode and multi byte characters to Android web browser. The value is set to zero by default. If you see any errors in the delivery of keystrokes adjust the delay to a higher value e.g. 100 ms.

None - action key not injected

Tab - inject action key in place of a ASCII Tab (0x09) character

Line feed - inject action key in place of ASCII LF (0x0A) character

Carriage return - inject action key in place of ASCII CR (0x0D) character

Advanced data formatting - is a way to customizing data before transmission. Use advanced data formatting (ADF) to edit scan data to suit requirements.

Enable - Enables or disables ADF. A check in the checkbox indicates that ADF is enabled (default - disabled).

Rules - ADF uses rules to customize data. These rules perform detailed actions when the data meets certain criteria. One rule may consist of single or multiple criteria applied to single or multiple actions. See Generating Advanced Data Formatting Rules below for more information.

Basic data formatting - allows configuration of any data formatting for the related Output Plug-in for the profile. When the plug-in is disabled any data is passed on without modification.

Enabled - Enables or disables Basic Data Formatting. A check in the checkbox indicates that it is enabled (default - enabled).

Prefix to data - Add characters to the beginning of the data when sent.

Suffix to data - Add characters to the end of the data when sent.

Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).

Send as hex - Set to send the data in hexadecimal format. A check in the checkbox indicates that this setting is enabled (default - disabled).

Send TAB key - Set to append a tab character to the end of the processed data. A check in the checkbox indicates that this setting is enabled (default - disabled).

Send ENTER key - Set to append an Enter character to the end of the processed data. A check in the checkbox indicates that this setting is enabled (default - disabled).

Intent Output
Allows configuration of the Intent Output Plug-in for the profile. The Intent Output Plug-in allows the captured data to be sent to an application in the form of an implicit Intent. Refer to the Android Developer web site for more information, http://developer.android.com.

Enabled - Enables or disables this plug-in. A check in the checkbox indicates that the plug-in is enabled (default - disabled).

Intent action - Enter the Intent Action name (required).

Intent category - Enter the Intent Category name (required).

Intent delivery - Select the method by which the intent is delivered:

Send via StartActivity

Send via startService

Broadcast intent

Receiver foreground flag - Set receiver foreground flag (Intent.FLAG_RECEIVER_FOREGROUND) in the broadcast intent. This flag can be set only when Intent delivery is set to Broadcast intent. NOTE: This flag needs to be enabled when broadcast intents are not received to the application for sometime after rebooting the device.

Advanced data formatting - is a way to customizing data before transmission. Use advanced data formatting (ADF) to edit scan data to suit requirements.

Enable - Enables or disables ADF. A check in the checkbox indicates that ADF is enabled (default - disabled).

Rules - ADF uses rules to customize data. These rules perform detailed actions when the data meets certain criteria. One rule may consist of single or multiple criteria applied to single or multiple actions. See Generating Advanced Data Formatting Rules below for more information.

Basic data formatting - allows configuration of any data formatting for the related Output Plug-in for the profile. When the plug-in is disabled any data is passed on without modification.

Enabled - Enables or disables Basic Data Formatting. A check in the checkbox indicates that it is enabled (default - enabled).

Prefix to data - Add characters to the beginning of the data when sent.

Suffix to data - Add characters to the end of the data when sent.

Send data - Set to transfer the captured data to the foreground application. Disabling this option prevents the actual data from being transmitted. However, the prefix and suffix strings, if present, are still transmitted even when this option is disabled (default - enabled).

Send as hex - Set to send the data in hexadecimal format. A check in the checkbox indicates that this setting is enabled (default - disabled).

Send TAB key - Set to append a tab character to the end of the processed data. A check in the checkbox indicates that this setting is enabled (default - disabled).

Send ENTER key - Set to append an Enter character to the end of the processed data. A check in the checkbox indicates that this setting is enabled (default - disabled).

Intent Overview

The core components of an application (its activities, services, and broadcast receivers) are activated by intents. An intent is a bundle of information (an Intent object) describing a desired action - including the data to be acted upon, the category of component that should perform the action, and other pertinent instructions. Android locates an appropriate component to respond to the intent, launches a new instance of the component if one is needed, and passes it the Intent object.

Components advertise their capabilities, the kinds of intents they can respond to, through intent filters. Since the Android system must learn which intents a component can handle before it launches the component, intent filters are specified in the manifest as <intent-filter> elements. A component may have any number of filters, each one describing a different capability.

For example, if the manifest contains the following:

<intent-filter . . . >
        <action android:name="android.intent.action.DEFAULT" />
        <category android:name="android.intent.category.MAIN" />
          . . .
</intent-filter>
In the Intent output plug-in configuration, the Intent action would be:

android.intent.category.DEFAULT
and the Intent category would be:

android.intent.category.MAIN
The Intent delivery option allows the method by which the intent is delivered to be specified. The delivery mechanisms are Send via startActivity, Send via startService or Broadcast intent.

The decode related data added to the Intent's bundle can be retrieved using the Intent.geStringtExtra() and Intent.getSerializableExtra() calls, using the following String tags:

String LABEL_TYPE_TAG = "com.symbol.datawedge.label_type";
String contains the label type of the bar code.

String DATA_STRING_TAG = "com.symbol.datawedge.data_string";
String contains the output data as a String. In the case of concatenated barcodes, the decode data is concatenated and sent out as a single string.

String DECODE_DATA_TAG = "com.symbol.datawedge.decode_data";
Decode data is returned as a list of byte arrays. In most cases there will be one byte array per decode. For barcode symbologies that support concatenation e.g. Codabar, Code128, MicroPDF, etc., the decoded data is stored in multiple byte arrays (one byte array per bar code). Clients can get data in each byte array by passing an index.

The MSR related data added to the Intent’s bundle can be retrieved using the Intent.getStringtExtra() and Intent.getSerializableExtra() calls, using the following String tags:

String MSR_DATA_TAG = "com.symbol.datawedge.msr_data";
The data from the MSR tracks is concatenated and sent out as a byte array. The Start/end sentinels and track separators are included as configured.

String MSR_TRACK1_TAG = "com.symbol.datawedge.msr_track1";
MSR track 1 data is returned as a byte array.

String MSR_TRACK2_TAG = "com.symbol.datawedge.msr_track2";
MSR track 2 data is returned as a byte array.

String MSR_TRACK3_TAG = "com.symbol.datawedge.msr_track3";
MSR track 3 data is returned as a byte array.

String MSR_TRACK1_STATUS_TAG = "com.symbol.datawedge.msr_track1_status";
MSR track 1 decode status as an Integer where 0 indicates a successful decode.

String MSR_TRACK2_STATUS_TAG = "com.symbol.datawedge.msr_track2_status";
MSR track 2 decode status as an Integer where 0 indicates a successful decode.

String MSR_TRACK3_STATUS_TAG = "com.symbol.datawedge.msr_track3_status";
MSR track 3 decode status as an Integer where 0 indicates a successful decode.

The SimulScan related data added to the Intent’s bundle can be retrieved using the Intent.getStringtExtra(), Intent.getSerializableExtra(), Intent. getParcelableArrayListExtra(), Bundle.getInt(), Bundle.getString(), and Bundle.getByteArray() calls, using the following String tags:

String SIMULSCAN_TEMPLATE_NAME_TAG = "com.symbol.datawedge.simulscan_template_name";
The name of the template which used by SimulScan to capture the form.

String SIMULSCAN_REGIONS_BUNDLE_TAG= "com.symbol.datawedge.simulscan_region_data";
Return an array of Bundles where each bundle contains data and information about a region and the form.

String SIMULSCAN_REGION_NAME_TAG = "com.symbol.datawedge.simulscan_region_name";
Returns the region name of the bundle object for reach region. To get the region name Bundle.getString() should be called.

String SIMULSCAN_REGION_ID_TAG = "com.symbol.datawedge.simulscan_region_id";
Returns the region id of the bundle object for reach region. Region id is an integer and can be retrieved by calling Bundle.getInt ().

String SIMULSCAN_REGION_TYPE_TAG = "com.symbol.datawedge.simulscan_region_type";
Returns the region type of the bundle object for reach region. Region type is an string and can be retrieved by calling Bundle.getString (). Possible return values are barcode, ocr, omr, picture and form.

barcode - region is a barcode

ocr - region is an OCR (Optical Character Recognition) region. i.e name or address

omr - region is an OMR (Optical Mark Recognition ) region. i.e checkbox, radio button.

picture - region is a picture. Picture data will be in the JPEG format.

form - form type specify that the bundle contains the picture of the captured form. Form image will be in the JPEG format.

String SIMULSCAN_REGION_STRING_DATA= "com.symbol.datawedge.simulscan_region_string_data";
Returns the string data of the region. String data comes with barcode, ocr and omr data.

String SIMULSCAN_REGION_BINARY_DATA= "com.symbol.datawedge.simulscan_region_string_data";
Returns the data of the region in the form of byte array. Binary data comes only for picture regions and the form image. Both picture and form data can be load in to a bitmap and display in the application.

Most scanning applications might want the user to be able to decode data and for that decode data to be sent to the current activity but not necessarily displayed. If this is the case, then the activity needs to be marked as "singleTop" in its AndroidManifest.xml file. If your activity is not defined as singleTop, then on every decode, the system will create another copy of your Activity and send the decode data to this second copy.

Finally there will be a configuration option for each process plug-in so that the process plug-in can be configured specifically for the intent output, which in this case is the basic data formatting process plug-in.

IP Output
Use the IP Output options to configure the IP Output Plug-in for the profile.

Enabled - Enables or disables this plug-in. A check in the checkbox indicates that the plug-in is enabled (default - disabled).

Remote Wedge - Enables this plug-in to be used with IPWedge. Make sure this option is unchecked when not using IPWedge. See IPWedge below. (default - enabled).

Protocol - Select the transport protocol (default - TCP)

TCP

UDP

IP address - Enter the IP address of the host (default - 0.0.0.0)

Port - Enter the port number (default - 58627)

IPWedge

IPWedge is a PC application that can be easily configured to retrieve data sent over a network by the DataWedge IP Output Plug-in on a Symbol device.

If you intend to use IP output in conjunction with IPWedge, download the IPWedge installation package from Symbol’s Enterprise Mobility support site at http://support.symbol.com/support/product/DEV_SW_TOOLS.html to the host PC.

Please see the IPWedge user manual on how to install and configure on a PC.

Using IP output with IPWedge

In order to get IP output to send captured data to a remote computer that is installed with IPWedge configure following items:

Touch  Home > DataWedge.

Touch a DataWedge profile.

In IP output, touch Enabled.

Touch Protocol. Select the desired transport protocol.

Touch IP address. Enter the IP address of the host computer and then touch OK.

Touch Port. Enter the port number and then touch OK.

Using IP Output Plug-in without IPWedge

IP output plug-in can be used to send captured data from DataWedge application to remote device or PC without IPWedge. At the data receiving end, the PC or Mobile device should have a client application, that listens to TCP or UDP data comes from configured port and IP address in IP Output plug-in. In order to get IP output plug-in configured to send captured data to a remote computer or device, follow these steps.

Touch  Home > DataWedge.

Touch a DataWedge profile.

In IP output, touch Enabled.

Touch Remote Wedge to disable the Remote Wedge option.

Touch Protocol. Select the desired transport protocol.

Touch IP address. Enter the IP address of the host computer and then touch OK.

Touch Port. Enter the port number and then touch OK.

