---
title: PD40 Remote Firmware and EMV Param Update
---

##Overview


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
    <uses-permission android:name="com.symbol.permission.PAYMENTMGR"/>;*

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
     String PAYMENT\_SERVICE\_PACKAG\_NAME = "com.symbol.paymentmgr"; 
     
     String PAYMENT\_SERVICE\_CLASS\_NAME =
     "com.symbol.paymentmgr.PaymentMgrService";

**Code snippet**

    :::java
    Intent bindSvcIntent = new Intent();
    
    bindSvcIntent.setComponent(new
    ComponentName(PAYMENT\_SERVICE\_PACKAG\_NAME,
    PAYMENT\_SERVICE\_CLASS\_NAME )); 
    
    bindService(bindSvcIntent, paymentMgrServiceConnObj,
    Context.BIND\_AUTO\_CREATE);
    
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
    
    String PAYMENT\_SERVICE\_PACKAG\_NAME = "com.symbol.paymentmgr"; 
    
    String PAYMENT\_SERVICE\_CLASS\_NAME  =
    "com.symbol.paymentmgr.PaymentMgrService";
    
    String PAYMENT\_SERVICE\_PROFILE\_EX\_DATA\_NAME  =
    "com.symbol.paymentmgr.PROFILE\_XML”;
    
    Intents to receive the result from the payment service:
    
    String PAYMENT\_SERVICE\_RESULT\_INTENT\_NAME =
    "com.symbol.paymentmgr.RESULT”;
    
    String PAYMENT\_SERVICE\_ RESULT\_EX\_DATA\_NAME =
    "com.symbol.paymentmgr.RESPONSE”;

**Code Snippet:**

Start the Payment Service by sending intent to update the PD40 payment
device.

Option 1: 

    :::java
    Intent intent = new Intent();
    
    intent.setAction(PAYMENT\_SERVICE\_PACKAG\_NAME);
                                                    
                            
    
    intent.putExtra(PAYMENT\_SERVICE\_PROFILE\_EX\_DATA\_NAME,
    profileXmlString);
    
    startService(intent);                         

Option 2:      

    :::java
    Intent intent = new Intent();                                                          
         
    intent.setComponent(new
    ComponentName(PAYMENT\_SERVICE\_PACKAG\_NAME,
    PAYMENT\_SERVICE\_CLASS\_NAME ));     
    
    intent.putExtra(PAYMENT\_SERVICE\_PROFILE\_EX\_DATA\_NAME,
    profileXmlString);
    
    startService(intent);           

Register for the intent to receive result from the payment service:

    :::java
    IntentFilter filter = new IntentFilter();
    
    filter.addAction(INTENT\_PAYMNT\_SERVICE\_RESULT);       
    
    appContext.registerReceiver(broadcastReceiver, filter);
    
    private final BroadcastReceiver broadcastReceiver = new
    BroadcastReceiver() {
        
    @Override       
    
    public void onReceive(Context context, Intent intent) {
        
    if
    (intent.getAction().equals(INTENT\_PAYMNT\_SERVICE\_RESULT)) {
        
                     String responseString =
    intent.getStringExtra(PAYMENT\_SERVICE\_ RESULT\_EX\_DATA\_NAME);
    
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
                                 
                                 *&lt;parm-query name=“BatteryLevel”&gt;*
                                 
                                 Response:
                                 
                                 *&lt;parm name=“BatteryLevel” Value=“3”&gt;*
                                 
                                 The Battery level response values will be separated by | when queried for multiple devices.</td></tr>

<tr><td>Version</td><td>This returns version of the PD40 firmware and application in the format “F&lt;version&gt;\_A&lt;version&gt;”. This is required only to query the version.
                                 
                                 Example:
                                 
                                 *&lt;parm-query name=“Version”&gt;*
                                 
                                 Response:
                                 
                                 *&lt;parm name=“Version” Value=“F1.09\_A1.2.0”&gt; *
                                 
                                 The versions will be separated by | for multiple devices.</td></tr>

<tr><td>DownloadType</td><td>Download file types are “FIRMWARE”, “EMVPARAM” and “FONT”. This is mandatory to update the device. The EMVPARAM and FONT will be supported in the future version.
                                 
                                 Example:
                                 
                                 *&lt;parm name=“DownloadType” value=“FIRMWARE”/&gt;*</td></tr>

<tr><td>DownloadFile</td><td>Name of the download file and its path. This is mandatory to update the device. The Firmware update file name format must be “D180\_F&lt;&lt;version&gt;\_A&lt;&lt;version&gt;&gt;.bin or PD40\_F&lt;&lt;version&gt;\_A&lt;&lt;version&gt;&gt;.bin
                                 
                                 Example:
                                 
                                 “D180\_F1.07\_A1.1.6.bin”
                                 
                                 The EMV Param update file name may look like emvpara or emvpara\_&lt;&lt;n&gt;&gt; or any other name.
                                 
                                 Example:
                                 
                                 *&lt;parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/&gt;*
                                 
                                 *&lt;parm name=“DownloadFile” value=“/sdcard/emvpara”/&gt;*</td></tr>

<tr><td>NumberOfRetries</td><td>Re-tries when connection failure or error occurs to update PD40 device. The default value is “1”. The range is 1 to 5. This is optional field in the XML. The Payment Manager will re-try after 500 ms if error any occurs and number of re-tries is greater than 1.
                                 
                                 Example:
                                 
                                 *&lt;parm name=“* *NumberOfRetries” value=“2”/&gt;*</td></tr>

<tr><td>MinPaymentDeviceBatteryLevel</td><td>Minimum Payment Device battery level to start the update process. If this field is not set, the payment device defined default value is used. This is optional field in the XML. Range is 0 to 4.
                                 
                                 Example:
                                 
                                 *&lt;parm name=“* *MinPaymentDeviceBatteryLevel” value=“1”/&gt;*</td></tr>

<tr><td>MinMobileDeviceBatteryLevel</td><td>Minimum Mobile Device battery level to start the update process. If this field is not set, 30% is considered as default. This is optional field in the XML.
                                 
                                 *&lt;parm name=“* *MinMobileDeviceBatteryLevel” value=“40”/&gt;*</td></tr>
</table>

###Profile XML input


The profile must contain *wap-provisioningdoc* as root node, one or more
*characteristic* node with type as *PaymentMgr*, *version* value as
“0.1”. The version attribute is reserved for future use only. Each
*characteristic* node can have one or more parm or parm-query nodes.

Example:

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc&gt;
    
    <!—Sample characteristic node to update firmware -->
    
    <characteristic type=“PaymentMgr” version="0.1" >
    
    < parm name =“DeviceAddress”
    value=“11:22:33:44:55:66|MPOS-12345667”/>
    
    <parm name=“DownloadType” value=“FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/>
    
    </characteristic>
    
    <!—Sample characteristic node to update firmware -->
    
    <characteristic type=“PaymentMgr” version="0.1" >
    
    <parm name =“DeviceAddress” value=“MPOS-12345001”/>
    
    <parm name=“DownloadType” value=“ FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/>
    
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
    desc=“REMOTE\_DEVICE\_NOT\_PAIRED: Bluetooth remote device is not paired
    with mobile device.|SUCCESS| REMOTE\_DEVICE\_BATTERY\_LOW: Remote device
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
    desc="FEATURE\_NOT\_SUPPORTED:The feature or parameters or its value is
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
    value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/>

    </characteristic>

    <!— Firmware update response -->

    <characteristic-error type=“PaymentMgr” version="0.1"
    desc=”REMOTE\_DEVICE\_NOT\_PAIRED:Bluetooth remote device is not
    paired with mobile device.”&gt;

    < parm name =“DeviceAddress” value=“MPOS-12345001”/>

    <parm name=“DownloadType” value=” FIRMWARE”/>

    <parm name=“DownloadFile”
    value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/>

    </characteristic>

    <!—Version query response -->

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>

    < parm name =“Version” value=”F1.09\_A1.2.0”/>

    </characteristic>

    </wap-provisioningdoc>

##Error Codes

<table border=1>
<tr><th>Error Name</th><th>Description</th></tr>
<tr><td>SUCCESS</td><td>Success</td></tr>
<tr><td>FAILURE</td><td>Failure</td></tr>
<tr><td>UNDEFINED</td><td>Unknown error occurred</td></tr>
<tr><td>NULL\_POINTER</td><td>Null pointer</td></tr>
<tr><td>EMPTY\_PROFILE\_XML</td><td>Profile XML is empty</td></tr>
<tr><td>INVALID\_PROFILE\_XML</td><td>The profile xml syntax is incorrect or not supported.</td></tr>
<tr><td>INVALID\_VALUE</td><td>Value is not valid.</td></tr>
<tr><td>BUSY</td><td>Processing the other request. Try later...</td></tr>
<tr><td>XML\_SYNTAX\_ERROR</td><td>XML syntax error</td></tr>
<tr><td>FEATURE\_NOT\_SUPPORTED</td><td>The feature or parameters or its value is not supported.</td></tr>
<tr><td>REMOTE\_DEVICE\_NOT\_PAIRED</td><td>Bluetooth remote device is not paired with mobile device.</td></tr>
<tr><td>FILE\_NOT\_EXISTS</td><td>The file specified in the profile xml does not exist.</td></tr>
<tr><td>INITIALIZATION\_ERROR</td><td>Error occurred during Initialization.</td></tr>
<tr><td>UNINITIALIZATION\_ERROR</td><td>Error occurred during un- Initialization.</td></tr>
<tr><td>INVALID\_FIRMWARE\_FILE\_NAME\_FORMAT</td><td>The firmware file name format is invalid</td></tr>
<tr><td>REMOTE\_DEVICE\_IN\_USE</td><td>The remote device is used by other application.</td></tr>
<tr><td>FAILED\_ENABLE\_REMOTE\_DEVICE</td><td>Failed to open connection with remote device.</td></tr>
<tr><td>FAILED\_DISABLE\_REMOTE\_DEVICE</td><td>Failed to close connection with the remote device.</td></tr>
<tr><td>FAILED\_CONNECT\_TO\_REMOTE\_DEVICE</td><td>Failed to establish Bluetooth connection with remote device.</td></tr>
<tr><td>FIRMWARE\_DOWNGRADE\_NOT\_ALLOWED</td><td>Downgrading the Firmware is not allowed. Set isUpgradeOnly=false in profile and try.</td></tr>
<tr><td>REMOTE\_DEVICE\_BATTERY\_LOW</td><td>Remote device has low battery and operation can't be performed.</td></tr>
<tr><td>MOBILE\_DEVICE\_BATTERY\_LOW</td><td>Mobile device battery level is low and operation can't be performed.</td></tr>
<tr><td>REMOTE\_DEVICE\_DISCONNECTED</td><td>The remote device is got disconnected from mobile device.</td></tr>
<tr><td>UPDATE\_FILE\_SIGNATURE\_ERROR</td><td>The update file signature is not valid.</td></tr>
<tr><td>REMOTE\_DEVICE\_TIME\_OUT\_ERROR</td><td>Remote device timed out during update process. Try again</td></tr>
<tr><td>AUTHENTICATION\_FAILED</td><td>Remote device failed to authenticate with mobile device.</td></tr>
<tr><td>COMMUNICATION\_ERROR</td><td>Error occurred during communication with the remote device.</td></tr>
<tr><td>INCOMPLETE\_UPDATE\_FILE</td><td>The update file is incomplete or incorrect.</td></tr>
<tr><td>UPDATE\_FILE\_TOO\_LARGE</td><td>The update file passed is too large for remote device to update.</td></tr>
<tr><td>DOWNLOAD\_TIMEOUT</td><td>The download file request on payment device is timed out.</td></tr>
<tr><td>BLUETOOTH\_OFF</td><td>Bluetooth is OFF on host mobile device.</td></tr>
<tr><td>FILE\_VERIFICATION\_FAILED</td><td>The download file format is not valid.</td></tr>
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

    <parm name =“Version” value=”F1.09\_A1.2.0”/>

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

    <parm name =“Version” value=”F1.09\_A1.2.0|F1.09\_A1.1.9”/>

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

    <parm name =“Version” value=”F1.09\_A1.2.0|F1.09\_A1.1.9”/>

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

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.0.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000”/>
    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.0.bin”/>

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
    value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

### Case 3: Updating all paired payment devices with same firmware

**Input XML**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

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

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.0.bin”/>

    </characteristic>

    </wap-provisioningdoc>

**Response XML (Success Case)**

    :::xml
    <?xml version="1.0" encoding="utf-8"?>

    <wap-provisioningdoc>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345000|MPOS-123457865”/>

    <parm name=“DownloadType” value=“FIRMWARE”/>

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.0.bin”/>

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

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

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

    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A1.2.1.bin”/>

    </characteristic>

    <characteristic type=“PaymentMgr” version="0.1" >

    <parm name =“DeviceAddress” value=“MPOS-12345002|MPOS-123457822”/>

    <parm name =“Version” value=”F1.09\_A1.2.0| F1.09\_A1.1.9”/>

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
    value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/>
    
    </characteristic>
    
    <! –Update failed Node - ->
    
    <characteristic-error type=“PaymentMgr” version="0.1"
    desc=“REMOTE\_DEVICE\_NOT\_PAIRED:Bluetooth remote device is not
    paired with mobile device.”>
    
    < parm name =“DeviceAddress” value=“MPOS-12345678”/>
    
    <parm name=“DownloadType” value=“FIRMWARE”/>
    
    <parm name=“DownloadFile”
    value=“/sdcard/D180\_F1.07\_A1.1.6.bin”/>
    
    </characteristic-error>
    
    <! –Invalid parameter Node ->
    
    <characteristic-error type=“PaymentMgr” version="0.1” desc=“INVALID\_VALUE: The download type is missing”>
    
    < parm name =“DeviceAddress” value=“ MPOS-12345123”>
    
    <parm -error name=“DownloadType” value=“” desc =“INVALID\_VALUE:The download type is missing”/>
    
    <parm name=“DownloadFile” value=“/sdcard/D180\_F1.07\_A10.5.0.bin”/>
    
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
    
    desc=“SUCCESS|FAILED\_CONNECT\_TO\_REMOTE\_DEVICE:Failed to establish Bluetooth connection with remote device|SUCCESS”>
    
    <parm name =“DeviceAddress” value=“MPOS-12345678|MPOS-12000002|MPOS-12300001”>
    
    <parm name=“Version” value=“F1.07\_A1.1.6||F1.07\_A1.2.0/>
    
    </characteristic-error>
    
    </wap-provisioningdoc>
