---
title: Using RxLogger
layout: guide.html
product: RxLogger
productversion: '5.4'
---

## Overview

RxLogger was initially developed to simplify patient data collection by healthcare workers as they make their rounds through a facility. This process often involves a computer wheeled from room to room on a cart, with the worker manually entering patient data using the keyboard. The RxLogger solution saves trips to the keyboard by sending collected data to the computer as keystrokes over Bluetooth. 

-----

### FROM GERI's USER GUIDE
(unedited)
<!-- 
To use RxLogger:
??? This section was updated based on Miriam’s comments in the PDF she sent. Please review this entire section as I don’t have the apps or a mobile computer.
On the target PC, launch the RxLogger PC Wedge business application that will receive data acquired from the mobile device and place the cursor in the appropriate field.

NOTE The receiving app must remain in the foreground.

On the mobile computer, launch the RxLogger application.
Using the mobile computer, scan the barcode in the user interface on the target PC to establish connectivity to the PC.
On the mobile computer, check the RxLogger user interface to confirm the Bluetooth connection was established.
Launch the Line of Business application ???which app is this?. Place the cursor in the target input field to which scanned data should be populated.
On the mobile computer, select the profile to be used for the scanning work flow.
Scan the desired work flow barcode(s) using the mobile device. The data scanned by the mobile computer displays in the scan data field.

NOTE The fact that the data displays does not mean the data was received by the PC. ???not sure what this means
On the target PC always confirm that the scan data was received and that it populated as desired into the target input field. If the cursor was moved or another application appeared in the foreground of the PC, the data does not populate into the intended field on the line of business application.

Acquired data is sent as keystrokes to the PC. The scanned data displays (in Scanned Data field of the application) on the device. A blue check mark indicates successful transmission of the data to the PC.
???Comment from Miriam: Based on the handshake implementation and what is displayed on the UI,

the documentation should call out what the user should look for in terms of confirmation that the data was transmitted and received at the connected PC...need to know what this will be.

NOTE The user should always validate that the data was delivered and populated into the intended input field on the PC. .

Figure 11    Successful Scan

To continue scanning data, repeat Step 5 through Step 8. Before scanning, confirm that the mobile computer is still connected via Bluetooth to the target PC. If the mobile computer goes out of range of the PC or loses connection due to a timeout, a message displays indicating that the mobile device is disconnected from the PC.

NOTE The disconnect message may not appear immediately.

Figure 12    Device is Disconnected from PC

If a barcode is scanned without an active connection to the PC, an alert dialog displays and data is not sent. A red “x” indicates the failure. However, scanned data is displayed in the Scanned Data field of the application.
Figure 13    Device Connection Error

While running, RxLogger PC Wedge is available in the system tray. The system administrator can enable and disable RxLogger (disconnecting the device from the PC), display the pairing barcode to connect (or reconnect) with a device, view the app version and Bluetooth MAC address, and exit the app (and stop the service).
Figure 14    RxLogger PC Wedge System Tray

BT Mac - displays the Bluetooth Mac address of the PC.
Pairing Barcode - displays the RxLogger UI and instructions for pairing and/or connection.
Enable/Disable RxLogger - starts/stops the RxLogger PC Wedge service. When disabled, the RxLogger icon turns red.
Disconnect From Device - drops the Bluetooth connection with the device.



Exit RxLogger - exits the RxLogger PC Wedge application. To re-launch, double-click the RxLoggerPCwedge.exe icon.
About - shows RxLogger PC Wedge version information.


Re-Establish the Bluetooth Connection
To re-establish the Bluetooth connection:
On the PC, select the RxLogger PC Wedge icon on the system tray.
Select Pairing Barcode to display the barcode and pairing instructions.
Follow the instructions to connect the device, displayed below the barcode.
Figure 15    Re-Establish Bluetooth Connection from System Tray
 -->

