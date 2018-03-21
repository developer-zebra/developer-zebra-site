---
title: Using ActiveEdge
layout: guide.html
product: ActiveEdge
productversion: '2.5'
---

## Overview

Zebra devices that ship with ActiveEdge “easy activation points” built into the right and left sides of the device allow users to quickly access applications or perform tasks such as barcode scanning with a single tap. Typically a user would be holding the device with one hand and moving either their thumb or finger to "activation points” strategically placed for easy access.

The ActiveEdge service detects when one of the activation points are touched and performs the pre-configured action:

<img alt="" style="height:350px" src="img1.jpg"/>

* Barcode scanning
* Open a “drawer” of applications to launch
* Launch a specific application or Android intent

-----

### ActiveEdge Zones

The ActiveEdge zones are two discreet “soft” tap areas that users would touch to perform the associated actions. To use the ActiveEdge Zones, the simply touch or tap the area of the zone and the associated action will be triggered. 

Each ActiveEdge Zone can be configured to perform the following actions

* Barcode Scanning
* Open a Drawer
* Launch an Application
* Launch an Intent

**NOTE**: The following are invalid combinations (left/right zones):
Drawer / Drawer

> There is no “Double-tap” or “Press and Hold” functionality at this time. The “Left” and “Right” ActiveEdge Zone will always remain the “Left” and “Right” zone whether the device is in Portrait Standard or Portrait Inversed mode. However, the zones will become inactive if the device is rotated to Landscape mode


-----

### Barcode Scanning

<img alt=""  src="img2.jpg"/>

When the ActiveEdge Zone is configured for barcode scanning, a "Soft Scann Trigger" intent is sent to DataWedge. DataWedge then activates the default scanner for scanning. The user must be continue to press the ActiveEdge zone to keep the scanner active until a barcode is read or the user wishes to cancel this action. After a barcode is read, DataWedge handles the processing based on the way DataWedge profiles are configured.

Typically, this means that the barcode data will be sent as keystrokes to the current application that is in the foreground. However an application can have a DataWedge profile configured to do something else with the data. If no foreground application is running, the “Launcher” DataWedge profile will be used if it is enabled. 

**Note**: Standard device rules apply with applications “competing” for the scanner. If an application currently has the scanner "locked", ActiveEdge scanning will not function (just as other applications would). In this case, pressing the ActiveEdge zone that has been configured for barcode scanning will result in no operation.

Equally, the ActiveEdge service shall not lock use of the scanner. When a button that is configured for barcode scanning is pressed, ActiveEdge will immediately release the scanner either after the barcode is read or the user releases the ActiveEdge zone.


-----

### Application Drawer

<img alt=""  src="img3.jpg"/>

When the ActiveEdge Zone is configured to open a drawer, a drawer will slide out and up to three applications will be accessible for launching.

* **Opening the drawer**: Tap the ActiveEdge zone to open the drawer. The drawer will always appear on top of any application that is running, including a "full-screen" application. The drawer will always be accessible when in the “open” state.
* **Closing the drawer**: Tapping on the "handle" of the drawer will close the drawer. Tapping elsewhere on the display while the drawer is open will not close the drawer.


-----
### Launching an Application

When the ActiveEdge Zone is configured to launch an application, the following will happen:

* The application icon of the associated application will be shown on tap-down and the application will be opened.
* The icon will be removed on tap-up when the ActiveEdge Zone is released. This is similar to how the Scanning option works: The barcode icon is shown for as long as the ActiveEdge Zone is pressed.

> Pressing the ActiveEdge Zone for a second time while the associated application is already in the foreground shall have no effect


-----

### Launching Intents

When the ActiveEdge Zone is configured to launch an intent, the following will happen:

* An Android icon will be shown on tap-down and the Intent will be sent.
* The icon will be removed on tap-up when the ActiveEdge Zone is released. This is similar to how the Scanning option works: The barcode icon is shown for as long as the ActiveEdge Zone is pressed.

> Each press of the ActiveEdge Zone will cause the Intent to be sent.

-----

## See Also

* [About ActiveEdge](../about)
* [Administrative Guide](../setup)
