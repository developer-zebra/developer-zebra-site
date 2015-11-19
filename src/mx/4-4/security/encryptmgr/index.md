---
title: Encryption Manager
description: The EncryptMgr allows you to manage the Key Storage Database, activate or deactivate Full Storage Card Encryption, and create or delete EFSes.
---

## About EncryptMgr

### Overview

To configure encryption, certain questions must be answered:

* What data will be encrypted?
* Where will the encrypted version of the data be physically stored?
* How will the unencrypted version of the data be accessed by applications?
* Which keys will be used to encrypt and decrypt the data?

Zebra Android devices support encrypting data that is stored in the device file system using two modes of operation:

* Full Storage Card Encryption Mode allows a single Storage Card, usually the one that is physically removable (e.g. a Micro SD Card) to be formatted as one single encrypted file system.  This mode is particularly useful, from a security point of view, because it protects all data stored on the Storage Card from being accessed externally if the card is physically removed from the device.  In this mode, the entire card is encrypted, and the key used to perform the encryption is not stored on the card.  Since data is encrypted and decrypted transparently, applications running on the device can access all the data on the Storage Card as if it were not encrypted.  Applications access an encrypted Storage Card using the same paths they would use if the Storage Card was not encrypted. 

	Different kinds of devices can respond differently when "Full Storage Card Encryption Mode" is turned on, such as:
	
	* If a device, such as the MC40, does not have a removable Storage Card, then the built-in Primary External Storage volume will be encrypted in the same way that a removable Storage Card would be encrypted.
	* If the device does support a removable Storage Card and the slot for it is empty, MXMS will return an error indicating that no card was found and the built-in Primary External Storage will not be encrypted.

>**Note:** If "Full Storage Card Encryption Mode" is turned on while a removable Storage Card is in the slot, the removable Storage Card will be encrypted. It will remain encrypted after being removed from the device and will behave accordingly, such as if this card is inserted into a PC, it will not mount. Also, if it is inserted into another device, it will not mount since there would not be a corresponding key available on this device. 

>**Note:** Changing a Storage Card from unencrypted to encrypted or encrypted to unencrypted requires reformatting the card and hence causes the loss of all data on the card.  If there is data that must be preserved, it would have to be copied to another location before activating or deactivating encryption and then copied back after the card is reformatted.

* Folder Encryption Mode allows any number of Encrypted File Systems (EFS) to be created.  The data for each EFS resides in a single file that must be stored on some non-encrypted file system.  This file is called the Backing Storage File (BSF).  A BSF can be located on internal storage (e.g. /data) or on the Primary Storage Card.  The BSF is named based on the name of the EFS.  An EFS is mounted at a virtual path, called its Mount Point.  The Mount Point for an EFS could specify a path on the same non-encrypted file system where the BSF is located or could specify a path on a different file system.  Since data is encrypted and decrypted transparently, applications running on the device can access all the data on an EFS as if it was not encrypted.  Applications must access an EFS using the Mount Point path that is established when the EFS is created.

>**Note:** While the BSF for an EFS can be stored on a Storage Card that is removable, it cannot be stored on a Storage Card that is encrypted using Full Storage Card Encryption Mode.  If an attempt is made to create an EFS, whose BSF is on a Storage Card that is encrypted using Full Storage Card Encryption, then an error will be returned in the Result XML.

Zebra Android devices have a Key Storage Database of named encryption keys.  Each Named Key has an associated Key Value that can be used to encrypt a Full Storage Card and/or to encrypt any number of EFSes.  When activating Full Storage Card Encryption or creating an EFS, a Named Key must be specified and must exist in the Key Storage Database.  If a Named Key is removed from the Key Storage Database, Full Storage Card Encryption and/or EFSes that are encrypted using that Named Key will become inaccessible.  Adding the Named Key (with the same Key Value) will restore accessibility.

The EncryptMgr Feature Type allows you to manage the Key Storage Database, activate or deactivate Full Storage Card Encryption, and create or delete EFSes.

### Main Functionality

* Add and Remove Named Keys
* Create and Delete Encrypted File Systems
* Format the Storage Card as Encrypted or Unencrypted

##Parameter Notes
###Install Key?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to Add a Named Key to the Key Storage Database on the device.

>**Note:** Only one Encrypted File System can be mounted at a time using a given Mount Point. If an attempt to create an EFS with a Mount Point that is already in used by a mounted EFS, the new EFS will be created, but will not be mounted.

>Adding a Named Key to the Key Storage Database on the device makes a key available for use when activating Full Storage Card Encryption or when creating EFSes.

>**Note:** If you Add a Named Key to the Key Storage Database, it can have an impact on a Storage Card or on Encrypted File Systems that were encrypted using that key and that previously became inaccessible when that key was Removed. By adding the same Key Name with the same associated Key Value, they will be re-mounted and hence will become accessible again.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause a Named Key to be added to the Key Storage Database.</td>
  </tr>
  <tr>
    <td>Install key</td>
    <td>"1"</td>
	<td>This value will cause a Named Key, along with an associated Key Value, to be added to the Key Storage Database.</td>
  </tr>
</table>
</div>

####Install Key Name
Settable if: The Install Key action is "Install key"

Pivotal parm: No

Parm name: InstallKeyName

Description: 

>This parm allows you to specify the name of the Named Key that will be added to the Key Storage Database.

>**Note:** If an attempt is made to add a Named Key that is already in the Key Storage Database, then an error will be returned in the Result XML.

Parm value input rules: 

* String with a minimum size of 1 character

####Install Key Value
Settable if: The Install Key action is "Install key"

Pivotal parm: No

Parm name: InstallKeyValue

Description: 

>This parm allows you to specify the Key Value to be associated with a Named Key that is being added to the Key Storage Database. Specifying an empty (length of zero) value (or the absence of this parm from the XML) will cause a random key value to be automatically generated and used.

>**Note:** If random key generation is used, there will be no way to extract the generated key from the device. Further, there is no method provided to guarantee that the same key is generated at a later time. This means that if a generated key is used for encryption and is then lost (such as due to Enterprise Reset), any data encrypted using that key will be unrecoverable.

Parm value input rules: 

* HEX string that is empty (length of zero) or must be exactly 64 bytes that encode a 128 bit binary value that will be used as an AES encryption Key Value.

>**Note:** The generation of Key Values can be accomplished using any desired mechanism since any 128 bit value can be used as an AES encryption Key Value.  For best results, Key Values should be generated randomly, to make them hard to predict.  Once generated, Key Values should be managed carefully since, if disclosed, a Key Value could be used to compromise the security of any data that is protected using that key.

###Revoke Key?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to Remove a Named Key from the Key Storage Database.

>**Note:** If an attempt is made to Remove a Named Key that is not currently in the Key Storage Database, then an error will be returned in the Result XML.

>Removing a Named Key from the Key Storage Database prevents that key from subsequently being used when activating Full Storage Card Encryption or when creating EFSes.

>**Note:** When a Named Key is successfully Removed from the Key Storage Database, then any Storage Card or Encrypted File Systems that were encrypted using that key and that were mounted will be un-mounted and hence will become inaccessible.


<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause any Named Key to be Removed from the Key Storage Database.</td>
  </tr>
  <tr>
    <td>Revoke key</td>
    <td>"1"</td>
	<td>This value will cause an Encryption Key to be Removed from the Key Storage Database.</td>
  </tr>
</table>
</div>	

####Revoke Key Name(s)
Settable if: The Revoke Key action is "Revoke key"

Pivotal parm: No

Parm name: RevokeKeyName

Description: 

>This parm allows you to specify the name(s) of the Named Key(s) to be Removed from the Key Storage Database.

Parm value input rules: 

* String with a minimum size of 1 character
* The names must be separated by commas

###Create EFS?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to create an Encrypted File System on the device.

>**Note:** The process of Creating an Encrypted File System takes time since it must create the Backing Storage File and mount the EFS on its designated Mount Point. As a result, applications will not be able to access an EFS via its Mount Point until it is successfully mounted.  Further, an EFS could later be un-mounted if the Key Name it is using is Removed from the Key Storage Database. Applications that use an EFS should thus include error handling logic that can deal with situations where the EFS is not mounted and hence cannot be accessed.

>An attempt to Create an Encrypted File System creation may fail for various reasons, including:

>* A BSF with the specified EFS name already exists in the specified storage location.  Only one EFS of a given name can created on each storage location.
>* The storage location specified for the BSF is not accessible (e.g. is not mounted) or is not writable.
>* The storage location specified for the BSF has insufficient free space to create the BSF of the specified size.
>* The storage location specified for the BSF is a Storage Card for which Full Storage Card Encryption has been activated.
>* The Named Key specified for the EFS is not present in the Key Storage Database.
>* The size specified for the EFS is invalid.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no Encrypted File System to be created.</td>
  </tr>
  <tr>
    <td>Create EFS</td>
    <td>"1"</td>
	<td>This value will cause an Encrypted File System to be created.</td>
  </tr>
</table>
</div>	

####EFS Name
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: EFSName

Description: 

>This parm allows you to specify the name of the Encrypted File System to be Created.

Parm value input rules: 

* String with a minimum size of 1 character

####EFS Key Name
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: EFSKeyName

Description: 

>This parm allows you to specify the Named Key to use to Create the Encrypted File System.

Parm value input rules: 

* String with a minimum size of 1 character

####EFS Location (internal/SDcard)
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: EFSLocation

Description: 

>This parm allows you to specify the storage location where the Backing Storage File should be stored for the Encrypted File System to be Created.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Internal</td>
    <td>"0"</td>
	<td>This value indicates that the BSF for the EFS will be created in the internal storage (i.e. /data) of the device.</td>
  </tr>
  <tr>
    <td>SDcard</td>
    <td>"1"</td>
	<td>This value indicates that the BSF for the EFS will be created on the Primary Storage Card of the device.</td>
  </tr>
</table>
</div>	

####Mount path for EFS
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: MountPath

Description: 

>This parm allows you to specify the Mount Path to be used for the Encrypted File System to be Created.

Parm value input rules: 

* String with a minimum size of 1 character

####Size of EFS in MB
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: VolumeSize

Description: 

>This parm allows you to specify the size of the Backing Storage File in Megabytes (MB) for the Encrypted File System to be Created.

Parm value input rules: 

* String with a minimum size of 1 character
* This value must be at least 1MB and cannot exceed 4096MB.

###Delete EFS?
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether or not to Delete an Encrypted File System.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not cause an Encrypted File System to be Deleted.</td>
  </tr>
  <tr>
    <td>Delete EFS</td>
    <td>"1"</td>
	<td>This value will cause an Encrypted File System to be Deleted.</td>
  </tr>
</table>
</div>	

####EFS Location (internal/SDcard)
Settable if: The Create EFS action is "Create EFS"

Pivotal parm: No

Parm name: DeleteEFSLocation

Description: 

>This parm allows you to specify the storage location of the Backing Storage File of the Encrypted File System to be Deleted.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Internal</td>
    <td>"0"</td>
	<td>This value indicates that the BSF for the EFS to be Deleted is in the internal storage (i.e. /data) of the device.</td>
  </tr>
  <tr>
    <td>SDcard</td>
    <td>"1"</td>
	<td>This value indicates that the BSF for the EFS to be Deleted is on the Primary Storage Card of the device.</td>
  </tr>
</table>
</div>	

###SDcard Operation
Pivotal parm: Yes

Description: 

>This parm allows you to choose whether Full Storage Card Encryption should be activated or deactivated.

>An attempt to Activate or Deactivate Full Storage Card Encryption may fail for various reasons, including:

>* The Storage Card is removable and is not currently present in the device
>* The Storage Card is not currently mounted or is inaccessible
>* The specified Named Key is not present in the Key Storage Database.

>**Note:** Whenever Full Storage Card Encryption is activated or deactivated, the Storage Card must be reformatted as encrypted or unencrypted, respectively. Reformatting causes the loss of all data on the card. If there is data that must be preserved, it would have to be copied to another location before activating or deactivating encryption and then copied back after the card is reformatted.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether Full Storage Card Encryption is activated or deactivated.</td>
  </tr>
  <tr>
    <td>Encrypt SDcard</td>
    <td>"1"</td>
	<td>This value will cause Full Storage Card Encryption to be activated, thus causing the Storage Card to be reformatted as encrypted.</td>
  </tr>
  <tr>
    <td>Format SDcard</td>
    <td>"2"</td>
	<td><p>This value will cause Full Storage Card Encryption to be deactivated, thus causing the Storage Card to be reformatted as unencrypted.</p></td>
  </tr>
</table>
</div>	

####Key to encrypt SDcard
Settable if: The SDcard Operation is "Encrypt SDcard"

Pivotal parm: No

Parm name: SdCardKeyName

Description: 

>This parm allows you to specify the Named Key that will be used to perform Full Storage Card Encryption.

>**Note:** If the Named Key is not present in the Key Storage Database then an error will be returned in the Result XML.

Parm value input rules: 

* String with a minimum size of 1 character

## Example XML
### Encrypt SD Card 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3" >
            <parm name="SdCardOperation" value="1"/>
            <parm name="SdCardKeyName" value=" EncryptKey"/>
        </characteristic>
    </wap-provisioningdoc>

## Queries

### Get Sdcard Encryption State

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr">
            <parm-query name="SdCardOperation" />
        </characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
	<wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <parm name="SdCardOperation" value="1" />
        </characteristic>
	</wap-provisioningdoc>    

### Get EFS (Encrypted File System) List

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic-query type="CreateEFS"/>
        </characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="CreateEFS"/>
                <parm name="CreateEFSAction" value="1" /> 
                <characteristic type="CreateEFSDetails">
                    <parm name="EFSName" value=" EFSName1" /> 
                    <parm name="EFSKeyName" value=" EFSKeyName1" /> 
                    <parm name="EFSLocation" value=" StorageType1" /> 
                    <parm name="MountPath" value=" MountPath1" /> 
                    <parm name="VolumeSize" value=" VolumeSize1" /> 
                </characteristic>
            </characteristic>
        </characteristic>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="CreateEFS"/>
                <parm name="CreateEFSAction" value="1" /> 
                <characteristic type="CreateEFSDetails">
                    <parm name="EFSName" value=" EFSName2" /> 
                    <parm name="EFSKeyName" value=" EFSKeyName2" /> 
                    <parm name="EFSLocation" value=" StorageType2" /> 
                    <parm name="MountPath" value=" MountPath2" /> 
                    <parm name="VolumeSize" value=" VolumeSize2" /> 
                </characteristic>
            </characteristic>
        </characteristic>
	</wap-provisioningdoc>

### Get Key List

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic-query type="InstallKey"/>
        </characteristic>
	</wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="InstallKey"/>
                <parm name="InstallKeyAction" value="1" /> 
                <characteristic type=" InstallKeyDetails ">
                    <parm name="InstallKeyName" value=" KeyName1" /> 
                </characteristic>
            </characteristic>
        </characteristic>
        <characteristic type="EncryptMgr" version="4.3">
            <characteristic type="InstallKey"/>
                <parm name="InstallKeyAction" value="1" /> 
                <characteristic type=" InstallKeyDetails ">
                    <parm name="InstallKeyName" value=" KeyName2" /> 
                </characteristic>
            </characteristic>
        </characteristic>
	</wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=EncryptMgr&os=JB&embed=true"></iframe> 