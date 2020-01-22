---
title: SerialCommMgr
layout: guide.html
product: EMDK For Xamarin 
productversion: '6.0' 
---
Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###Disable

**public virtual void Disable ();**

Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Parameters:**

**Returns** - System.Void

###Enable

**public virtual void Enable ();**

Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Parameters:**

**Returns** - System.Void

###GetSignalState

**public virtual bool GetSignalState (Symbol.XamarinEMDK.SerialComm.SerialCommMgr.ControlSignal p0);**

Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Parameters:**

Symbol.XamarinEMDK.SerialComm.SerialCommMgr.ControlSignal **p0**  - 
        

**Returns** - System.Boolean

###Read

**public virtual byte[] Read (int p0);**

Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Parameters:**

System.Int32 **p0**  - 
        

**Returns** - System.Byte[]

###SetSignalState

**public virtual void SetSignalState (Symbol.XamarinEMDK.SerialComm.SerialCommMgr.ControlSignal p0, bool p1);**

Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Parameters:**

Symbol.XamarinEMDK.SerialComm.SerialCommMgr.ControlSignal **p0**  - 
        

System.Boolean **p1**  - 
        

**Returns** - System.Void

###Write

**public virtual int Write (byte[] p0, int p1);**

Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Parameters:**

System.Byte[] **p0**  - 
        

System.Int32 **p1**  - 
        

**Returns** - System.Int32

##Properties

###Config
Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialCommConfig
###IsEnabled
Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Type** - System.Boolean
###PortInfo
Primary object to access the serial communication feature for communication with remote device via USB or Serial.

**Type** - Symbol.XamarinEMDK.SerialComm.SerialPortInfo
