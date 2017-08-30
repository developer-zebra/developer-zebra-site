---
title: Feature Demo
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
---
## Overview
The Feature Demo application showcases some of the key capabilities of Enterprise Browser when running an enterprise application on Zebra devices. Enabling the demo app requires changes to the `Config.xml` file on the device that will run the app. These changes are shown in the Installation section below. See the [Config.xml Reference](../configreference) for more information. 

### Showcased Capabilities  
  * Barcode scanning
  * Image capture
  * Signature capture
  * Battery usage and signal indicators
  * Capturing key-presses
  * Changing and capturing screen orientations
  * Timer API functions
  * Enabling, disabling and orienting the hourglass ("screen loading" icon)

### Showcased HTML5 capabilities  
  * WebSQL
  * WebStorage

## Installation  

### Set up a Local Web Server on the Device  
The Feature Demo Application for Enterprise Browser pulls in demo files using uses `AJAX`, which requires a web server to be running on the device. 

**Enable the on-device web server**:

&#49;. Locate and prepare to edit the `Config.xml` file on the device that will be running the Feature Demo: 

**Path to Config.xml file**: 
  * **On Android devices**: `/sdcard/Android/data/com.symbol.enterprisebrowser/Config.xml`
  * **On Windows devices**: `\Program Files\EnterpriseBrowser\Config\Config.xml`

**Note**: The [Config Editor Utility](../ConfigEditor) can be used for this task. 

&#50;. In the `Config.xml` file, locate the `<WebServer>` node and set the values as shown below:  

      
    :::xml
    <Configuration>
    ...
      <WebServer>
       <Enabled value="1" />
       <Port value="8082" />
       <WebFolder value="/fd/" />
       <Public value="1" />
      </WebServer>
    ...


&#51;. In `Config.xml` specify the start page value as below, save changes and push file to the device.   
    
    :::HTML
      <StartPage value="http://127.0.0.1:8082/feature-demo.html" name="Menu"/>

&#52;. Create a folder called `fd` (case sensitive) in the root of the device's SDCard. If it doesn't have an SDCard, create the folder at the root level of the device's internal memory.  

&#53;. From the computer with Enterprise Browser installed, copy the contents of `c:/EnterpriseBrowser/Feature-Demo` to the newly created `fd` folder.  

<img style="padding-left:40px;" src="http://i.imgur.com/Gk1rhab.png" width="600" height="480" border="10">

&#54;. On the device, launch the Enterprise Browser app. A screen similar to the image below appears, showing all Feature-Demo capabilities.   

<img style="padding-left:40px;" src="http://i.imgur.com/N63KwJq.png" width="380" height="600" border="10"> 

-----

## Demo Features
To try a specific feature, click on the "hamburger" menu icon at the top left and select it. To quickly exit the Feature Demo App, use the `X` at the top right. 

### Barcode Scanning  
Demonstrates use of the most common [Barcode APIs](../../api/barcode/):

**Enumerate –** scans the device for all capable barcode interfaces. These might include 2D imager, laser, and camera. Tap in a scanner type to Enable or Disable that scanner.  

**Enable –** enables the dedicated scanner button on the device. Press the hardware scan trigger and point it at a barcode, the decode information will be presented.   

**Disable –** disable the active barcode scanner.  

**Start –** activates the scanner in "soft trigger" mode. Scanner remains active until a barcode is decoded or a timeout occurs. This button is active only after tapping the Enable button. 

**Stop –** disables the soft trigger mode.  

**To Test the Scanner**:

1. Go to the Barcode section of the application.

2. Click **Enumerate** to be presented with a list of available scanners. 

3. Select a scanner to use. 

4. After selecting a scanner, click **Enable**. This will start the chosen scanner on the device.  

5. Press start and try scanning the image below:

<img style="padding-left:0px;" src="http://www.barcodesinc.com/generator/image.php?code=EB.Barcode%20Test&style=197&type=C128B&width=200&height=50&xres=1&font=3" width="380" height="100" border="10">  

When done correctly, the scan should return the following:

<img style="padding-left:0px;" src="http://i.imgur.com/vHrV660.png" width="380" height="600" border="10">  

-----

### Battery  
Demonstrates use of the most common [Battery APIs](../../api/battery/):  

**Show Icon –** displays a battery icon in the upper left-hand corner. Change parameters within the code to control more aspects of icon presentation and location.  

**Hide Icon –** hides the battery icon.  

**Start –** begins to monitor for battery status events. For example, when not being charged, battery level is displayed. 

**Stop –** stops monitoring for battery status events. 

-----

### Camera  
Demonstrates use of most common [Imager APIs](../../api/Imager/):  

**Show Camera –** activates the camera and allows a picture to be taken. Displays status information after performing the action. 

-----

### Hourglass  
Demonstrates use of the most common [Hourglass APIs](../../api/Hourglass/):  

**Show –** displays a "loading" indicator in the position specified in the "Left" and "Top" coordinates fields. If a position is not specified, the indicator is displayed in the center of the screen. 

**Hide –** hides the loading indicator.  

**Left –** controls the left coordinates of the screen display used to position the loading indicator. 

**Stop –** controls the top coordinate of the screen display used to position the loading indicator. 

-----

### Key Capture  
Demonstrates use of the most common [Key Capture APIs](../../api/keycapture/):  

**Capture Trigger –** displays an indicator when the hardware scanner button is pressed as well as the key code currently assigned to the scanner button.   
**Capture Keys –** displays the key code assigned to any hardware or software key that is pressed.

-----

### Screen  
Demonstrates use of the most common [Screen Orientation APIs](../../api/screenorientation/):  

**Left –** forces the device to rotate to a left-handed orientation.  

**Right –** forces the device to rotate to a right-handed orientation.  

**Upside Down –** forces the device to rotate to an upside-down orientation.

**Normal –** force the device to rotate to a normal orientation.  

**Auto Rotate –** toggles between auto-rotation enable/disable. 

-----

### Signal  
Demonstrates use of the most common Signals in the [Signal Indicators API](../../api/signalindicators):  

* **signalStrength**
* **essid**
* **macAddress**
* **adapterName**
* **dhcpServer**
* **dhcpStatic** (Windows Mobile only)
* **gateway**
* **ipAddress**
* **rssi**
* **subnetMask**
* **wins** (Windows Mobile only)

**Show Icon –** displays a Wi-Fi icon in the upper left-hand corner. Icon appearance and location can be configured by changing parameters within the code. 

**Hide Icon –** hides the Wi-Fi icon.  

**Start –** retrieves the current signal status. On Windows Mobile/CE devices, if a callback is provided to retrieve the signal, the signal will be called according to the specified refreshInterval. On Android, the callback will be invoked whenever there's a change in one of the signal values listed above.  

**Stop –** stops monitoring for Wi-Fi status events.  

**Status –** This section will be populated with the data that comes from the signal event upon a change in status. It will be displayed only after the "Start" button has been tapped.   
  
All callback information will be updated in the respective field(s) on the Signal Indicator page.

> **Note**: Monitoring for Signal events may interfere with other UI elements of the Feature Demo application when it attempts to display the updated information. To avoid this, press "Stop" to disable Signal-events monitoring before viewing other features.   

-----

### Signature Capture  
Demonstrates use of the most common [Signature APIs](../../api/signature/):

**Show –** displays a full-screen signature capture widget; uses the Color and Width properties (can be customized). When returning from this widget, the status of the event will be displayed along with the image of the signature (if the user pressed the OK button).

**Background Color -** enter a hex value string to specify the background color of the signature capture area. For example, changing it to `#FF0000` will result in a red background. 

**Pen Color -** enter a hex value string to specify the pen-stroke color for signature capture. For example, changing this value to #FF0000 will result in a red pen color. 

**Pen Width -** enter an integer value to specify the pen-stroke thickness (in pixels). 

-----

### Timer  
Demonstrates use of the most common [Timer APIs](../../api/Timer/):  

**Duration –** the length of time (in ms) an event will run. Must be specified before timer is started. 

**Start –** starts a timer to run the length of time specified in the Duration.

**Stop –** stops the timer.

**Status –** indicates whether a timer event is started or stopped. 

-----

### WebSQL  
Demonstrates basic functionality of the HTML5 WebSQL standards: 

**Input –** enter a string to be stored. 

**Output –** displays the data retrieved when tapping the "Fetch" button.  

**Store –** stores the value in the "Input" field into WebSQL.  

**Fetch –** retrieves the stored value from WebSQL.   

-----

### WebStorage  
Demonstrates the basic functionality of the HTML5 LocalStorage and SessionStorage APIs. This allows storage of basic Name/Value data pairs. 

**LocalStorage Input –** a string to be stored using LocalStorage; remains resident after the app is closed.

**LocalStorage Output –** displays the LocalStorage data retrieved when tapping the "Local Fetch" button.

**SessionStorage Input –** a string to be stored using SessionStorage; does not persist after the app is closed.

**SessionStorage Output –** displays the SessionStorage data retrieved when tapping the "Local Fetch" button.

**Local Store –** stores the value in the "LocalStorage Input" field into LocalStorage.

**Local Fetch –** retrieves the value from LocalStorage.

**Session Store –** stores the value in the "SessionStorage Input" field into SessionStorage.

**Session Fetch –** retrieve the value from SessionStorage.

-----

## Inspecting the Code  
When unzipping the contents of the Feature Demo file, the following folders and files appear:  

<img style="padding-left:20px;" src="http://i.imgur.com/rnm2E0R.png" border="10">
  
**Feature Demo contents**: 

`/apis` – folder containing individual `.html` files associated with each feature.

`/apis/<featurename>.html` – individual `.html` files with JavaScript to demonstrate usage of an API.

`/img` – folder containing icons and images used in the demo.

`ebapi-modules.js` – Enterprise Browser core JavaScript API library.

`elements.js` – JavaScript library used by apps that call RhoElements functions.

`rhoapi-modules.js` – JavaScript library used by apps that call RhoMobile functions.  

`feature-demo.html` – main application page; controls behavior of the Feature Demo application.

`style.css` – CSS file that controls the look and feel of the Feature Demo application.

To learn more from the Feature Demo application, examine the individual HTML files located in the `/apis` folder, particularly the `SCRIPT` blocks that contain the JavaScript for performing specific actions. 

-----

## Troubleshooting  
Still having trouble getting the Feature Demo to work? Try the following:  

* Check that the device has the latest available BSP from the [Zebra Support Portal](https://www.zebra.com/us/en/support-downloads.html).

* The Feature Demo relies on DataWedge, a service included with Zebra devices. To confirm that it's configured correctly, refer to the [DataWedge documentation](/datawedge) and the device's [Integration Guide](https://www.zebra.com/us/en/sitesearch.html?q=integration%20guide) for more information.

* If the device won't display the Feature Demo application screen, double-check that the &lt;StartPage&gt; parameter in the `Config.xml` on the device contains the correct path to the start page.

* Check the Settings panel on the device to ensure that Wi-Fi is enabled and connected.

-----

**Related Guides**: 

* **[Sample Apps](../samples)**
* **[Tutorials](../../tutorial)**
* **[Config.xml Reference](../configreference)**




