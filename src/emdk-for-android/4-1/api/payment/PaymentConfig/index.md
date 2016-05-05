---
title: PaymentConfig
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


The PaymentConfig class provides access to configure the payment device configurations.
 The PaymentDeviceConfig.getConfig and PaymentDeviceConfig.setConfig must be called to get and set these values.

##Public Fields

###sleepModeTimeout

The field provides option to configure the payment device sleep mode timeout. 
 default is 45000 milliseconds, set 0 to disable sleep mode on PD40 device, 
 minimum value is 10000 millisec. The unit is milli seconds.Set 0 to disable 
 sleep mode on PD40 device. The PD40 Device will not wake-up automatically when
 it goes to sleep mode.

**Type:**

int

###idleMessage

This provides option to modify the payment devices idle message.

**Type:**

java.lang.String

###dataEncryptionType

This provides type of Encryption Algorithms applied to encrypt the data.
 Setting this parameter will not encrypt the non ISO/ABA card data.

**Type:**

com.symbol.emdk.payment.PaymentDevice.DataEncryptionType

###dataEncryptionKeySlot

This provides the slot  in the data bit where key is stored.
 Key is sent as a part of data.

**Type:**

int

###maskFirstDigits

This provides option to configure first few number of clear digits for the maskPAN. The range is 0 to 6.

**Type:**

int

###getAllEncryptedData

This is Boolean value. Default is false. This flag is applicable only 
 when the Data Encryption is enabled.  If this flag is set to false, 
 the API gets the default field only. If the flag is set to true, the API
 gets all the available fields.

**Type:**

boolean

###languageCode

The languageCode field can used to configure the language on payment device to display strings. The font must be downloaded to payment device before using the language code. 
The supported language code values are:
English - 0
French - 1

**Type:**

int

###enableSwipeOnNoAID

The swiping (MSR) of an EMV card is not allowed by default. The
 enableSwipeOnNoAID field provides an option to enable swiping the EMV 
 card (using as MSR) when the EMV chip card does not work for the 
 following reason: 
 - AID (app id) present on the chip is not supported by the
 payment device. 
 - EMV parameters and AID list are not updated on the
 Payment device. 
 If this feature is disabled and the EMV card is not
 accepted, the readCardData() will return
 {@PaymentResults.CHIP_READ_NO_APP_ERROR} 
 Set enableSwipeOnNoAID=true to enable swipe option on no AID. 
 Set enableSwipeOnNoAID=false to disable swipe option on no AID

**Type:**

boolean

###enableBTDiscoverableMode

The payment device such as PD40-100 is not discoverable by default. The
 PD40 device can be made discoverable by programmatically using this
 feature. The device made discoverable programmatically will remain
 discoverable since the configuration is modified. Alternatively, the
 payment device can be manually made discoverable by manually pressing
 Enter followed by 9. The device made discoverable manually will remain
 discoverable for 120 Seconds.

**Type:**

boolean

