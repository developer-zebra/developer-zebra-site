---
title: MifareSam
type: api
---


Provides access to MIFARE SAM properties and I/O operations on an SAM object.
 This class encapsulates all the methods required for authenticating the host
 with MiFare SAM.
 
 

**Example Usage:**
	
	:::java
	
	
	
	public class MainActivity extends Activity implements EMDKListener {
	
	SecureNfcManager secureNfcManager;
	EMDKManager emdkManager;
	SamType samType;
	MifareSam mifareSam;
	
	
	protected void onCreate(Bundle savedInstanceState) {
	
	EMDKResults results = EMDKManager.getEMDKManager(
	getApplicationContext(), this);
	}
	
	
	public void onOpened(EMDKManager emdkManager) {
	
	this.emdkManager = emdkManager;
	
	this.secureNfcManager = (secureNfcManager) this.emdkManager
	.getInstance(FEATURE_TYPE.SECURENFC);
	
	if (this.secureNfcManager != null) {
	
	samType = secureNfcManager.getAvailableSam();
	
	if (samType.equals(SamType.MIFARE)) {
	mifareSam = (MifareSam) secureNfcMgr
	.getSamInstance(samType);
	if (mifareSam != null) {
	try {
	SamMode samMode = mifareSam.connect();
	
	mifareSam.authenticateSam(authKey, samKey, null);
	
	mifareSam.close();
	} catch (MifareSamException e) {
	e.printStackTrace();
	}
	}
	}
	}
	}
	
	
	public void onDestroy() {
	if (this.emdkManager != null)
	this.emdkManager.release();
	}
	
	
	public void onClosed() {
	this.emdkManager.release();
	}
	
	}
	
	


##Public Methods

### connect

**public SamMode connect()**

Connects to the SAM to perform I/O operations. Application must call
 close() when I/O operations are complete.

**Returns:**

com.symbol.emdk.securenfc.MifareSam.SamMode - SamMode

**Throws:**

com.symbol.emdk.securenfc.MifareSamException

The exception will be thrown if it fails to establish
             connection with the SAM.

### getSamInfo

**public SamInfo getSamInfo()**

Returns manufacturing related information of the MIFARESAM.

**Returns:**

com.symbol.emdk.securenfc.MifareSam.SamInfo - MifareSam version information such as Software\Hardware
         Information such as Vendor ID ,type,version ,storage size
         ,protocol and Manufacturer information such as unique serial number ,
         production batch number and production year/week

**Throws:**

com.symbol.emdk.securenfc.MifareSamException

The exception will be thrown if it fails to
 return manufacturing related information of the SAM.

### authenticateSam

**public void authenticateSam(byte[] authKey, SamKey samKey, MifareSam.AdditionalAuthData additionalAuthData)**

Performs the SAM authentication. If the SAM is in AV1 mode, performs
 mutual 3-pass authentication between host system and MIFARE SAM AV1 or
 MIFARE SAM AV2 set in AV1 compatibility mode. If the SAM is in AV2 mode,
 performs mutual authentication between host system and MIFARE SAM AV2 set
 in AV2 mode.

**Parameters:**

`authKey` - Authentication key to be used.

`samKey` - SAM key to be used for authentication

`additionalAuthData` - Additional authentication data.

**Returns:**

void

**Throws:**

com.symbol.emdk.securenfc.MifareSamException

The exception will be thrown if it fails to authenticate the
             SAM.

### close

**public void close()**

Close with the SAM to perform I/O operations.

**Returns:**

void

**Throws:**

com.symbol.emdk.securenfc.MifareSamException

The exception will be thrown if it fails to close the
             connection with the SAM.

##Public Fields

###TAG



**Type:**

java.lang.String

