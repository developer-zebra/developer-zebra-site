---
title: SerialCommConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Supported in EMDK v6.1.0 or higher.Not supported on all BSP eventhough the EMDK provides this interface. Refer to release notes for more details.

**Type** - Java.Lang.Object

##Properties

###BaudRate
Specifies the baud at which the communications device operates. The application shall be able to select the baud rates. The possible values are defined as constants under BaudRates class such as BR_300, BR_1200, etc. Note: Not all the values are supported all the the products, refer product documentation for more details.

**Type** - System.Int64
###DataBit
The number of data bits for each character.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig+DataBits
###FlowControlMode
Pre-defined constants to specify flow control.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig+FlowControlModes
###Parity
Parity bits are used for detecting error in the transmission.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig+ParityBits
###StopBit
Specifies the number of stop bits to be used.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig+StopBits
