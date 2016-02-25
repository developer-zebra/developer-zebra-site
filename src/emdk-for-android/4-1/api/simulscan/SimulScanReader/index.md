---
title: SimulScanReader
type: api
---


SimulScanReader class will represent and provides access to the physical Reader
 device.
 
 

**Example Usage:**
	
	:::java
	
	List<SimulScanReaderInfo> readerInfoList = simulscanManager.getSupportedDevicesInfo();
	SimulScanReader reader = simulscanManager.getDevice(readerInfoList.get(0));
	reader.addDataListener(callbackObj);
	reader.addStatusListener(callbackObj);
	reader.enable();
	// Set template before calling read
	reader.read();
	reader.cancelRead();
	reader.disable();
	


##Public Methods

### getReaderInfo

**public SimulScanReaderInfo getReaderInfo()**

Returns information about the  reader device.

**Returns:**

com.symbol.emdk.simulscan.SimulScanReaderInfo - Returns the SimulScanReaderInfo object.

### isReadPending

**public Boolean isReadPending()**

Another read() cannot be submitted while a read is pending.

**Returns:**

java.lang.Boolean - boolean
 			Returns true if a read is pending.

### enable

**public void enable()**

Enables the reader hardware. This method does not make the reader to scan.
 If another reader is already enabled, this will throw a SimulScanException. 
 You must call disable() when you are done, otherwise all readers will remain 
 locked and will be unavailable for this and any other application that uses SimulScan. 
 
 

**Example Usage:**
	
	:::java
	
	reader.enable();
	


**Returns:**

void

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

The exception will thrown if the reader enable fails.

### disable

**public void disable()**

Disables the reader hardware. Any pending scanned data will be lost. 
 This method releases the reader hardware resources so that other readers can be enabled. 
 You must call this as soon as you're done with the scanning. Other applications will not be able to 
 access SimulScan related functions till this function is called.  
 
 

**Example Usage:**
	
	:::java
	
	reader.disable();
	


**Returns:**

void

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

The exception will thrown if the reader disable fails.

### isEnabled

**public boolean isEnabled()**

Returns reader enabled state

**Returns:**

boolean - boolean
 			Returns true if reader is enabled.

### getConfig

**public SimulScanConfig getConfig()**

Gets the current configuration settings for this reader device.
 The reader must be enabled before the calling this function.
 If modifications are made to the returned SimulScanConfig object, the Reader.setConfig(SimulScanConfig) must be called to take effect.
 

**Example Usage:**
	
	:::java
	
	reader.enable();
	SimulScanConfig config = reader.getConfig();
	


**Returns:**

com.symbol.emdk.simulscan.SimulScanConfig - SimulScanConfig
          The valid reader configuration object will be returned on successful get.

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs

### setConfig

**public void setConfig(SimulScanConfig config)**

Changes the settings for this reader device.
 The reader must be enabled and must not have a read pending to call this method.  
 This method skips the unsupported parameters and continues with setting the supported values. 
 

**Example Usage:**
	
	:::java
	
	SimulScanMultiTemplate template1 = new SimulScanMultiTemplate(fileUri);//fileUri points to the template
	SimulScanReader reader = simulscanManager.getDevice(template1.deviceIdentifier);
	reader.enable();
	SimulScanConfig config = reader.getConfig();
	config.multiTemplate = template1;
	reader.setConfig(config);
	
	


**Parameters:**

`config` - The Parameters to use for this reader device.

**Returns:**

void

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs while setting the parameters.

### read

**public void read()**

This method initiates a SimulScan read() request.
 This is an asynchronous call, the data and status will be returned through the registered callbacks.
 If a read() is submitted while another read is pending, the method call will fail.
 The read request can be cancelled by issuing a cancelRead(). 
 It is recommended to  check whether a read is pending by calling isReadPending() before submitting a read().
 

**Example Usage:**
	
	:::java
	
	reader.read();
	


**Returns:**

void

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs during the read request

### cancelRead

**public void cancelRead()**

This cancels any pending read() calls
 

**Example Usage:**
	
	:::java
	
	reader.cancelRead();
	


**Returns:**

void

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

The exception will thrown if error occurs during the cancelRead request.

### addDataListener

**public void addDataListener(SimulScanReader.DataListerner dataListener)**

The client can register to get data notification via callbacks.

**Parameters:**

`dataListener` - The DataListerner callabck object.

**Returns:**

void

### removeDataListener

**public void removeDataListener(SimulScanReader.DataListerner dataListener)**

The client can unregister to not get data notification via callbacks.

**Parameters:**

`dataListener` - The DataListerner callback object to be unregistered

**Returns:**

void

### addStatusListener

**public void addStatusListener(SimulScanReader.StatusListerner statusListener)**

The client can register to get status notification via callbacks.

**Parameters:**

`statusListener` - The StatusListerner callback object

**Returns:**

void

### removeStatusListener

**public void removeStatusListener(SimulScanReader.StatusListerner statusListener)**

The client can unregister to not get status notification via callbacks.

**Parameters:**

`statusListener` - The StatusListerner callback object to be unregistered

**Returns:**

void

