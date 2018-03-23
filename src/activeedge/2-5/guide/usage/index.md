---
title: Using ActiveEdge
layout: guide.html
product: ActiveEdge
productversion: '2.5'
---

## Overview

ActiveEdge Touch Zones are customizable drawers that slide out from the left and right sides of the screen over any other application. 
<br>

With a single touch, ActiveEdge lets users: 

* **Scan a barcode**
* **Launch an app**
* **Launch a specific app activity**
* **Trigger an Android intent**

<img alt="" style="height:350px" src="active_edge_01.png"/>
<br>

An App Drawer can contain as many as three app icons (shown below), giving workers quick access to an organization's line-of-business apps:
<img alt="" style="height:350px" src="active_edge_02.png"/>
<br>

A Touch Zone also can invoke the device's barcode scanner (shown) or trigger an intent: 
<img alt="" style="height:100px" src="img2.jpg"/>
<br>

-----

QUESTIONS:

1. ActiveEdge settings panel change settings "regardless of whether the app is running?" 
CANNOT


2. Is the file name case sensitive? I've seen it as "ActiveEdgeConfig.XML" and "ActiveEdgeConfig.xml" (Raj- yes, case sensitive. Really? Not just a matter of matching the intent?)
YES

3. Is operation mode and black/white list the only settings not available to the panel? 
also LANUCHAPPLEFT, RIGHT (immed. launch app)

4. when used to scan, where does the data go and how is it processed (ActiveEdge profile?)? 
data goes into the firground app and is proceesed accorfing to the profile assoc with that ap. 

5. (from setup page ->) * LeftZone and Right Zone both set to "Drawer" (the end result of the settings will be used to verify, not what is in the XML file)
change to "verify the result byu looking at the settings panel" (raj- will also return an error)

6. The settings panel UI can be restored to user control by pushing an `ActiveEdgeConfig.xml` file containing a "Restore" Service Action to the device. This action returns ActiveEdge to its factory default settings.

-----

## Setting ActiveEdge Zones

ActiveEdge Touch Zones can be configured through the [ActiveEdge settings panel](../setup/#settingspanel or by an administrator pushing an XML file to the device. 

**IMPORTANT**: Once an XML configuration file is deployed to a device, the ActiveEdge settings panel can no longer be used to change settings on that device, only to display them. 


ActiveEdge Touch Zones are two discreet “soft” tap areas that users would touch to perform the associated actions. To use the ActiveEdge Zones, the simply touch or tap the area of the zone and the associated action will be triggered. 

Each ActiveEdge Zone can be configured to perform the following actions:

* **Activate the barcode scanner**
* **Open an App Drawer**
* **Launch an App**
* **Trigger an intent**

**NOTES**: 

* **Only one Touch Zone can contain an App Drawer** at a time. 
* **Use the ActiveEdge [Settings Panel](../setup/#settingspanel)** to configure Touch Zones. 
* **There are no “double-tap” or “press and hold” functions** for apps in the App Drawer. 
* **Touch Zones are active only in portrait mode**. 
* **Left and Right ActiveEdge Zones do not change** when device is inverted (upside down). 

-----

### Scan Barcode

When tapping an ActiveEdge Zone configured for barcode scanning, a [Soft Scan Trigger](/datawedge/latest/guide/api/softscantrigger/) intent is sent to [DataWedge](/datawedge), the Zebra scanning service that comes with all Zebra devices. Acquired data is handled according to settings configured in the ActiveEdge Profile (in DataWedge). If no ActiveEdge Profile is present, data is sent to Profile0 (the "Launcher" Profile), which passes the data (usually as keystrokes) to the foreground app. **See [DataWedge Profiles](/datawedge/latest/guide/profiles/) for more information**.  

<img alt="" style="height:100px" src="img2.jpg"/>

When DataWedge recieves the Soft Scan Trigger intent from ActiveEdge, it does the following: 

* Activates the scanner currently selected in DataWedge and attempts to acquire data.
	* If acquired, data is processed according to the ActiveEdge Profile, if any.
	* If no ActiveEdge Profile is configured, 
 	* 


* If no data is acquired, continue pressing the ActiveEdge Zone until data is acquired.

for scanning. The user must be continue to press the ActiveEdge zone to keep the scanner active until a barcode is read or the user wishes to cancel this action. After a barcode is read, DataWedge handles the processing based on the way DataWedge profiles are configured.

Typically, this means that the barcode data will be sent as keystrokes to the current application that is in the foreground. However an application can have a DataWedge profile configured to do something else with the data. If no foreground application is running, the “Launcher” DataWedge profile will be used if it is enabled. 

**Note**: Standard device rules apply with applications “competing” for the scanner. If an application currently has the scanner "locked", ActiveEdge scanning will not function (just as other applications would). In this case, pressing the ActiveEdge zone that has been configured for barcode scanning will result in no operation.

Equally, the ActiveEdge service shall not lock use of the scanner. When a button that is configured for barcode scanning is pressed, ActiveEdge will immediately release the scanner either after the barcode is read or the user releases the ActiveEdge zone.


-----

### App Drawer

<img alt=""  src="img3.jpg"/>

When the ActiveEdge Zone is configured to open a drawer, a drawer will slide out and up to three applications will be accessible for launching.

* **Opening the drawer**: Tap the ActiveEdge zone to open the drawer. The drawer will always appear on top of any application that is running, including a "full-screen" application. The drawer will always be accessible when in the “open” state.
* **Closing the drawer**: Tapping on the "handle" of the drawer will close the drawer. Tapping elsewhere on the display while the drawer is open will not close the drawer.


-----
### Launching an App

When the ActiveEdge Zone is configured to launch an application, the following will happen:

* The application icon of the associated application will be shown on tap-down and the application will be opened.
* The icon will be removed on tap-up when the ActiveEdge Zone is released. This is similar to how the Scanning option works: The barcode icon is shown for as long as the ActiveEdge Zone is pressed.

> Pressing the ActiveEdge Zone for a second time while the associated application is already in the foreground shall have no effect


-----

### Trigger an intent

When the ActiveEdge Zone is configured to trigger an intent, the following will happen:

* An Android icon is shown on tap-down and the intent is sent.
* The icon is removed on tap-up and the ActiveEdge Zone is released. This is similar the operation of the scanning option; the barcode icon is shown while the ActiveEdge Zone is touched and disappears upon release.

> Each press of the ActiveEdge Zone triggers a new intent.

-----

## See Also

* [About ActiveEdge](../about)
* [Administrative Guide](../setup)
