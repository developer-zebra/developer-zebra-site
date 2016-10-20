---
title: EMDK Mobile Payment Programmers Guide
layout: guide.html
product: EMDK For Android
productversion: '6.0'
---

The EMDK for Android provides developers with a comprehensive set of
tools to easily create Payment application for use with the Symbol
Technologies, Inc enterprise mobility device and PD40-100 payment
device.

##Enabling the payment device

The following requirements must satisfy before calling enable method to
enable the payment device to do transactions.

-   By default the payment device (PD40-100) is not discoverable. If the
    user wants to manually pair the PD40 payment with the mobile device,
    PD40 can be made discoverable by pressing Enter + 9 on the PD40.

    The recommended solution is for developer is to use to scan the
    barcode available on the backside of PD40 and programmatically pair
    the PD40 with the mobile device.

-   The payment device (PD40-100) must be paired to the mobile device
    before using the EMDK Mobile Payment APIs.

-   The application can get payment device object can obtained in the
    following ways:

    -   Using device identifier to use first paired PD40 to the
        mobile device.

    -   Enumerate the paired PD40 payment devices and use its device
        info

    -   Using the device address. Providing friendly name involves
        Bluetooth device discovery to get the specified
        Bluetooth device. Establishing connection with payment device
        using MAC address will be quicker than friendly name.

-   The clients must implement the data listener interface and register
    for notifications. The status of the enable will be returned through
    the registered listener.

The application can call other methods only after the successful
enabling of the payment device. It recommended that application must
call the disable PD40 when the application does not require anymore
which will allow other applications can use the payment device if
needed.

##Payment Device Configuration


The payment device settings can be configured using the
PaymentDevice.getConfig and PaymentDevice.setConfig methods. The payment
device must be enabled before calling getConfig and setConfig methods.
As per the current PD40-100 payment device, all the parameters set are
global across different application, but in the future PD40-100 binaries
this will be made local to the application which configures the payment
device.

###idleMessage

The idle message displayed on the payment device can be configured by
using idleMessage field in PaymentConfig.

###sleepModeTimeout

The payment device PD40-100 has the default sleep mode timeout.
Bluetooth connection with mobile computer will remain enabled even after
PD40 goes to sleep mode.

The application can modify the default sleep mode time. Setting the
sleep mode time out zero will turn off the device going to sleep mode.
The turning off the sleep mode will consume the some power and the
battery will discharge quickly.

###getAllEncyptedData

When the Encryption is ON, readCardData will return encrypted track2
data for MSR and encrypted tag “57” data for EMV by default. To get the
encrypted track1 and track2 data for MSR and encrypted tag “5A” data,
getAllEncryptedData flag must be set to true before issuing calls to
card data.

###dataEncryptionType

By default the PD40-100 payment device returns the data in as clear
text. If the payment application want to receive the card data encrypted
data, this flag must be set the required encryption type if that
encryption is supported by the payment device.

### Configuring the Messages Displayed on the Payment Device.

The readCardData and promptPin method has overloaded methods one does
not take any message and other provides an option to pass the message
which will be displayed on the payment device. The payment application
which wants use the default message defined by the payment device can
call the method without any message. The payment application which wants
to configure the message displayed on the can pass the message which be
displayed on the Payment device.

###EMV Transaction

For the EMV transaction, the card needs to be inserted until the
transaction is completed and removing the inserted card while processing
will lead to failure. When the transaction is completed, the payment
application must call the removeCard to instruct the user to remove
card. Also removeCard wipes out the EMV card data stored the payment
device. So it is recommended to call the removeCard at the end of the
EMV transaction.

###PromptPin

The promptPin API will succeed only if the payment device is injected
with debit key. When the promptPin is called, the payment device
validates the last four digits of the account number against the
previously read card data. The application can pass the maskedPAN
returned by readCardData as input to account number in the promptPin.

###GetEmvTags

Gets tag information from the inserted card. If there is no tag passed
to D180, then all the TLV data according to predefined getEMVTags table
will be returned. Tags Returned from getEMVTags could be found in the
GetEMVTags Table.If there is(are) one(more than one) tag(s) passed to
D180, then just the specific TLV data will be returned.

Specific tags can be defined in tagIDs as explained in the following.

**For example:**

    :::java
    ArrayList<String> emvTagData = new ArrayList&lt;String&gt;();
    
    emvTagData.add("5F2A");
    
    emvTagData.add("5F20");
    
    emvTagData.add("82");
    PaymentResults result = paymentDevice.getEmvTags(emvTagData);

**GetEMVTags Table**

<table border=1>
<tr><th>Tag Identifier</th><th>Description</th></tr>
<tr><td>9F41</td><td>Transaction Sequence Counter from terminal</td></tr>
<tr><td>9F02</td><td>Amount Authorized</td></tr>
<tr><td>9F03</td><td>Amount (other) (TIP)</td></tr>
<tr><td>5F36</td><td>Transaction currency component</td></tr>
<tr><td>9F1B</td><td>Terminal Floor Limit</td></tr>
<tr><td>9F1C</td><td>Terminal Identification</td></tr>
<tr><td>9F35</td><td>Terminal Type</td></tr>
<tr><td>9F1A</td><td>Terminal Country Code</td></tr>
<tr><td>5F2A</td><td>Transaction Currency Code</td></tr>
<tr><td>82</td><td>Application Interchange Profile Indicates the capabilities of the card to support specific functions in the application</td></tr>
<tr><td>9F37</td><td>Unpredictable Number Value to provide variability and uniqueness to the generation of a cryptogram</td></tr>
<tr><td>9C</td><td>Transaction Type</td></tr>
<tr><td>9F10</td><td>Issuer Application Data</td></tr>
<tr><td>84</td><td>Dedicated File Name</td></tr>
<tr><td>9F09</td><td>Application Version Number</td></tr>
<tr><td> 9F34</td><td>CVM Cardholder verification Method</td></tr>
<tr><td>9F07</td><td>Application Usage Control Indicates issuer‘s specified restrictions on the geographic usage and services allowed for the application</td></tr>
<tr><td>9F0D</td><td>Issuer Action Code-Default</td></tr>
<tr><td>9F0E</td><td>Issuer Action Code – Denial</td></tr>
<tr><td>9F0F</td><td>Issuer Action Code – Online</td></tr>
<tr><td>9F33</td><td>Terminal Capabilities</td></tr>
<tr><td>5F34</td><td>Application PAN sequence Number</td></tr>
<tr><td>9F39</td><td>POS Entry Mode</td></tr>
<tr><td>8E</td><td>CVM List Identifies a method of verification of the cardholder supported by the application</td></tr>
<tr><td>5A</td><td>Application Primary Account Number</td></tr>
<tr><td>57</td><td>Track 2 equivalent</td></tr>
<tr><td>5F20 OR 9F0B</td><td>Cardholder name or Extended</td></tr>
<tr><td>9F1F</td><td>Track 2 discretionary data</td></tr>
<tr><td>9F7A</td><td>VLP process indicator</td></tr>
<tr><td>9F74</td><td>VLP authorization code</td></tr>
</table>

###AuthorizeCard

Authorizes the EMV transaction amounts using the inserted chip (EMV)
card after processing returns authorized card data in the form of tags.

***Tags Returned from authorizeCard***

<table border=1>
<tr><th>Tag Identifier</th><th>Description</th></tr>
<tr><td>C2</td><td>Signature Flag Authentication</td></tr>
<tr><td>9B</td><td>Transaction Status Information</td></tr>
<tr><td>9F27</td><td>Cryptogram Information Data</td></tr>
<tr><td>8A</td><td>Authorization response Code</td></tr>
<tr><td>9F26</td><td>Cryptogram returned by the ICC in response of the GENERATE AC command</td></tr>
<tr><td>9F36</td><td>Application Transaction Counter Counter maintained by the application in the ICC (incrementing the ATC is managed by the ICC)</td></tr>
<tr><td>9F1</td><td>Issuer Application Data</td></tr>
</table>

###ReadCardData

Reads the card data from the PAYMENT device and after processing returns
the data in the TLV (Tag length Value) format*. *

**Tags returned from ReadCardData**

<table border=1>
<tr><th>Tag Identifier</th><th>Description</th></tr>
<tr><td>4F</td><td>Application Identifier</td></tr>
<tr><td>9F12</td><td>Application preferred Name</td></tr>
<tr><td>50</td><td>Application Label</td></tr>
<tr><td>5F30</td><td>Service Code</td></tr>
<tr><td>5F20</td><td>Cardholder Name</td></tr>
<tr><td>57</td><td>Track 2 Equivalent</br>
Primary Account Number</br>
Field Separator (Hex 'D')</br>
Expiration Date (YYMM)</br>
Service Code</br>
Discretionary Data (defined by individual payment systems)</br>
Pad with one Hex 'F' if needed to ensure whole bytes</td></tr>

<tr><td>5A</td><td>Application Primary Account Number</td></tr>
<tr><td>5F24</td><td>Application Expiry Date</td></tr>
<tr><td>5F34</td><td>Application Primary account Number sequence number</td></tr>
<tr><td>5F25</td><td>Application Effective Date</td></tr>
</table>

For ReadMode.ALL mode, The D180 will fall back to swipe mode if the card
inserted is not supported by payment device. Fallback to swipe is not
supported for read modes like INSERT only and SWIPE only.

If encryption type RSA is set using setConfig API, ReadCardData with
ReadMode.MANUAL mode returns the card data only if RSA Encryption key is
injected into the D180.

###completeOnLineEMV

Completes an online EMV transaction for PIN management.

**Tags set through completeOnlineEMV**

<table border=1>
<tr><th>Tag Identifier</th><th>Description</th></tr>
<tr><td>91</td><td>Issuer Authentication Data. Optional tag, if issuer authentication data is returned by host</td></tr>
<tr><td>71/72</td><td>Issuer Script. Optional tag, if issuer script is returned by host</td></tr>
<tr><td>8A</td><td>Host Authorization Response Code</td></tr>
<tr><td>89</td><td>Host Authorization Code. Optional tag</td></tr>
</table>


**Behavior of EMDK Payment API when the PD40-100 displays Bluetooth
connection status on its screen.**

The user can use key combination specified in the PD40 manual to see the
PD40 Bluetooth connection status. When this happens, PD40 shows the
Bluetooth connection status on its displayed and while this status is
displayed on the PD40 screen, calling payment API will result in
communication error.

**Behavior of re-enabling the PD40 immediately disabling**

The application enables the PD40-100 and does the transaction, then
disables the PD40-100. When applications requests EMDK to disable the
connection with the PD40-100 by disable method, the disable method will
be returned as soon it closes the Bluetooth socket connection. But
Bluetooth stack is internally might take few seconds to free-up the
resources associated with the established connection.

While this is happening, if the application tries to re-enable the
payment device, it might lead to connection error.

To overcome this error, the application either wait for few seconds or
register the BluetoothDevice.ACTION\_ACL\_DISCONNECTED intents or the
EMDK PaymentManager connection listener to receive notification of the
Bluetooth stack is successfully disconnected.

###Choosing Payment Device:

This section describes how can the application access the payment device
and enable it to do trasnaction.

**Case 1: Payment Device Type supported (Such as PD40), choose payment
device by friendly name.**

    :::java
    List<DeviceInfo>; supportedList =
    paymentManager.getSupportedDevicesInfo();
    
    PaymentDevice device = null;
    
    If(!supportedList.isEmpty()) {
    
    device = paymentManager.getDevice(friendlyname,false);
    
    device.enable();

    } else {
        
    //Error
    
    }

**Case 2: Multiple Payment Devices are paired and required payment
device does not exist in the list.**

    :::java
    List<DeviceInfo> pairedDevList =
    paymentManager.getPairedDevicesInfo(DeviceType.PD40);
    
    PaymentDevice device = null;
    
    If(!pairedDevList.isEmpty()) {
    
    //Traverse on the list of paired device and check if the required
    device exists in the list.
    
     If(required device not in the paired list) {
         
    //Use scan and pair API to pair the device, or required device is not
     already paired.
     
     // device = paymentManager.getDevice(friendly name, false);
    
     device = paymentManager.getDevice(macAddress, true);
     
     device.enable();
     
     }
     
    }

**Case 3: Multiple Payment Devices are paired and choose payment device
from paired device list.**

If the multiple payment devices are paired, the application can
enumerate the list of paired devices and selects the required payment
device. If the payment device is paired, but not in range or switched
will result in the connection error during the enable.

    :::java
     List<DeviceInfo> pairedDevList =
     paymentManager.getPairedDevicesInfo(DeviceType.PD40);
     
     PaymentDevice device = null;
     
     If(!pairedDevList.isEmpty()) {
         
     device = paymentManager.getDevice((pairedDevList.get(1));
     
     device.enable();
     
     } else {
         
     // No Payment devices paired
     
     }

**Case 4: Multiple Payment Devices are paired and chooses the default
device. The default device is the device which is first available in the
Bluetooth device paired list. If the device is paired, but not in range
or switched-off, then it will give connection error.**

    :::java
    PaymentDevice device =
    paymentManager.getDevice(DeviceIdentifier.*DEFAULT*);
    
    device.enable();

**Case 5: Multiple Payment Devices are paired and chooses the first
available PD40 device.**

    :::java
    PaymentDevice device =
    paymentManager.getDevice(DeviceIdentifier.PD40);
    
    device.enable();

**Case 6: Multiple Payment Devices are paired and chooses the device
using mac address or friendly name. **

    :::java
    PaymentDevice device = paymentManager.getDevice(“<mac
    address>>”, true);
    
     Or
     
     PaymentDevice device = paymentManager.getDevice(“<friendly
     name>>;”, false);
     
     device.enable();

**Case 6: Multiple payment devices are paired and set the mac
address/friendly name via interface config**

    :::java
    PaymentDevice device = paymentManager.getDevice(DEFAULT);
    
     InterfaceConfig interfaceConfig = paymentDevice.getInterfaceConfig();
     
    interfaceConfig.deviceName = "MPOS-64627969";
    
     paymentDevice.setInterfaceConfig(interfaceConfig);
     
     device.enable();









#PD40 Remote Firmware and EMV Param Update

The Payment Manager is a service runs on mobile device which allows
querying the information such as firmware/application version and
current battery level; updating the firmware, updating EMV parameters
and installing font on remote PD40 payment device. The updating EMV
parameters and installing font will be supported in the future version.
The PD40 payment devices must be paired with mobile device before using
the Payment Manager.

The Payment Manager takes the input profile xml, performs the tasks
specified in the input profile xml and returns response xml.

##Communicating with Payment Service


The application must include the permission to access Payment Manager
Service in application’s AndroidManifest.xml as below:

    :::xml
    <uses-permission android:name="com.symbol.permission.PAYMENTMGR"/>;

The application must write a code start the Payment Manager Service and
this can be achieved in two ways:

1.  Binding Method

2.  Intent Method

###Binding Method

The Payment Manager Service exposes an AIDL (Android Interface
Definition Language) for the application to communicate Payment Manager
Service for querying and updating payment device.

The AIDL interface file name is “IPaymentManager.aidl” and its content
is below:

    :::java
    package com.symbol.paymentmgr; 
    
     interface IPaymentManager {
     
     String processXML(String profileXml);
     
     }

The application can bind to Payment Manager Service and when the service
is connected, the application can call the processXML method to perform
the tasks specified the profile XML.

The Payment Manager Service package name and class details are below:

    :::java
     String PAYMENT_SERVICE_PACKAG_NAME = "com.symbol.paymentmgr"; 
     
     String PAYMENT_SERVICE_CLASS_NAME =
     "com.symbol.paymentmgr.PaymentMgrService";

**Code snippet**

    :::java
    Intent bindSvcIntent = new Intent();
    
    bindSvcIntent.setComponent(new
    ComponentName(PAYMENT_SERVICE_PACKAG_NAME,
    PAYMENT_SERVICE_CLASS_NAME )); 
    
    bindService(bindSvcIntent, paymentMgrServiceConnObj,
    Context.BIND_AUTO_CREATE);
    
    IPaymentManager paymentMgr = null;
    
    public class PaymentMgrServiceConn implements ServiceConnection {
        
    @Override
    public void onServiceConnected(ComponentName name, IBinder service) {
        
    paymentMgr = IPaymentManager .Stub.asInterface(service);
    
    String responseXml = paymentMgr. processXML(profileXml)
    
    }
    
    @Override
    
    public void onServiceDisconnected(ComponentName name) {
        
    }
    
    }
    
    unbindService(this);// Unbind service connection once at the end of
    processing or application exit.

###Intent Method


The Payment Manager Service exposes intent for the application to
communicate Payment Manager Service for querying and updating payment
device. The application must the send the profile XML as a part of the
intent which starts the service and service will be exited automatically
at the end of completion of the tasks specified in the profile.


    :::java
    Intents to start the payment service:
    
    String PAYMENT_SERVICE_PACKAG_NAME = "com.symbol.paymentmgr"; 
    
    String PAYMENT_SERVICE_CLASS_NAME  =
    "com.symbol.paymentmgr.PaymentMgrService";
    
    String PAYMENT_SERVICE_PROFILE_EX_DATA_NAME  =
    "com.symbol.paymentmgr.PROFILE_XML”;
    
    Intents to receive the result from the payment service:
    
    String PAYMENT_SERVICE_RESULT_INTENT_NAME =
    "com.symbol.paymentmgr.RESULT”;
    
    String PAYMENT_SERVICE_ RESULT_EX_DATA_NAME =
    "com.symbol.paymentmgr.RESPONSE”;

**Code Snippet:**

Start the Payment Service by sending intent to update the PD40 payment
device.

Option 1: 

    :::java
    Intent intent = new Intent();
    
    intent.setAction(PAYMENT_SERVICE_PACKAG_NAME);
                                                    
                            
    
    intent.putExtra(PAYMENT_SERVICE_PROFILE_EX_DATA_NAME,
    profileXmlString);
    
    startService(intent);                         

Option 2:      

    :::java
    Intent intent = new Intent();                                                          
         
    intent.setComponent(new
    ComponentName(PAYMENT_SERVICE_PACKAG_NAME,
    PAYMENT_SERVICE_CLASS_NAME ));     
    
    intent.putExtra(PAYMENT_SERVICE_PROFILE_EX_DATA_NAME,
    profileXmlString);
    
    startService(intent);           

Register for the intent to receive result from the payment service:

    :::java
    IntentFilter filter = new IntentFilter();
    
    filter.addAction(INTENT_PAYMNT_SERVICE_RESULT);       
    
    appContext.registerReceiver(broadcastReceiver, filter);
    
    private final BroadcastReceiver broadcastReceiver = new
    BroadcastReceiver() {
        
    @Override       
    
    public void onReceive(Context context, Intent intent) {
        
    if
    (intent.getAction().equals(INTENT_PAYMNT_SERVICE_RESULT)) {
        
                     String responseString =
    intent.getStringExtra(PAYMENT_SERVICE_ RESULT_EX_DATA_NAME);
    
                }
    
            }
    
       };
    
    //…
    
    unregisterReceiver(broadcastReceiver); //Unregister the intent
    receiver at the end.

##Payment Manager Profile XML


The Payment Manager Profile allows the system admin application to query
the payment device information such as firmware version and battery
level, and update Payment Device. These capabilities are grouped
together into single XML, what is referred to as Payment Manager
Profiles.

###Supported Parameters List

<table border=1>
<tr><th>Parm Name</th><th>Description</th></tr>
<tr><td>DeviceAddress</td><td>List of PD40 Mac addresses or friendly names separated by “|”. If this value is empty or field doesn’t exists, all paired PD40 devices considered for query and update.
                                 
                                 Example:
                                 
                                 &lt;parm name =“DeviceAddress” value=“11:22:33:44:55:66|MPOS-12345667”/&gt;</td></tr>

<tr><td>IsUpgradeOnly</td><td>The supported values are true/false.
                                 
                                 If this parameter is set to true, the downloading lower or same versions of firmware is not allowed. If this parameter is set to false, device will be updated independent of the version. The default value is true. This is an optional field, applicable only for firmware update and for others it will be ignored.
                                 
                                 Example:
                                 
                                 &lt;parm name=“IsUpgradeOnly” value=“false”/&gt;</td></tr>

<tr><td>BatteryLevel</td><td>This queries the battery level of the PD40 Payment Device. This is optional field in the XML and is required only to query the PD40 battery level.
                                 
                                 Example:
                                 
                                 &lt;parm-query name=“BatteryLevel”&gt;
                                 
                                 Response:
                                 
                                 &lt;parm name=“BatteryLevel” Value=“3”&gt;
                                 
                                 The Battery level response values will be separated by | when queried for multiple devices.</td></tr>

<tr><td>Version</td><td>This returns version of the PD40 firmware and application in the format “F&lt;version&gt;_A&lt;version&gt;”. This is required only to query the version.
                                 
                                 Example:
                                 
                                 &lt;parm-query name=“Version”&gt;
                                 
                                 Response:
                                 
                                 &lt;parm name=“Version” Value=“F1.09_A1.2.0”&gt; 
                                 
                                 The versions will be separated by | for multiple devices.</td></tr>

<tr><td>DownloadType</td><td>Download file types are “FIRMWARE”, “EMVPARAM” and “FONT”. This is mandatory to update the device. The EMVPARAM and FONT will be supported in the future version.
                                 
                                 Example:
                                 
                                 &lt;parm name=“DownloadType” value=“FIRMWARE”/&gt;</td></tr>

<tr><td>DownloadFile</td><td>Name of the download file and its path. This is mandatory to update the device. The Firmware update file name format must be “D180_F&lt;&lt;version&gt;_A&lt;&lt;version&gt;&gt;.bin or PD40_F&lt;&lt;version&gt;_A&lt;&lt;version&gt;&gt;.bin
                                 
                                 Example:
                                 
                                 “D180_F1.07_A1.1.6.bin”
                                 
                                 The EMV Param update file name may look like emvpara or emvpara_&lt;&lt;n&gt;&gt; or any other name.
                                 
                                 Example:
                                 
                                 &lt;parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.1.6.bin”/&gt;
                                 
                                 &lt;parm name=“DownloadFile” value=“/sdcard/emvpara”/&gt;</td></tr>

<tr><td>NumberOfRetries</td><td>Re-tries when connection failure or error occurs to update PD40 device. The default value is “1”. The range is 1 to 5. This is optional field in the XML. The Payment Manager will re-try after 500 ms if error any occurs and number of re-tries is greater than 1.
                                 
                                 Example:
                                 
                                 &lt;parm name=“ NumberOfRetries” value=“2”/&gt;</td></tr>

<tr><td>MinPaymentDeviceBatteryLevel</td><td>Minimum Payment Device battery level to start the update process. If this field is not set, the payment device defined default value is used. This is optional field in the XML. Range is 0 to 4.
                                 
                                 Example:
                                 
                                 &lt;parm name=“ MinPaymentDeviceBatteryLevel” value=“1”/&gt;</td></tr>

<tr><td>MinMobileDeviceBatteryLevel</td><td>Minimum Mobile Device battery level to start the update process. If this field is not set, 30% is considered as default. This is optional field in the XML.
                                 
                                 &lt;parm name=“ MinMobileDeviceBatteryLevel” value=“40”/&gt;</td></tr>
</table>

###Profile XML input


The profile must contain *wap-provisioningdoc* as root node, one or more
*characteristic* node with type as *PaymentMgr*, *version* value as
“0.1”. The version attribute is reserved for future use only. Each
*characteristic* node can have one or more parm or parm-query nodes.

Example:

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>
    
    <!—Sample characteristic node to update firmware -->
    
    <characteristic type=“PaymentMgr” version="0.1" >
    
    < parm name =“DeviceAddress”
    value=“11:22:33:44:55:66|MPOS-12345667”/>
    
    <parm name=“DownloadType” value=“FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.1.6.bin”/>
    
    </characteristic>
    
    <!—Sample characteristic node to update firmware -->
    
    <characteristic type=“PaymentMgr” version="0.1" >
    
    <parm name =“DeviceAddress” value=“MPOS-12345001”/>
    
    <parm name=“DownloadType” value=“ FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.1.6.bin”/>
    
    </characteristic>
    
    <!—Sample characteristic node to query version -->
    
    <characteristic type=“PaymentMgr” version="0.1" >
    
    <parm name =“DeviceAddress” value=“MPOS-12345000”/>
    
    <parm-query name =“Version”/>
    
    </characteristic>
    
    </wap-provisioningdoc>
    
    
##Profile XML response


### Success Case

The Payment Manager Service returns the xml same as the profile input or
updated parm value(in case of query) if the request is processed
successfully.

### Failure Case

The corresponding characteristic node with failure will be renamed to
characteristic-error, desc attribute will be added with the error
details. If parm values specified are not valid, the corresponding parm
node will be renamed to parm-error and desc attribute will be added with
the error details.

If XML characteristic node has multiple devices requests, then desc will
have error separated by | in the order of the devices list at the
characteristic node desc filed.

Example:

If the input xml parm node has:

    :::xml
    <parm name =“DeviceAddress” value=“11:22:33:44:55:66|00:00:00:00:99:11|MPOS-12345667”/>

The response xml characteristic node will be like:

    :::xml
    characteristic-error type=“PaymentMgr” version="0.1"
    desc=“REMOTE_DEVICE_NOT_PAIRED: Bluetooth remote device is not paired
    with mobile device.|SUCCESS| REMOTE_DEVICE_BATTERY_LOW: Remote device
    has low battery and operation can't be performed.”>

### Not Supported Case

If any of the characteristic or parm node names specified is not valid
or not supported, the desc attribute will be added with the feature not
supported error information.

Example:

If the input xml parm node is:

    :::xml
    <parm name="TimeZone1" value="GMT+05:30">

The response xml parm node will like:

    :::xml
    <parm-error name="TimeZone1" value="GMT+05:30"
    desc="FEATURE_NOT_SUPPORTED:The feature or parameters or its value is
    not supported."/>

Example:

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    
    <wap-provisioningdoc>
    
    <!—Firmware update response -->

    <characteristic type=“PaymentMgr” version="0.1" >

    < parm name =“DeviceAddress”
    value=“11:22:33:44:55:66|MPOS-12345667”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.1.6.bin”/>

    </characteristic>

    <!— Firmware update response -->

    <characteristic-error type=“PaymentMgr” version="0.1"
    desc=”REMOTE_DEVICE_NOT_PAIRED:Bluetooth remote device is not
    paired with mobile device.”>

    < parm name =“DeviceAddress” value=“MPOS-12345001”/>

    <parm name=“DownloadType” value=” FIRMWARE”/>

    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.1.6.bin”/>

    </characteristic>

    <!—Version query response -->

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    < parm name =“Version” value=”F1.09_A1.2.0”/>

    </characteristic>

    </wap-provisioningdoc>

##Error Codes

<table border=1>
<tr><th>Error Name</th><th>Description</th></tr>
<tr><td>SUCCESS</td><td>Success</td></tr>
<tr><td>FAILURE</td><td>Failure</td></tr>
<tr><td>UNDEFINED</td><td>Unknown error occurred</td></tr>
<tr><td>NULL_POINTER</td><td>Null pointer</td></tr>
<tr><td>EMPTY_PROFILE_XML</td><td>Profile XML is empty</td></tr>
<tr><td>INVALID_PROFILE_XML</td><td>The profile xml syntax is incorrect or not supported.</td></tr>
<tr><td>INVALID_VALUE</td><td>Value is not valid.</td></tr>
<tr><td>BUSY</td><td>Processing the other request. Try later...</td></tr>
<tr><td>XML_SYNTAX_ERROR</td><td>XML syntax error</td></tr>
<tr><td>FEATURE_NOT_SUPPORTED</td><td>The feature or parameters or its value is not supported.</td></tr>
<tr><td>REMOTE_DEVICE_NOT_PAIRED</td><td>Bluetooth remote device is not paired with mobile device.</td></tr>
<tr><td>FILE_NOT_EXISTS</td><td>The file specified in the profile xml does not exist.</td></tr>
<tr><td>INITIALIZATION_ERROR</td><td>Error occurred during Initialization.</td></tr>
<tr><td>UNINITIALIZATION_ERROR</td><td>Error occurred during un- Initialization.</td></tr>
<tr><td>INVALID_FIRMWARE_FILE_NAME_FORMAT</td><td>The firmware file name format is invalid</td></tr>
<tr><td>REMOTE_DEVICE_IN_USE</td><td>The remote device is used by other application.</td></tr>
<tr><td>FAILED_ENABLE_REMOTE_DEVICE</td><td>Failed to open connection with remote device.</td></tr>
<tr><td>FAILED_DISABLE_REMOTE_DEVICE</td><td>Failed to close connection with the remote device.</td></tr>
<tr><td>FAILED_CONNECT_TO_REMOTE_DEVICE</td><td>Failed to establish Bluetooth connection with remote device.</td></tr>
<tr><td>FIRMWARE_DOWNGRADE_NOT_ALLOWED</td><td>Downgrading the Firmware is not allowed. Set isUpgradeOnly=false in profile and try.</td></tr>
<tr><td>REMOTE_DEVICE_BATTERY_LOW</td><td>Remote device has low battery and operation can't be performed.</td></tr>
<tr><td>MOBILE_DEVICE_BATTERY_LOW</td><td>Mobile device battery level is low and operation can't be performed.</td></tr>
<tr><td>REMOTE_DEVICE_DISCONNECTED</td><td>The remote device is got disconnected from mobile device.</td></tr>
<tr><td>UPDATE_FILE_SIGNATURE_ERROR</td><td>The update file signature is not valid.</td></tr>
<tr><td>REMOTE_DEVICE_TIME_OUT_ERROR</td><td>Remote device timed out during update process. Try again</td></tr>
<tr><td>AUTHENTICATION_FAILED</td><td>Remote device failed to authenticate with mobile device.</td></tr>
<tr><td>COMMUNICATION_ERROR</td><td>Error occurred during communication with the remote device.</td></tr>
<tr><td>INCOMPLETE_UPDATE_FILE</td><td>The update file is incomplete or incorrect.</td></tr>
<tr><td>UPDATE_FILE_TOO_LARGE</td><td>The update file passed is too large for remote device to update.</td></tr>
<tr><td>DOWNLOAD_TIMEOUT</td><td>The download file request on payment device is timed out.</td></tr>
<tr><td>BLUETOOTH_OFF</td><td>Bluetooth is OFF on host mobile device.</td></tr>
<tr><td>FILE_VERIFICATION_FAILED</td><td>The download file format is not valid.</td></tr>
</table>

##Use Cases with Sample XML


This document lists XML format for only few use cases and it does not
shows all the possible combinations.

###Query PD40 Firmware/Application Version


The application should be able to query the payment device
firmware/application versions.

### Case 1: Query single payment device version 

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    <parm-query name =“Version”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    <parm name =“Version” value=”F1.09_A1.2.0”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 2: Query multiple payment devices version

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress”
    value=“MPOS-12345000|MPOS-123457865”/>
    <parm-query name =“Version”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress”
    value=“MPOS-12345000|MPOS-123457865”/>

    <parm name =“Version” value=”F1.09_A1.2.0|F1.09_A1.1.9”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 3: Query all paired payment devices version

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm-query name =“Version”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress”
    value=“MPOS-12345000|MPOS-123457865”/>

    <parm name =“Version” value=”F1.09_A1.2.0|F1.09_A1.1.9”/>

    </characteristic>

    </wap-provisioningdoc>

###Query PD40 Battery Level


The application should be able to query the payment device battery
level.

### Case 1: Query single payment device battery level 

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    <parm-query name =“BatteryLevel”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    <parm name =“BatteryLevel” value=”2”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 2: Query multiple payment devices battery level

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress”
    value=“MPOS-12345000|MPOS-123457865”/>

    <parm-query name =“BatteryLevel”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name =“BatteryLevel” value=”1|4”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 3: Query all paired payment devices levels

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    < parm-query name =“BatteryLevel”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    < parm name =“ BatteryLevel” value=”1|4”/>

    </characteristic>

    </wap-provisioningdoc>

###Updating PD40 Payment Device Firmware


The application should be able to update the payment device firmware.

### Case 1: Updating single payment device firmware 

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.0.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>
    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.0.bin”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 2: Updating multiple payment devices with same firmware.

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 3: Updating all paired payment devices with same firmware

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 4: Updating multiple payment devices with different firmware.

**Input XML**


    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.0.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.0.bin”/>

    </characteristic>

    </wap-provisioningdoc>

###Combination of Query and Firmware Update


**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress”
    value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345002|MPOS-123457822”/>

    <parm-query name =“Version”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345002|MPOS-123457822”/>

    <parm name =“Version” value=”F1.09_A1.2.0| F1.09_A1.1.9”/>

    </characteristic>

    </wap-provisioningdoc>

##Error Response XML Samples


###Example 1:

The response for the profile input XML with

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    
    <wap-provisioningdoc>
    
    <! --Success Node - ->
    
    <characteristic type=“PaymentMgr” version="0.1" >
    
    < parm name =“DeviceAddress” value=“11:22:33:44:55:66”/>
    
    <parm name=“DownloadType” value=“FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.1.6.bin”/>
    
    </characteristic>
    
    <! –Update failed Node - ->
    
    <characteristic-error type=“PaymentMgr” version="0.1"
    desc=“REMOTE_DEVICE_NOT_PAIRED:Bluetooth remote device is not
    paired with mobile device.”>
    
    < parm name =“DeviceAddress” value=“MPOS-12345678”/>
    
    <parm name=“DownloadType” value=“FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180_F1.07_A1.1.6.bin”/>
    
    </characteristic-error>
    
    <! –Invalid parameter Node ->
    
    <characteristic-error type=“PaymentMgr” version="0.1” desc=“INVALID_VALUE: The download type is missing”>
    
    < parm name =“DeviceAddress” value=“ MPOS-12345123”>
    
    <parm -error name=“DownloadType” value=“” desc =“INVALID_VALUE:The download type is missing”/>
    
    <parm name=“DownloadFile” value=“/sdcard/D180_F1.07_A10.5.0.bin”/>
    
    </characteristic-error>
    
    </wap-provisioningdoc>

###Example 2:


The payment mgr response XML sample with two device successes and one
device error for the version query.

    :::xml
    <?xml version="1.0" encoding="utf-8"?>
    
    <wap-provisioningdoc>
    
    <! –Combination of success and error cases->
    
    <characteristic-error type=“PaymentMgr” version="0.1"
    
    desc=“SUCCESS|FAILED_CONNECT_TO_REMOTE_DEVICE:Failed to establish Bluetooth connection with remote device|SUCCESS”>
    
    <parm name =“DeviceAddress” value=“MPOS-12345678|MPOS-12000002|MPOS-12300001”>
    
    <parm name=“Version” value=“F1.07_A1.1.6||F1.07_A1.2.0/>
    
    </characteristic-error>
    
    </wap-provisioningdoc>












