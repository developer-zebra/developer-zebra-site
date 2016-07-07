---
title: SecureNfcManager
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


This class provides access to obtain the object to communicate with the
 Secure Access Module (SAM).
 
 

##Public Methods

### getAvailableSam

**public SamType getAvailableSam()**

Gets the available SAM on the device.

**Returns:**

com.symbol.emdk.securenfc.SecureNfcManager.SamType - SamType

**Throws:**

com.symbol.emdk.securenfc.SecureNfcException

The exception will be thrown if the emdk is not opened.

### getSamInstance

**public SamBase getSamInstance(SecureNfcManager.SamType samType)**

This method returns the object to authenticate between SAM with the Host.

**Parameters:**

`samType`

**Returns:**

com.symbol.emdk.securenfc.SamBase - SamBase

### getTagTechType

**public TagTechType getTagTechType(Tag tag)**

This method returns the tag type discovered by the device.

**Parameters:**

`tag` - - Contactless tag already detected by device. We get this
            through the EXTRA_TAG information from the intent.

**Returns:**

com.symbol.emdk.securenfc.SecureNfcManager.TagTechType - TagTechType

**Throws:**

com.symbol.emdk.securenfc.SecureNfcException

The exception will be thrown if the emdk is not opened.

### getTagTechInstance

**public TagTechBase getTagTechInstance(SecureNfcManager.TagTechType tagType)**

Returns the tag technology object based for the Tag type passed. For
 unsupported tag type, null will be returned. The application must type
 cast to the corresponding tag technology object.

**Parameters:**

`tagType`

**Returns:**

com.symbol.emdk.securenfc.TagTechBase - TagTechBase

### getPassThruApduInstance

**public PassThruApduProcessor getPassThruApduInstance()**

Returns the PassThruApduProcessor object to securely communicate with
 contactless smart cards at the Application Protocol Data Unit (APDU)
 level using the SAM. This method is designed for the NFC applications to
 perform secure communication with the contactless secure cards (tags) at
 the low level protocol. The audience of this class is for secure NFC
 application developers with good understanding and expertise of the
 secure technology they use, including the cards (tags) and SAM
 documentation, features and protocol.
 
 Note: This is recommended only for the secure NFC application developers
 who is interested getting the full control on the APDU. Other can use the
 SecureNfcManager.getTagTechInstance which provides simple API to
 securely communicate with the Smart card/tags for the supported tag
 technologies.

**Returns:**

com.symbol.emdk.securenfc.PassThruApduProcessor - PassThruApduProcessor object.





