---
title: SerialCommMgrEX
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---

    

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###GetPort

**public virtual Symbol.XamarinEMDK.SerialComm.SerialCommMgr GetPort (Symbol.XamarinEMDK.SerialComm.SerialPortInfo p0);**

This method returns the SerialComm object if the serial port info specified is valid and serial port info object can obtain from the SerialCommManager.getSupportedPorts(). The SerialComm object created will be singleton object for a specific serial port.
        

**Parameters:**

Symbol.XamarinEMDK.SerialComm.SerialPortInfo **p0**  - 
        

**Returns** - Symbol.XamarinEMDK.SerialComm.SerialCommMgr

##Properties

###SupportedPorts

        

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.SerialComm.SerialPortInfo>
