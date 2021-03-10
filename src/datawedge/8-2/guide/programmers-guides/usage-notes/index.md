---
title: Usage Notes and Behavior
layout: guide.html
product: DataWedge
productversion: '8.2'
---

## Overview

This section discusses use of DataWedge and its behavior in particular circumstances.

-----

## Usage Notes

1. **When the device is suspended, it takes a few milliseconds to release all the resources.** DataWedge releases the resources once it receives the Screen Off notification. Until this notification is received, DataWedge continues to function (e.g. scanning) for a short period of time despite the device being suspended. 
2. **Selecting DataWedge as a keyboard or IME (Input Method Editor) from the Virtual Keyboard settings on the device does not display any graphical keyboard.** DataWedge keyboard is only for internal use of DataWedge. DataWedge should not be selected as the default IME, otherwise unexpected behavior can occur.
3. **After a device reboot, DataWedge starts after receiving the LOCKED_BOOT_COMPLETED intent.** Calling DataWedge intent APIs before the LOCKED_BOOT_COMPLETED intent may cause unexpected behavior as DataWedge is still not started yet. Calling DataWedge intent APIs soon after receiving the LOCKED_BOOT_COMPLETED intent may also cause unexpected behavior as DataWedge may still be in the initialization process. It is recommended to wait for a few seconds after receiving the LOCKED_BOOT_COMPLETED intent before calling any DataWedge intent APIs. 
4. **Delay in scanning after a device reboot**. DataWedge requires a brief period of time to initialize after device reboot due to waiting for a response to be received from the initialization of the scanning subsystem, causing scanning to be inactive from DataWedge during this time frame.
5. **When Data Capture Plus icon is displayed by DataWedge on top of another application,** Android displays a silent notification in the notification area. Users can hide the Data Capture Plus icon by tapping on this notification and disabling the “Allow display over other apps” option. If a user decides to disable this option, even though Data Capture Plus is enabled in DataWedge, it does not display on the screen.
6. **On Android 10 devices, although the DataWedge icon is visible, DataWedge is not supported with Android work profile.**

-----

## Multi-User Support

DataWedge supports the use of multiple Android user accounts on a single device, enabling separate user profiles to maintain data privacy. 

Features and functionality:
* **If DataWedge is enabled, its functionality applies only for the active user** - Each user has a separate DataWedge process running. DataWedge usage and functionality only applies for the active user.
* **Any DataWedge profile change takes into effect globally across all users** - A DataWedge configuration or profile change by a user (through DataWedge UI or profile import) applies to all users regardless of which user is logged in when the change is made. For example, if User A makes a change to a profile, User B sees the change in the same profile. The configuration file is stored in a location (by default /enterprise/device/settings/datawedge/config/datawedge.db) where the DataWedge process across all users utilize the same configuration file.
* **Camera scanning functions only for the primary (admin) user** - Camera scanning is not available for secondary (non-primary) users. 
* **Bluetooth scanner disconnects when switching between primary user and other users** - This applies to profiles which have a Bluetooth scanner enabled. If the primary user is active, when switching to a different user with an active profile that also enables a Bluetooth scanner, the Bluetooth scanner disconnects and does not automatically re-connect to the device. The non-primary user needs to press the reset button on the Zebra Bluetooth scanner to reconnect, even if it shows that the Bluetooth scanner is connected to the device. 
* **No external SD card access** - If multiple Android user accounts exist, users cannot access the external SD card. This prevents the ability to export or import the Datawedge configuration database files from the SD card. 
* **Limited folder access** - Each user profile has its own folder structure that is not accessible from a different user. Therefore, a user cannot access the exported DataWedge configuration database of another user, preventing the ability to import/export configurations across users.
* **"DataWedge not ready" message after switching users following device reboot** - When switching from a primary user to a secondary user for the first time after reboot, after attempting to open DataWedge or DWDemo the message "DataWedge not ready" may display. There could be a delay since DataWedge does not start until the BOOT_COMPLETED intent is received. 
* **Multiple scanners** - Use of [multiple scanners](../input/barcode/#scannerselection) with multiple Android user accounts may result to unexpected behavior.

-----

