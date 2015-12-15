---
title: PaymentDevice
---

PaymentDevice class will represent and provides access to the physical
 payment device.
 
 

##Public Methods

### isEnabled

**public boolean isEnabled()**

Checks if the connection with the payment device is enabled or not.

**Returns:**

boolean - true : if the connection with the payment device is enabled 
 		   false : if the connection with payment device is not enabled

### getDeviceInfo

**public DeviceInfo getDeviceInfo()**

Returns information about the payment device.

**Returns:**

com.symbol.emdk.payment.DeviceInfo - Returns the DeviceInfo object.

### enable

**public void enable()**

This is an asynchronous call and status of the enable method will be returned through the registered  PaymentDevice.DataListener.
 This method is used to establish communication with the payment device and enable the payment device to do transactions.
 This method does not do any transactions.
 
 The following requirements must satisfy before calling enable method:
  - The payment device must paired with the mobile device.
  - The paired payment device name or MAC address must be set using  PaymentDevice.setInterfaceConfig(InterfaceConfig interfaceConfig).
  - The clients must implement  PaymentDevice.DataListener and call  PaymentDevice.addDataListener(DataListener listener) 
  
  Only one session can be enabled at any given time.
  The Bluetooth connection will fail if the payment device is not already paired. 
  The application can call other methods only after successful enabling. 
  If the same of payment device is used by other application, enable will fail and returns error.
  If payment device shows Bluetooth connection status screen ,calling enable method will return communication error.
  You must call disable() when you are done the payment transactions,
  otherwise it will remain locked and be unavailable to other applications.
  enable() returns "device is not paired" status ,when the BT is turned off or does not have any payment devices paired.
 
 

**Example Usage:**
	
	:::java	
	PaymentDevice paymentDevice = paymentManager.getDevice(DeviceIdentifer.DEFAULT);
	paymentDevice.addDataListener(this);
	paymentDevice.enable();


**Returns:**

void

**Throws:**

com.symbol.emdk.payment.PaymentException

The exception will thrown if it fails enable the payment
             device.
 
             Possible Error codes: SUCCESS, AUTHORIZATION_FAILED, FAILURE,
             AUTHENTICATION_FAILED, ENABLE_FAILED, ALREADY_ENABLED,
             INVALID_CONFIGURATION, COMMUNICATION_ERROR, NO_DATA_LISTENER,
             DEVICE_IN_USE, CONNECTION_ERROR, DEVICE_NOT_PAIRED,
             INVALID_OBJECT, UNDEFINED

### disable

**public void disable()**

Disables the the payment device for transactions. This method closes the
 connection with the application and the payment device.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.disable();


**Returns:**

void

**Throws:**

com.symbol.emdk.payment.PaymentException

The exception will thrown if any unexpected error occurs
             during the close call.
 
             Possible Error codes: SUCCESS, FAILURE, COMMUNICATION_ERROR,
             CONNECTION_ERROR, ALREADY_CLOSED, PREVIOUS_COMMAND_PENDING,
             DISABLE_FAILED, INVALID_OBJECT

### getConfig

**public PaymentConfig getConfig()**

Gets payment device configuration settings. On success the results will
 be stored on PaymentDevice.config.deviceConfig.
 Application must call this only after enabling the device.
 


**Example Usage:**
	
	:::java	
	try{
	PaymentConfig config = paymentDevice.getConfig();


**Returns:**

com.symbol.emdk.payment.PaymentConfig - Returns the PaymentConfig object.
 
         Possible Error codes: SUCCESS, FAILURE, COMMUNICATION_ERROR,
         CONNECTION_ERROR, INVALID_OBJECT, INVALID_VALUE,
         PREVIOUS_COMMAND_PENDING, NULL_POINTER, DEVICE_NOT_ENABLED

**Throws:**

com.symbol.emdk.payment.PaymentException



### setConfig

**public void setConfig(PaymentConfig config)**

Sets payment device configuration settings. This method sets the modified
 values of PaymentDevice.config.deviceConfig fields. Application must call this only after enabling the device
 
  * 

**Example Usage:**
	
	:::java	
	try {
	PaymentConfig config = paymentDevice.getConfig();
	
	config.idleMessage = "Welcome";
	config.sleepModeTimeout =10000;
	config.getAllEncryptedData = false;
	config.dataEncryptionType = DataEncryptionType.NONE;
	paymentDevice.setConfig(config);
	}catch (PaymentException e) {
	responseString.append(e.getResult().getDescription());
	}


**Parameters:**

`config`

**Returns:**

void - Returns the status of the setConfig method.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         INVALID_VALUE, PREVIOUS_COMMAND_PENDING, NULL_POINTER

**Throws:**

com.symbol.emdk.payment.PaymentException



### enableKeypad

**public PaymentResults enableKeypad()**

This method enables the keypad on the payment device. The keypad must be explicitly 
 enabled each time before calling the methods such as  readCardData() and promptPin(), 
 which requires key entry input.Keyboard must remain enabled until disableKeypad  is 
 called or the payment device goes to  lock screen mode.Enabling the keypad will enable 
 keybeep  as well on the PD40-100 device. The payment device's keypad will be disabled
 either on default timeout or the parameter  sleepModeTimeout whichever is lower.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.enableKeypad();


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         PREVIOUS_COMMAND_PENDING

### enableKeypad

**public PaymentResults enableKeypad(int timeOut)**

This method enables the keypad on the payment device. The keypad must be explicitly 
 enabled each time before calling the methods such as  readCardData() and promptPin(), 
 which requires key entry input.Keyboard must remain enabled until disableKeypad  is 
 called or the payment device goes to  lock screen mode.Enabling the keypad will enable 
 keybeep  as well on the PD40-100 device. The payment device's keypad will be disabled
 either on specified timeout or the parameter  sleepModeTimeout whichever is lower.

**Parameters:**

`timeOut` - The timeOut specifies how long the payment device's keypad should be in enabled state.
 The timeOut value unit is milliseconds.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.enableKeypad(12000);


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         PREVIOUS_COMMAND_PENDING

### disableKeypad

**public PaymentResults disableKeypad()**

Disables the keypad on the payment device.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.disableKeypad();


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         PREVIOUS_COMMAND_PENDING

### readCardData

**public PaymentResults readCardData(double amount, double otherAmount, PaymentDevice.ReadMode readMode, int readTimeOut, ReadCardMessage readCardMessage)**

Reads the card data from the PAYMENT device. This is asynchronous call
 and card data is returned in the registered DataListener callback as
 described in the DataListener class. The character "|" not allowed in the
 message strings and it is used as special character in the EMDK for PD40-100 device.

**Parameters:**

`amount` - Amount for the transaction; this value is required to enable
            EMV contactless transactions. Allowed unto a maximum of 7
            digits.

`otherAmount` - For future use. Any additional amount information for the
            transaction; this value is used only used if EMV Contactless
            is supported. Allowed upto a maximum of 7 digits.

`readMode` - Card reading mode (swipe, insert, touch, manual or all)
            supported by payment device for reading card.

`readTimeOut` - Read timeout in milliseconds. Application can set the timeout.
            But value must within threshold set by the payment device.

`readCardMessage` - The  ReadCardMessage class provides option configure the messages
            displayed on payment device while reading the card data on payment device
 

**Example Usage:**
	
	:::java	
	readCardMessage = new ReadCardMessage();
	readCardMessage.messageTitle ="MessageTitle";
	readCardMessage.screen1.message1 = "$2000.00";
	readCardMessage.screen1.message2 = "Transaction...";
	paymentDevice.readCardData(1, 4, ReadMode.ALL, 2000, readCardMessage);


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         OPERATION_CANCELLED, LOW_POWER_OPERATION_CANCELLED,
         TLV_DATA_ERROR, CARD_SWIPE_ERROR, CARD_BLOCKED,
         CHIP_READ_NO_APP_ERROR, CARD_INSERTION_ERROR, CARD_REMOVED,
         CARD_EXPIRED, CARD_SWIPE_ERROR

### readCardData

**public PaymentResults readCardData(double amount, double otherAmount, PaymentDevice.ReadMode readMode, int readTimeOut)**

Reads the card data from the PAYMENT device. This is asynchronous call
 and card data is returned in the registered DataListener callback as
 described in the DataListener class.Results are captured by overriding 
 OnData callback method.

**Parameters:**

`amount` - Amount for the transaction; this value is required to enable
            EMV contactless transactions. Allowed unto a maximum of 7
            digits.

`otherAmount` - For future use. Any additional amount information for the
            transaction; this value is used only used if EMV Contactless
            is supported. Allowed upto a maximum of 7 digits.

`readMode` - Card reading mode (swipe, insert, touch, manual or all)
            supported by payment device for reading card.

`readTimeOut` - Read timeout in milliseconds. Application can set the timeout.
            But value must within threshold set by the payment device.
 

**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         OPERATION_CANCELLED, LOW_POWER_OPERATION_CANCELLED,
         TLV_DATA_ERROR, CARD_SWIPE_ERROR, CARD_BLOCKED,
         CHIP_READ_NO_APP_ERROR, CARD_INSERTION_ERROR, CARD_REMOVED,
         CARD_EXPIRED, CARD_SWIPE_ERROR

### promptPin

**public PaymentResults promptPin(java.lang.String accountNumber, int minPinLength, int maxPinLength, boolean isPinOptional, int readTimeOut, PromptPinMessage promptPinMessage)**

Requests for a PIN and gets the encrypted PIN block. The encrypted data
 will be returned only if a debit key is injected into the payment device.
 This is asynchronous call and PIN data is returned in the registered
 DataListener callback as described in the DataListener class.If the
 account number or masked PAN mismatches with masked PAN returned by
 ReadCardData then promptPin returns Invalid value.Note: The character "|"
 not allowed in the message strings for PD40-100 payment device and it is
 used as special character in the in the EMDK for PD40-100 device.
 Requesting promptPin() continuously may pop up the timer on PD40-100
 payment device for security reasons and application should wait for this
 before performing any other actions.

**Parameters:**

`accountNumber` - The account number or masked PAN used with the entered PIN to
            create the encrypted PIN Block (8 to 19 numeric digits).

`minPinLength` - Minimum PIN Length.

`maxPinLength` - Maximum PIN Length. A maximum length of up to 12 characters is
            allowed.

`isPinOptional` - If this flag is set True, the PIN entry optional. If this flag
            is set to false, the PIN entry is mandatory.

`readTimeOut` - Read timeout in milliseconds. Application can set the timeout.
            But value must within threshold set by the payment device.

`promptPinMessage` - The PromptPinMessage class provides option configure the
            messages displayed on the payment device while reading the PIN.

 

**Example Usage:**
	
	:::java	
	promptPINMessage = new PromptPinMessage();
	promptPINMessage.messageTitle ="MessageTitle";
	promptPINMessage.screen1.message1 = "Sale $1,000.00";
	promptPINMessage.screen1.message2 = "Transaction..";
	paymentDevice.promptPin("0123456789012345", 4, 12, true, 2000, promptPinMessage);


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         OPERATION_CANCELLED, INVALID_PIN_LENGTH, NO_DUKPT_KEY,
         INVALID_VALUE,LOW_POWER_OPERATION_CANCELLED

### promptPin

**public PaymentResults promptPin(java.lang.String accountNumber, int minPinLength, int maxPinLength, boolean isPinOptional, int readTimeOut)**

Requests for a PIN and gets the encrypted PIN block. The encrypted data
 will be returned only if a debit key is injected into the payment device.
 This is asynchronous call and PIN data is returned in the registered
 DataListener callback as described in the DataListener class.If the
 account number or masked PAN mismatches with masked PAN returned by
 ReadCardData then promptPin returns Invalid value. Requesting promptPin()
 continuously may pop up the timer on PD40-100 payment device for security
 reasons and application should wait for this before performing any other
 actions.

**Parameters:**

`accountNumber` - The account number or masked PAN used with the entered PIN to create the
            encrypted PIN Block (8 to 19 numeric digits).

`minPinLength` - Minimum PIN Length.

`maxPinLength` - Maximum PIN Length. A maximum length of up to 12 characters is
            allowed.

`isPinOptional` - If this flag is set True, the PIN entry optional. If this flag
            is set to false, the PIN entry is mandatory.

`readTimeOut` - Read timeout in milliseconds. Application can set the timeout.
            But value must within threshold set by the payment device.

**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         <p>
         <blockquote>
 
         <pre>
 {@code
 Example Usage:
 	paymentDevice.promptPin("0123456789012345", 4, 12, true, 2000);
 }
 </pre>
 
         </blockquote>
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         OPERATION_CANCELLED, INVALID_PIN_LENGTH, NO_DUKPT_KEY,
         INVALID_VALUE,LOW_POWER_OPERATION_CANCELLED

### promptMenu

**public PaymentResults promptMenu(java.lang.String messageLine1, java.lang.String messageLine2, java.lang.String choice1, java.lang.String choice2, java.lang.String choice3, java.lang.String choice4, int timeOut)**

Displays two lines of messages on the PAYMENT device and provides a menu
 with a maximum of 4 choices. This is asynchronous call and user selection
 is returned in the DataListener callback as described in the DataListener
 class. The character "|" not allowed in the message strings and it is
 used as special character in the EMDK for PD40-100.

**Parameters:**

`messageLine1` - Message Line 1 to display on the PINPad screen. Maximum
            characters allowed for Choice + Message = 18 characters. For
            example, if Choice is 6 characters, maximum message length is
            12 characters. Messages longer than maximum message length
            will be truncated.

`messageLine2` - Message Line 2 to display on the PINPad screen. Maximum
            characters allowed for Choice + Message = 18 characters. For
            example, if Choice is 6 characters, maximum message length is
            12 characters. Messages longer than maximum message length
            will be truncated.

`choice1` - Choice text for selection from the PINPad using the function
            keys. Choice string can consist of up to 8 characters.

`choice2` - Choice text for selection from the PINPad using the function
            keys. Choice string can consist of up to 8 characters.

`choice3` - Choice text for selection from the PINPad using the function
            keys. Choice string can consist of up to 8 characters.

`choice4` - Choice text for selection from the PINPad using the function
            keys. Choice string can consist of up to 8 characters.

`timeOut` - Timeout in milliseconds. Application can set the timeout. But
            value must within threshold set by the payment device.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.promptMenu("messageLine1","messageLine2","choice1","choice2","choice3","choice4",timeOut);


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         CANCEL_KEY_PRESSED, OK_KEY_PRESSED, LOW_POWER_OPERATION_CANCELLED

### promptAdditionalInfo

**public PaymentResults promptAdditionalInfo(double amount, int langCode, boolean promptForTip, boolean cashBack, double surcharge, int timeOut)**

Requests the user to confirm the amount and surcharge passed by the
 application and prompts the user to provide tip and cashback. The tip,
 cashback values and the confirmation if surcharge was accepted, will be
 returned to the application via the DataListener callback. If the user
 presses CORR or CANCEL keys, or the call times out, the corresponding
 error is returned. This is asynchronous call and data is returned in the
 DataListener callback as described in the DataListener class.

**Parameters:**

`amount` - Transaction amount value that is to be displayed.

`langCode` - Numeric value denoting the language code for determining the
            displayed language of the pre-defined prompt.

`promptForTip` - Indicates whether or not to prompt for tip and return the
            amount entered.

`cashBack` - Indicates whether or not to prompt for cashback and return the
            amount selected. The user would select the cashback amount
            from 4 pre-defined choices - $20, $40, $60 and $100. These
            choices cannot be modified.

`surcharge` - An optional surcharge amount that is to be displayed and
            confirmed. A zero amount
            will cause this prompt to be bypassed

`timeOut` - Read timeout. Application can set the timeout. But value must
            within threshold set by the payment device.
 

**Example Usage:**
	
	:::java	
	paymentDevice.promptAdditionalInfo(1.25, 0,true, true,1.25, 60000);


**Returns:**

com.symbol.emdk.payment.PaymentResults - PaymentResults Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         OPERATION_CANCELLED, LOW_POWER_OPERATION_CANCELLED.

### promptMessage

**public PaymentResults promptMessage(java.lang.String messageLine1, java.lang.String messageLine2, java.lang.String messageLine3, java.lang.String messageLine4, boolean getUserConfirmation, int timeOut)**

Displays a maximum of 4 lines of messages on the payment device. This
 method also allows getting user confirmation. If the getUseConfirmation
 is set to false, this method works as synchronous else it is asynchronous
 method. The response will be returned via callback for asynchronous case.
 The character "|" not allowed in the message strings and it is used as
 special character in the EMDK for PD40-100 device.

**Parameters:**

`messageLine1` - A message to display on line 1 of the PINPad screen. May
            consist of up to 16 characters

`messageLine2` - A message to display on line 2 of the PINPad screen. May
            consist of up to 16 characters

`messageLine3` - A message to display on line 2 of the PINPad screen. May
            consist of up to 16 characters

`messageLine4` - A message to display on line 4 of the PINPad screen. May
            consist of up to 16 characters

`getUserConfirmation` - True or False. Allows the user to press OK (Enter key), CANCEL
            or CORR keys in response to the displayed messages.

`timeOut` - Read timeout. Application can set the timeout. But value must
            within threshold set by the payment device.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.promptMessage("messageLine1","messageLine2","messageLine3","messageLine4",true, timeOut);


**Returns:**

com.symbol.emdk.payment.PaymentResults - PaymentResults Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         NULL_POINTER, COMMUNICATION_ERROR, CONNECTION_ERROR,
         INVALID_OBJECT, PREVIOUS_COMMAND_PENDING, TIMED_OUT,
         OK_KEY_PRESSED, OK_KEY_PRESSED, LOW_POWER_OPERATION_CANCELLED

### abort

**public PaymentResults abort()**

Abort or cancel previously issued request to device and display welcome
 screen on payment device. This is asynchronous call and result is returned 
 in the registered DataListener callback as described in the DataListener class.
 The payment device returns to idle state after the abort call.The abort method 
 can abort the previous requests such as promptMessage with userCOnfirmation=true,
 promptMenu, readCardData,readCardData with message and promptAdditionalInfo.
 For the other requests,the abort method will return error as CANNOT_ABORT.
 If there is any pending Abort call,any subsequent call of the API returns 
 PREVIOUS_COMMAND_PENDING error code.
 

**Example Usage:**
	
	:::java	
	paymentDevice.abort();


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED,PREVIOUS_COMMAND_PENDING
 
         Error code if previous request are Enable, PromptPin PromptPin
         with message, AuthorizeCard and completeOnlineEmv :CANNOT_ABORT.

### getBatteryLevel

**public BatteryData getBatteryLevel()**

Query the battery level of the payment device.
  
  The possible battery levels returned by PD40 are
  0 -Battery is almost 0%, the device needs to be charged before using"
	1 -The battery icon display 1 grid, battery is between 1%-25%
  2 -The battery icon display 2 grids, battery is between  25% - 50%
  3 -The battery icon display 3 grids,battery is between  50%-75%
  4 -The battery icon display 4 grids,battery is between  75%-100%
 
 

**Example Usage:**
	
	:::java	
	BatteryData data = paymentDevice.getBatteryLevel();
	String batteryLevel = String.valueOf(data.getValue());


**Returns:**

com.symbol.emdk.payment.BatteryData - Returns the BatteryData object which contains battery level of
         the requested device and the PaymentResults.
 

         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT

### createMac

**public MacData createMac(java.lang.String u8MacData)**

This is a required transaction for Canada. Accepts a String of data to be
 MAC'ed using the ANSI x9.91 standard and the MAC Working Key. This is
 used for MAC'ing credit transactions when the PINPad is configured to
 support both credit and debit. This is synchronous call

**Parameters:**

`u8MacData` - String of data to be MAC'ed. The length of the key should be
            16/32/48 bytes in HEX format.
 

**Example Usage:**
	
	:::java	
	MacData data = paymentDevice.createMac("1112131415161718");


**Returns:**

com.symbol.emdk.payment.MacData - Returns MacData class object status with MacBlock if call is
         issued successfully. After the method is processed, returns
         status and MacBlock.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED, INVALID_VALUE,
         MAC_KEY_CREATE_ERROR, MAC_BLOCK_CREATE_ERROR,
         INVALID_MAC_KEY_LENGTH

### validateMac

**public PaymentResults validateMac(java.lang.String u8MacBlock, int langCode, java.lang.String u8TpkKey, java.lang.String u8TakKey, java.lang.String message1, java.lang.String message2, java.lang.String u8MacData)**

Validates the response MAC and displays any authorization messages
 returned by the host. This method is made Asynchronous call because it is
 taking more processing time and response will be returned via registered
 data listener.

**Parameters:**

`u8MacBlock` - u8-character MAC Block to verify

`langCode` - Numeric value denoting the language code for determining the
            displayed language of the card entry prompts.

`u8TpkKey` - PIN (TPK) Key

`u8TakKey` - MAC (TAK) Key

`message1` - Message Line 1 (0-16 bytes)

`message2` - Message Line 2 (0-16 bytes)

`u8MacData` - Buffer to hold all data to be MAC'ed
 

**Example Usage:**
	
	:::java	
	paymentDevice.validateMac("u8MacBlock", 0, "", "", "message1", "message2","1112131415161718");


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults after the request is successfully
         issued.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED, INVALID_VALUE, INVALID_DATA_LENGTH

### completeOnlineEmv

**public PaymentResults completeOnlineEmv(PaymentDevice.HostDecision hostDecision, boolean displayResult, java.util.ArrayList tagData)**

Completes an online EMV transaction for PIN management. The application
 must call authorizeCard before calling this API else API returns API_SEQUENCE_ERROR.
 This is an asynchronous call. After the processing, the response (i.e.,EmvData object) 
 is returned through the registered DataListener.

**Parameters:**

`hostDecision` - HostDecision enum value which is the decision indicator from
            the host response.

`displayResult` - Indicator to note whether or not to display the final response
            message. The valid values are: false - Do not display, true -
            Display

`tagData` - List of EMV data which contains EMV tag and its values.
 
 

**Example Usage:**
	
	:::java	
	ArrayList<TagData> emvDataList = new ArrayList<TagData>();
	emvDataList.add(new TagData("5A085413330089601075"));
	paymentDevice.completeOnlineEmv(HostDecision.HOST_AUTHORIZED, true, emvDataList );


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED, INVALID_VALUE,
         OPERATION_CANCELLED, CARD_INSERTION_ERROR, NULL_POINTER,
         CARD_REMOVED, EMV_TRANSACTION_DENIED, EMV_TRANSACTION_ERROR,
         CARD_NOT_AUTHORIZED, GAC_CARD_LOOPBACK, GAC_RESPONSE_ERROR,
         TLV_DATA_ERROR,API_SEQUENCE_ERROR

### getEmvTags

**public PaymentResults getEmvTags(java.util.ArrayList emvTags)**

Gets tag information from the inserted card.
 This is an asynchronous call. The caller can request in  specific tags
 if the tag is not listed in the getEMVTags table.For more information on 
 the table refer PaymentAPI_ProgrammersGuide. After the processing,
 the response (TagData contains TLV raw data as per EMV specification) 
 and also its parsed tag,length and value format is returned through  
 the registered DataListener. If we pass null as a parameter the API
 returns all the tag data listed in table in TLV format.
 The application must call  readCardData before calling the getEmvTags.

**Parameters:**

`emvTags`

**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED, NULL_POINTER,
         CARD_INSERTION_ERROR, TLV_DATA_ERROR

### setEmvTags

**public PaymentResults setEmvTags(java.util.ArrayList emvTagData)**

Sets tag information for the inserted card. Valid EMV tag IDs and tag
 values should be passed. Passing invalid EMV tag IDs or tag values may
 cause the payment device to go into unstable state or unknown behavior.
 The payment device has to be rebooted in order to continue normal operation.
 The application must call  readCardData before calling the getEmvTags/setEmvTags.

**Parameters:**

`emvTagData` - List of emv tag ID and its values be set on the inserted card.
           
            
 

**Example Usage:**
	
	:::java	
	ArrayList<TagData> emvTagData = new ArrayList<TagData>();
	TagData data = new TagData("5A085413330089601075");
	emvTagData.add(data);
	paymentDevice.setEmvTags(emvTagData);


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED, NULL_POINTER,
         CARD_INSERTION_ERROR, EMV_APP_NOT_SELECTED, TLV_DATA_ERROR

### authorizeCard

**public PaymentResults authorizeCard(double amount, double otherAmount, PaymentDevice.MerchantDecision merchatDecision, java.util.ArrayList tags, boolean displayResult, boolean pinTryExceedStatus, boolean displayAmount, boolean displayAppExpired, int timeOut)**

Authorizes the EMV transaction amounts using the inserted chip (EMV)
 card. This is an asynchronous call. After processing, the authorize  
 card response (AuthorizeCardData) is returned through the registered DataListener.
 Results are captured by overriding   OnData callback method.
 The application must call  readCardData before calling the AuthorizeCardData 
 else API returns API_SEQUENCE_ERROR.For Online transactions PIN and KSN both 
 be returned ,however offline transactions will not have KSN and PIN in the response data.

**Parameters:**

`amount` - Transaction amount value.

`otherAmount` - Other transaction amount value.

`merchatDecision` - The merchant decision notes additional handling for the EMV
            request based on required processor handling.

`tags` - is an list of EMV tags that is required at this transaction
            stage to be retrieved.

`displayResult` - True or False. True= display result on Payment device display.

`pinTryExceedStatus`

`displayAmount` - True or False. True= displays amount on Payment device display

`displayAppExpired`

`timeOut`

**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns the PaymentResults.
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         LOW_POWER_OPERATION_CANCELLED, NULL_POINTER,
         CARD_INSERTION_ERROR, CARD_BLOCKED, CARD_BLOCKED, CARD_REMOVED,
         EMV_APP_ADD_ERROR, EMV_TRANSACTION_DENIED, EMV_TRANSACTION_ERROR,
         NO_DUKPT_KEY, CARD_AUTHENTICATION_FAILED, GET_ONLINE_PIN_FAILED,
         APP_EXPIRED, GAC_CARD_LOOPBACK, GAC_RESPONSE_ERROR,
         TLV_DATA_ERROR,API_SEQUENCE_ERROR

### getLowBatteryThreshold

**public BatteryData getLowBatteryThreshold()**

Gets the acceptable low battery level. If the battery drops below this
 value, the device will not execute any of the selected commands.
 
 

**Example Usage:**
	
	:::java	
	BatteryData data = paymentDevice.getLowBatteryThreshold();
	String batteryLevel = String.valueOf(data.getValue());


**Returns:**

com.symbol.emdk.payment.BatteryData - Returns the BatteryData object holds low battery threshold value
         and PaymentResult.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT

### setLowBatteryThreshold

**public PaymentResults setLowBatteryThreshold(int lowThreshold, java.lang.String lowBatterMessage)**

Sets the acceptable low battery level. If the battery drops below this
 value, the device will not execute some of the selected payment
 transaction commands and it will return the error code indicating the
 battery is low.

**Parameters:**

`lowThreshold` - Below this value, some of the commands will not execute. Note:
            The values for PD40-100 device are 0 - Low power, almost 0% 1 -
            The battery icon display 1 grid ( 1% to 25%) 2 - The battery
            icon display 2 grids (25% to 50 %) 3 - The battery icon
            display 3 grids (50% to 75%) 4 - The battery icon display 4
            grids (75% to 100%)

`lowBatterMessage` - The message to be displayed when the battery level goes below
            the low threshold.
            
 Note :The battery check will be done only for the following commands:
		1.	ReadCardData
		2.	promptPin
		3.	completeOnlineEmv
		4.	createMac
		5.	validateMac
		6.	getEmvTags
		7.	setEmvTags
		8.	authorizeCard	            
 

**Example Usage:**
	
	:::java	
	paymentDevice.setLowBatteryThreshold(2,"The power is in battery grid2");


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         NULL_POINTER

### getInterfaceConfig

**public InterfaceConfig getInterfaceConfig()**

This method provides access to get the interface configurations object. 
 The field in the interface configuration must be updated and must call the setInterfaceConfig method to set these values.

**Returns:**

com.symbol.emdk.payment.InterfaceConfig - Returns InterfaceConfig object on success.
 
 <p>
 <blockquote>
 
 <pre>
 {@code
 Example Usage:
  InterfaceConfig interfaceConfig = paymentDevice.getInterfaceConfig();  

 }
 </pre>
 
 </blockquote>

**Throws:**

com.symbol.emdk.payment.PaymentException

will be thrown if any error occurs.
 
         Possible Error codes: SUCCESS, FAILURE, UNDEFINED.

### setInterfaceConfig

**public void setInterfaceConfig(InterfaceConfig interfaceConfig)**

This method provides access to set the interface configurations like connect to the payment device. This
 must be set before calling the enable method. Setting the MAC address of payment device gives quicker 
 response from enable method compared to setting the device name.
 This is an optional method to modify device information required to enable the payment device. 
 

**Example Usage:**
	
	:::java	
	InterfaceConfig interfaceConfig = paymentDevice.getInterfaceConfig();
	interfaceConfig.macAddress = "8CDE520FE2FE";
	paymentDevice.setInterfaceConfig(interfaceConfig);
	payment.enable();


**Parameters:**

`interfaceConfig` - The Parameters to use for this payment device configurations.

**Returns:**

void

**Throws:**

com.symbol.emdk.payment.PaymentException

will be thrown if any error occurs.
 
 		   Possible Error codes: SUCCESS, FAILURE, UNDEFINED.

### removeCard

**public void removeCard(java.lang.String message1, java.lang.String message2)**

Instruct the user to remove the EMV card inserted in the payment device. This is an asynchronous call.
 This call prompts the user to remove the inserted EMV chip card and also clears the EMV data saved by readCardData method.
 This call  will not return until you remove the card.

**Parameters:**

`message1` - The message which gives the information of type of card.

`message2` - the message which gives instructions to user for the removal of the card.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.removeCard("EMVCard", "please remove the Card");


**Returns:**

void

**Throws:**

com.symbol.emdk.payment.PaymentException

will be thrown if any error occurs.

### downloadFile

**public PaymentResults downloadFile(PaymentDevice.DownloadType downloadType, java.lang.String filePath)**

downloadFile is an asynchronous call. The method allows the application to download the file such as EMV Params file,
 payment device firmware.The result status will be returned through the registered callback.Any other payment API call 
 cannot  disturb downloading file , if done PREVIOUS_COMMAND_PENDING is returned.

**Parameters:**

`downloadType` - This indicates the type of File to download either DownloadType.EMVPARA or DownloadType.FIRMARE  file.

`filePath` - This is  file location accepted for downloading files.
 
 

**Example Usage:**
	
	:::java	
	paymentDevice.downloadFile(DownloadType.EMVPARAM, "//Sdcard//Payment//EmvParam");


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         NULL_POINTER,PREVIOUS_COMMAND_PENDING

### downloadFile

**public PaymentResults downloadFile(PaymentDevice.DownloadType downloadType, byte fileData)**

downloadFile is an asynchronous call. The application must be able to download or update the file such as EMV parameter,Firmware file or font file to the payment Device.
 The  downloadFile status will be returned through the registered callback.Once application starts download, other requests are not allowed and the PREVIOUS_COMMAND_PENDING 
 will be returned until download completes.

**Parameters:**

`downloadType` - The type of File to download such as  EMV parameter ,Firmware file, etc.

`fileData` - The  complete download data.The partial data is not allowed.
 
 

**Example Usage:**
	
	:::java	
	
	
	
	
	in = new FileInputStream("//sdcard//Payment//EmvParam");
	int bufferSize = in.available();
	byte[] emvParamBuffer = new byte[bufferSize];
	
	while ((byteread = in.read(emvParamBuffer)) != -1) 
	result = paymentDevice.downloadFile(DownloadType.EMVPARA, emvParamBuffer));


**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns PaymentResults.
 
         Possible Error codes: SUCCESS, FAILURE, DEVICE_NOT_ENABLED,
         COMMUNICATION_ERROR, CONNECTION_ERROR, INVALID_OBJECT,
         NULL_POINTER,PREVIOUS_COMMAND_PENDING

### getDateTime

**public String getDateTime()**

The getDateTime method is blocking (synchronous) call which retrieves the date and time from 
 the payment device. The payment device must be enabled before calling getDateTime method .
 Exception will be thrown if any error occurs.

**Returns:**

java.lang.String - String
 Returns the date and time string  in the format "YYYY-MM-DD HH:MM:SS"
 		YYYY  = four-digit year
 		MM    = two-digit month (01=January, etc.)
 		DD    = two-digit day of month (01 through 31)
 		HH    = two digits of hour (00 through 23)
 		MM    = two digits of minute (00 through 59)
 		SS    = two digits of second (00 through 59)

**Throws:**

com.symbol.emdk.payment.PaymentException

The exception will thrown if any unexpected error occurs.
             	
             Possible Error codes: SUCCESS, FAILURE, COMMUNICATION_ERROR,
             CONNECTION_ERROR, PREVIOUS_COMMAND_PENDING,
             INVALID_OBJECT.

### setDateTime

**public void setDateTime(java.lang.String dateTime)**

The setDateTime method is blocking (synchronous) call which helps to 
 set the date and time on the payment device.The payment device must 
 be enabled before calling setDateTime method.

**Parameters:**

`dateTime` - - Date and time string  in the format "YYYY-MM-DD HH:MM:SS". The date and time can be separated  by space.

 Where
 		YYYY  = four-digit year.
 		MM    = two-digit month (01=January, etc.).
 		DD    = two-digit day of month (01 through 31).
 		HH    = two digits of hour (00 through 23) (am/pm NOT allowed).
 		MM 	  = two digits of minute (00 through 59).
 		SS    = two digits of second (00 through 59).

**Returns:**

void - Returns NONE.

**Throws:**

com.symbol.emdk.payment.PaymentException

The exception will thrown if any unexpected error occurs.
             	
             Possible Error codes: SUCCESS, FAILURE, COMMUNICATION_ERROR,
             CONNECTION_ERROR, PREVIOUS_COMMAND_PENDING,
             INVALID_OBJECT,INVALID_VALUE,NULL_POINTER.

### addDataListener

**public void addDataListener(PaymentDevice.DataListener listener)**

The client application can register to get data notification via callbacks.

**Parameters:**

`listener` - The DataListener callabck object.

**Returns:**

void

**Throws:**

com.symbol.emdk.payment.PaymentException

Exception will be thrown if any error occurs during this
             call.

### removeDataListener

**public void removeDataListener(PaymentDevice.DataListener listener)**

The client application can un-register to get data notification via callbacks.

**Parameters:**

`listener`

**Returns:**

void

**Throws:**

com.symbol.emdk.payment.PaymentException

Exception will be thrown if any error occurs during this call.

##Public Enums

###PaymentDevice.ReadMode

Lists type of read mode supported by the readCardData. The read mode
 support is dependent on the payment device support. Ex: PD40-100 does not
 support read mode TOUCH.

**Values:**

* **SWIPE** -The card read mode is swipe only.

* **INSERT** -The card read mode is insert only.

* **TOUCH** -The card read mode is touch only.This is for future use.

* **MANUAL** -Manual Entry, which requires entering the card information manually.

* **ALL** -The card read mode is swipe, insert and touch.

###PaymentDevice.DataEncryptionType

Lists the type pf Encryption Algorithms applied on the data.

**Values:**

* **NONE** -No Encryption applied on data

* **TRIPLE_DES** -3DES is an encryption Algorithm where DES applied 3 times using
 DUKPT.

* **AES** -Advanced Encryption Standard Algorithm for Encryption.

* **RSA_1024** -Public key Algorithm with 1024 bit key.

* **RSA_2048** -Public key Algorithm with 2048 bit key.

###PaymentDevice.CardEncodeType

List indicates the type of encoding that was found on the card.

**Values:**

* **ISO_ABA** -ISO/ABA encoding type is payment card type.

* **NON_ISO_ABA** -Card type is non payment cards.

###PaymentDevice.DownloadType

The payment Device download or update type.

**Values:**

* **FIRMWARE** -Firmware update.

* **EMVPARAM** -EMV parameter download.

* **FONT** -Download and install Fonts.

###PaymentDevice.HostDecision

Decision indicator from the host response.

**Values:**

* **HOST_AUTHORIZED**

* **HOST_DECLINE**

* **CONNECT_FAILED**

###PaymentDevice.MerchantDecision

The merchant decision notes additional handling for the EMV request based
 on required processor handling.

**Values:**

* **REQUEST_TC**

* **FORCE_ONLINE** -This merchant decision insists the transaction to be online with the usage of PIN.

* **FORCE_DECLINE**


