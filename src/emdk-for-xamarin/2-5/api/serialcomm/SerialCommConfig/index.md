---
title: SerialCommConfig
layout: guide.html 
product: EMDK For Xamarin 
productversion: '2.5' 
---
The SerialCommConfig class provides access to configure the serial port settings.
Not supported on all BSP eventhough the EMDK provides this interface. Refer to release notes for more details.

**Type** - Java.Lang.Object

##Properties

###BaudRate
Specifies the baud at which the communications device operates.

**Type** - System.Int64
###DataBit
The number of data bits for each character.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig.DataBits
###Parity
Parity bits are used for detecting error in the transmission.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig.ParityBits
###StopBit
Specifies the number of stop bits to be used.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig.StopBits


