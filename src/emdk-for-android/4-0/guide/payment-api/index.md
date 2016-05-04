---
title: EMDK Mobile Payment Programmers Guide
layout: guide.html
product: EMDK For Android
productversion: '4.0'
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











