---
title:  Encrypt Manager Profile Feature Reference
---

## Overview

The Encrypt Manager allows the developer to set encryption policies on a device through MX XML. For example a developer can create an EFS for storing application data.  

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](/emdk-for-android/3-1/api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](/emdk-for-android/3-1/guide/profiles/usingwizard) for more information.

## Main Functionality

* Install/Revoke Encryption Key
* Create/Delete EFS (Encrypted File System)
* Encrypt SD Card
* Format SD Card

##Install Key
This profile feature allows your application to install a new encryption key or revoke a named key that resides in the key store. When installing a key, the value is optional. A provided key value should be a HEX string with a length of 64 bytes. If a value is not provided, a random key will be generated for a given key name. This feature will fail to apply if a key of the same name already resides in the devices key store. After successfully installing a key, all EFS's using that key will be mounted. If multiple unmounted EFS use the same mount point, only the first will be mounted.


### Install Key?
* Install Key Name - Provide a name for the key you wish to install.
* Install Key Value - Provide the key you wish to install.

### Revoke Key?
* Revoke Key Name(s) - Provide the key name or names (separated by commas) you wish to revoke.


> Note: After successfully revoking a key, all EFS using that key will be unmounted.

##Create EFS
This profile feature allows your application to create an Encrypted File System (EFS) on a device.  Provide a name for the new EFS, a mount point where the EFS should be mounted, a storage type (SDcard or Internal), the name of the key that will be used for encryption, and a size for the EFS stated in MB. The provided EFS size must be at least 1MB and cannot exceed 4096MB.
The process of creating the EFS takes time. Access to the EFS will be denied during the creation process.

* **Create EFS**
	* EFS Name - Provide a name for the EFS you wish to create
	* EFS encryption Key Name - Provide the name of the encryption key you would like to use to encyrpt the new EFS
	* EFS Location (internal/SDcard) - Select a location where the new EFS should be created
	* Mount point for EFS - Provide a mount point for you wish to use for the new EFS
	* Size of EFS in MB - Provide a size in MB(1-4095) for the new EFS


>Note: EFS creation may fail for any of the following conditions**
	* Duplicate EFS name; (EFS's with the same name can coexist on different supporting file systems, but cannot coexist on the same FS.)
	* EFS storage type is not available (e.g. no SD card inserted and mounted)
	* Not enough space on supporting file system
	* Key does not exist
	* Creating EFS on encrypted SDCard
	* Invalid parm values, e.g. EFS size too big or too small or not an integer number
	* Unmatched mount point and EFS storage type

* **Delete EFS**
	* Delete EFS Name - Provide the name of the EFS you wish to delete.
	* EFS Location - Select a location of where the EFS you wish to delete resides.


## SD Card Operation
###Encrypt SD Card
* **Encrypt SDcard**
	* key to encrypt SDcard - Provide the name of the key to use to encrypt the sdcard.

>Note: This process will format and encrypt the SDcard, therefor all `existing data on the SDCard will be lost`.

>The process of encrypting the SDCard takes time. Access to the encrypted SDCard will be denied during the creation process. When encrypting an SDCard that was previously encrypted, the SDCard will be re-formated and re-encrypted, as a result, all existing data will be lost.

**Creation of an Encrypted SDCard may fail for any of the following conditions**

* SDCard is not inserted;
* SDCard is not mounted (e.g. UMS is in use)
* Key name is invalid.

###Format SD Card
This profile feature will allow your application format an SDCard. 

>Note: When formating an encrypted SDCard, the result would be a formated **un-encrypted** SDCard.

## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=EncryptMgr&os=All&embed=true"></iframe> 



