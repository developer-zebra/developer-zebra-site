---
title: PaymentConfig
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


