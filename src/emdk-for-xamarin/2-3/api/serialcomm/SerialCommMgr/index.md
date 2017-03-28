---
title: SerialCommMgr
layout: guide.html
product: EMDK For Xamarin
productversion: '2.2'
---
This is the primary object to access the serial communication feature to communicate with remote device wither via USB/Serial. This class design allows to communicate with only remote device at time.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###Disable
**public virtual void Disable ();**

This method disables USB/serial channel to communicate with the remote device.


**Returns** - System.Void

###Enable
**public virtual void Enable ();**

This method enables the channel for the application to communicate with the remote device via USB/Serial.


**Returns** - System.Void

###Read
**public virtual byte[] Read (int p0);**

This method reads the available data and returns immediately. If no data is available, waits till the timeout occurs. Null will be returned if there is no data available. Exception will be thrown in case of any errors. The maximum data can be received is 4096 Bytes at a time. The newly arrived data will be lost if the received data in the read buffer is greater 4096 byes when the data arrives from the remote devices client. The application must handshake with remote device's client to avoid the data loss. This is synchronous method, depending on the read timeout, it may block the application's main thread and might lead to ANR. The application should call this method on a separate thread to avoid the ANR problems.

**Parameters:** 

* System.Int32 **p0** - Wait for data until timeout. The timeout unit is milli seconds. A timeout of zero means the calling read will wait forever unless interrupted by disable or release.

**Returns** - System.Byte[]

###Write
**public virtual int Write (byte[] p0, int p1);**

Writes a specified number of bytes from buffer to the opened communication channel. This method returns the numbers bytes written. Exception will be thrown in case of any errors. This is synchronous call and may block the main thread depending on the time taken to send the data to the remote device. The maximum number of bytes to written at a time can't exceed more than 4096 Bytes and if the application passes more will lead to error.

**Parameters:** 

* System.Byte[] **p0** - The byte array that contains the data to write.
* System.Int32 **p1** - The number of bytes to write.

**Returns** - System.Int32

##Properties

###IsEnabled
Gets whether the communication port is enabled or not.

**Type** - System.Boolean






