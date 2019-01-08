---
title: Device Management
layout: guide.html
product: Device Tracker
productversion: '1.0'
---

## Overview
Monitoring device presence and prevention of misplaced devices is important for smooth operational productivity. This section covers the procedures to organize, track, locate, and prevent misplaced devices.

## Locating Devices
An administrator tasks an associate to retrieve a misplaced device. The associate uses their device to determine the approximate area of the misplaced device based on the access point connected. Then use one or a combination of the following methods to locate the device:

1. Animated BLE (Bluetooth Low Energy) proximity indicator – Use the associate's device as a proximity indicator to locate the misplaced device. The indicator shows the distance (in real-time) of the associate's device in relation to the target device being found. As the associate physically approaches near the target device, the distance (in feet) is displayed on the screen. A color-coded visual indicator with animation contracts and expands as the associate moves closer or further away from the target.
2. Chirping Sound – Trigger a chirping sound to play on the target device. This is particularly helpful if the device is hidden. The volume level and sound duration can be adjusted in the server [Settings](../config).

> Wifi and Bluetooth must be enabled on both devices.

**Procedure to find a device:**

From the dashboard in the web portal, the administrator selects the device to be found within the table and sets it to the “To be found” state as follows:
1. Tick the checkbox for the device row.
2. Click on the Action menu and select “Set device: ‘To be found’”. 
3. Click “OK” on the confirmation message. The device status changes from "Active" to "To be found".

The associate assigned to search the device opens the Device Tracker client on their device and proceeds to locate the misplaced device: 
1. [Client] The Device Tracker client presents a list of devices that need to be found, including the device marked "To be found" by the admin<sup>[1]</sup>. 
2. [Client] Tap on the desired device to find. The **Device Details** screen appears providing information on the device including battery percent remaining and “Last Connected AP” to identify the access point (AP) zone where the device is located. 
3. [Client] Walk towards the AP zone. Tap **Go** button to begin the device search. <br>
[Admin] On the admin dashboard, the device changes state from "To be Found" to "Being Found". 
4. [Client] The BLE proximity meter appears in the device client showing the approximate distance (in meters) between the device conducting the search and the missing device.  The animation and color changes as the user moves closer (green) or further away (red) from the device being searched. 
<!-- **placeholder for image**
![img](SOH.jpg)
_Figure 1. SOH_ -->
5. [Client] Tap “Play Sound” to hear an audio sound on the misplaced device to further isolate the device location.  
6. [Client] Once found, tap **Device found** at the bottom of the screen. Some devices may require the user to scroll down the screen for the button to be visible.  
[Admin] On the dashboard, the device status changes from “Being found” to “Device has been found”. 
7. [Client] Tap “Yes” to the confirmation message to designate the device as found. <br>
[Admin] On the dashboard, the device status changes from “Being found” to "Found". 

Once the device is found, the admin can then take action to set the device back to the “Active” state to place back into the main device pool as follows:
1. Select the device in the dashcoard.
2. In the Action menu, select “Set device to: Active”. 
The device is moved out of the "Found" state into the "Active" state. 

**Cannot find device:** <br><br>
If the device cannot be located, in step 6 above tap on "Cannot find" and proceed to step 7 to tap "Yes" to the confirmation message. On the admin dashboard, the device status is changed from "Being found" to "Cannot find". 

<sup>[1]</sup> Note: Depending on when the device being searched for had last reported to the server, it may take at most the specified Reporting Frequency time (from Settings in the web portal) to elapse before the target device is listed in “Device to be found” table in the client app. Subsequently, once a device is in the “To be found” state, the reporting frequency is automatically changed to 30 seconds until the device has been found. For example, if Device A is flagged “To be found” and the following conditions exist: Reporting Frequency is set to 5 minutes and Device A reported to the server a few seconds ago (as seen in the Updated column on the dashboard), then 5 minutes need to elapse (the next time the device is reporting into the server) before the data is synchronized with the server to notify Device B that Device A is to be found, thereby listing Device A in the “Device to be found” table on the client app.

##Track Device Presence
The admin dashboard on the web portal monitors device tracking by providing information on: misplaced devices, devices that are being searched for, devices that have been found, and devices that cannot be found. For each device, the “Connected AP” friendly name provides a general location of where the device resides based on the AP the device is connected to. The connected AP is displayed both on the admin dashboard and Device Tracker client. 

##Prevent Misplaced Devices
Prevent devices from being misplaced by monitoring the low battery state so action can be taken by the administrator to charge the device prior to battery loss. Configure the “Low Power Alert Threshold %” in the Settings screen from the web portal to set the threshold value. When a device battery drops below this defined threshold, the device is listed in the Low Battery section in the admin dashboard. The admin can then initiate the device to be located by [marking the device "To be found"](./#locatingdevices).

##Device Tagging
Tag devices for easier organization and tracking. Refer to [Organize Devices](../admin/#organizedevices) in the Admin View.

##Friendly Names
Use of friendly names for devices allows for easier device identification. The same holds true for access point friendly names to quickly identify the device location based on the access point it is connected to. See [Device & Access Point Management](../config/#device&accesspointmanagement) in the Configuration section.

<br>

-----

## See Also

* [About Device Tracker](../about)
* [Install & Setup](../setup)
* [Admin View](../admin)
* [Configuration](../config)