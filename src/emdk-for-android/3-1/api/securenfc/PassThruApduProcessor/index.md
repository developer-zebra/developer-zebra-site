---
title: PassThruApduProcessor
---

This class is designed for the NFC applications to perform secure communication with the
 contact-less secure cards (tags) at the low level protocol. The audience of this class are 
 secure NFC application developers with good understanding and expertise of the secure technology 
 they use, including the cards (tags) and SAM documentation, features and protocol. 
 
 Note: 
 This is recommended only for the secure NFC application developers who are interested getting the full control
 of the APDU. Other can use the SecureNfcManager.getTagTechInstance which provides simple API to securely
 communicate with the Smart card/tags for the supported tag technologies.
 
 

**Example Usage:**
	
	:::java	
	
	
	public class MainActivity extends Activity implements EMDKListener {
	
	SecureNfcManager secureNfcManager;
	EMDKManager emdkManager;
	PassThruApduProcessor passThruApduProcessor;
	
	
	protected void onCreate(Bundle savedInstanceState) {
	
	EMDKResults results = EMDKManager.getEMDKManager(
	getApplicationContext(), this);
	}
	
	
	public void onOpened(EMDKManager emdkManager) {
	
	this.emdkManager = emdkManager;
	
	this.secureNfcManager = (secureNfcManager) this.emdkManager
	.getInstance(FEATURE_TYPE.SECURENFC);
	
	if (this.secureNfcManager != null) {
	
	if(secureNfcMgr!= null){
	
	passThruApduProcessor = secureNfcMgr.getPassThruApduInstance();
	
	try {
	passThruApduProcessor.enable(ProtocolType.T1);
	
	passThruApduProcessor.disable();
	
	}catch (PassThruApduException e) {
	
	e.printStackTrace();
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
	
	}
	
	


##Public Methods

### enable

**public void enable(PassThruApduProcessor.ProtocolType protocolType)**

Enables connection between host device and Secure Access Module (SAM).

**Parameters:**

protocolType - Protocol to be used for communication between card reader
            (SAM) and contactless cards. This parameter is added for future use only.

**Returns:**

void

**Throws:**

com.symbol.emdk.securenfc.PassThruApduException

The exception will be thrown if it fails to enable the
             smartcard.

### disable

**public void disable()**

Closes already established connection between host device and SAM.

**Returns:**

void

**Throws:**

com.symbol.emdk.securenfc.PassThruApduException

The exception will be thrown if it fails to disable the
             smartcard.

### getVersion

**public String getVersion(PassThruApduProcessor.VersionType versionType)**

Retrieves version of smart card stack or connected smart card.

**Parameters:**

versionType

**Returns:**

java.lang.String

**Throws:**

com.symbol.emdk.securenfc.PassThruApduException

The exception will be thrown if it fails to retrieve version
             of smart card stack or connected smart card.

### process

**public byte process(byte cmdApdu, short expectedRespLength, boolean userFormattedProtocolFrame)**

Sends the Command APDU (C-APDU) (Application Protocol Data Unit) and
 receives Response APDU (R-APDU) from connected contactless smart cards.
 Application has to create C-APDU and send it to SAM using this API.
 Application should have process the R-APDU received from SAM.
 
 **Note:** This is a synchronous call and may block the main thread
 depending on the time process the command and its payload. The
 recommendation is not to be called from the main application thread.

**Parameters:**

cmdApdu - Command APDU (C-APDU) to be processed by smart card

expectedRespLength - Length of expected response. Pass this parameter as 0

userFormattedProtocolFrame - This parameter applicable for only T1 protocol. Typically user
            will provide this parameter as false. true: User provides
            frame header

**Returns:**

byte

**Throws:**

com.symbol.emdk.securenfc.PassThruApduException

The exception will be thrown if it fails to process the given
             APDU.

##Public Enums

###PassThruApduProcessor.VersionType

The enum to get the Smart Card stack and connected Smart Card versions.

**Values:**

* **SMART_CARD** -The version of connected smart card and this version can be obtained
 only after successful connection.

* **SMART_CARD_STACK** -Retrieves the version of the smart card stack.

###PassThruApduProcessor.ProtocolType

Communication protocol between a SAM and tag.
 The protocolType is added for future use only.
 This parameter does not have effect on protocol used by device to communicate with SAM. 
 TDA8029 smart card reader uses either T=0 or T=1 depending on protocol supported by the connected SAM. 
 User can provide it as either SC_PROTOCOL_T0 or SC_PROTOCOL_T1.Communication protocol (i.e. T=0 or T=1) 
 between TDA8029 (Smart card reader chip) and SAM is always decided by TDA8029 as per protocol supported 
 by the connected SAM. Thus if SAM supports only T=0 protocol then TDA8029 will set communication mode as T=0, 
 else if SAM supports only T=1 protocol then TDA8029 will set communication mode as T=1.

**Values:**

* **T0** -T-0 byte-oriented half duplex transmission protocol

* **T1** -T-1 block-oriented half duplex transmission protocol


