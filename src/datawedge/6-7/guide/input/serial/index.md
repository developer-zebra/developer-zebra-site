---
title: Serial Input
layout: guide.html
product: DataWedge
productversion: '6.7'
---

## Overview

Serial Input options are used to specify communications parameters for a scanner or other device connected to a serial port that will be used to acquire data. In the DataWedge UI, the number of serial ports availabile for selection varies according to the number of serial ports on the host device.

<!-- 2/28/18- Removed per eng. 
**Note: DataWedge provides audio and other feedback to alert the user of scanning results and barcode type. See the [Scanner Parameters](#scanparams) section for more information**. 
 -->

-----

### Serial Port Configuration 
**_Applies only to devices running Android N and higher_**. _Pre-N versions offer Enable/Disable function only_.

<img style="height:450px" src="DW_serial_02.png"/>
_Input enabled on Serial port 1 of a Zebra VC80x; second serial port (disabled) also shown._
<br>

**Baud rate -** specifies the modulation rate of the connected serial device. 

**Data bits -** specifies the number of data bits in a serial frame (data bits per byte). 

**Parity -** specifies the parity bits using one of the following values: 

* None: No parity check
* Odd: Sets the parity bit so the count of bits set is an odd number
* Even: Sets the parity bit so the count of bits set is an even number
* Mark: Leaves the parity bit set to 1
* Space: Leaves the parity bit set to 0

**Stop bits -** specifies the number of stop bits to use.  

<img style="height:450px" src="DW_serial_04.png"/>
_Tapping on a setting displays a dialog box for changing its value._
<br>

**Note: Serial port configuration is available only on devices running Android N and higher**. For prior versions, only the Enable/Disable options are available for serial ports.

<!-- 
DW_serial_04.png (baud rate)
DW_serial_05.png (data bits)
DW_serial_06.png (parity) 
DW_serial_07.png (stop bits)
 -->

For more information about required serial communication settings, please refer to documentation that accompanied the peripheral being connected.

-----

### Output Using Intents

For some scanning applications, it might be preferable not to display decoded data but to output directly to an application activity. This is done using Android Intents. For more information and important warnings, please see the [Intent Output guide](../../output/intent).  

For general information about Android Intents, please refer to the [Android Developer site](https://developer.android.com/guide/components/intents-filters.html).

------

**Related guides**:

* [DataWedge Intent APIs](../../api) 
* [DataWedge Profiles](../../profiles)

