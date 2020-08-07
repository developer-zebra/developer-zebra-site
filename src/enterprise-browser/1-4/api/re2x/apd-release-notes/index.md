---
title: Zebra Adaptive Printer Driver APD Release Notes
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

Adaptive Printer Driver v2-19.06

## Description

Thank you for selecting Zebra Technologies, Inc as your mobility solution tool provider.  The Zebra Adaptive Printer Driver (APD) provides a simple way to interface application software to virtually any portable printer. 

For the latest software updates, go to the Developer & Software Tools page on the Support Central Web site at:

[http://support.symbol.com/support/product/DEV_SW_TOOLS.html](http://support.symbol.com/support/product/DEV_SW_TOOLS.html)

For more information on Zebra enterprise mobility devices, please visit:

[http://www.motorola.com/enterprise](http://www.motorola.com/enterprise)

Thank you,

The Software Development Team

## Usage Notes

1. In order to use the APD on an MC21XX device you must first install the MC21XX Printer Driver, available from Support Central and follow the instructions in the MC21XX integrator guide.

## Release Notes

### Version 2.19.06

1. Fixing of issue printing with StoneStreetOne Bluetooth stack COM ports greater than ten.
2. Fixing of issue , if other application use StoneStreetOne UserCOMPorts.

### Version 2.19.05

1. Fixing of issue not working with Microsoft Bluetooth Stack in devices MC9500 , MC3100.

### Version 2.19.04

1. Correction of Version information, return by API Call.

### Version 2.19.03

1. Fixing issue of buffer overflow in template file reading.
2. Stop dialog popup while connecting to two different printers.
3. Notify status of the printer at the time of set printer ( This issue is addressed in sample page)

### Version 2.19.01

1. Validation of Blue Tooth address.
2. Fixing issue of not reconnecting after disconnecting from printer.
3. Add compatibility to MC75 devices
4. Support to BT address input with colon.

### Version 2.19

1. Support StoneStreet Bluetooth stack with BTExplorer Version. 1.2.4 Build 7784 and above.
2. APD itself picks the available bluetooth driver StoneStreet, Socket or Microsoft
 
Last revised:  August 5, 2011

Copyright (c) 2011 Zebra Technologies, Inc. All rights reserved.
 
 




