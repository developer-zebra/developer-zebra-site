---
title: SimulScanManager
type: api
---


This is the primary object to access the SimulScan feature.
 
 

**Example Usage:**
	
	:::java	public class MainActivity extends Activity implements EMDKListener,
	SimulScanDataEventListerner, SimulScanStatusEventListerner {
	protected void onCreate(Bundle savedInstanceState) {
	//..
	EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
	}
	public void onOpened(EMDKManager emdkManager) {
	this.emdkManager = emdkManager;
	}
	//...
	simulscanManager = (SimulScanManager)this.emdkManager.getInstance(FEATURE_TYPE.SimulScan);
	//...
	List<SimulScanReaderInfo> readerInfoList = simulscanManager.getSupportedDevicesInfo();
	SimulScanReader reader = simulscanManager.getDevice(readerInfoList.get(0));
	reader.addDataListener(callbackObj);
	reader.addStatusListener(callbackObj);
	reader.enable();
	// set template before calling read
	reader.read();
	
	//...
	reader.cancelRead();
	
	//...
	reader.disable();
	
	//..
	
	EMDKManager.release(FEATURE_TYPE.SimulScan);
	
	}


##Public Methods

### getSupportedDevicesInfo

**public List getSupportedDevicesInfo()**

Returns list of supported reader devices information.

**Returns:**

java.util.List - Returns list of supported reader devices information.

### getDevice

**public SimulScanReader getDevice(SimulScanReaderInfo simulscanReaderInfo)**



**Parameters:**

`simulscanReaderInfo` - The SimulScanReadInfo specifies which reader the application wants.

**Returns:**

com.symbol.emdk.simulscan.SimulScanReader

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs

### getDevice

**public SimulScanReader getDevice(SimulScanManager.DeviceIdentifier deviceIdentifier)**



**Parameters:**

`deviceIdentifier` - The device identifier specifies which reader the application wants.

**Returns:**

com.symbol.emdk.simulscan.SimulScanReader

**Throws:**

com.symbol.emdk.simulscan.SimulScanException

Exception will be throw if any error occurs

