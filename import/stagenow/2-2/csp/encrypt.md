# Encrypt

## About Encrypt

### Overview

The Encrypt Manager setting type sets encryption policies on a device through MX XML. For example a developer can create an EFS for storing application data.  

### Main Functionality

* Install/Revoke Encryption Key
* Create/Delete EFS (Encrypted File System) 
* Encrypt SD Card
* Format SD Card

##Parameter Notes

### Install/Revoke Encryption Key
This feature installs a new encryption key or revokes a named key that resides in the key store. When installing a key, the value is optional. The key value is a HEX string of length 64 bytes. If you do not provide a value, a random key is generated for a given key name. This feature does not function if a key of the same name already resides in the device key store. After installing a key, each EFS using the key is mounted. If multiple EFS use the same mount point, only the first is mounted.

* Install Key Name - Provide a name for the key to install.
* Install Key Value - Provide the key to install.
* Revoke Key Name(s) - Provide the key name or names (separated by commas) to revoke. After revoking a key, all EFS using that key are unmounted.

### Create/Delete EFS
This feature creates an Encrypted File System (EFS) on a device. Provide a name for the new EFS, a mount point for the EFS, a storage type (SDcard or Internal), the name of the key to use for encryption, and a size for the EFS in MB. The size must be between 1MB and 4096MB. Access to the EFS is denied during the creation process, which takes time.

* Create EFS 
  * EFS Name - Provide a name for the EFS to create.
  * EFS encryption Key Name - Provide the name of the encryption key to use to encyrpt the new EFS.
  * EFS Location (internal/SDcard) - Select a location in which to create the new EFS.
  * Mount point for EFS - Provide a mount point for the new EFS.
  * Size of EFS in MB - Provide a size in MB (1-4095) for the new EFS.

Note: EFS creation can fail in any of the following conditions:

* Duplicate EFS name - EFS's with the same name can reside on different supporting file systems, but cannot reside on the same FS
* EFS storage type is not available, e.g., no SD card is inserted and mounted
* Not enough space on supporting file system 
* Key does not exist 
* Creating EFS on encrypted SDCard 
* Invalid parm values, e.g., EFS size too big or too small or not an integer number
* Unmatched mount point and EFS storage type

* Delete EFS 
  * Delete EFS Name - Provide the name of the EFS to delete.
  * EFS Location - Select the location in which the EFS to delete resides.

### Encrypt SD Card

* Encrypt SDcard - Key to encrypt SDcard. Provide the name of the key to use to encrypt the sdcard.

Note: This process formats and encrypts the SDcard, and deletes all existing data on the SDCard.

The process of encrypting the SDCard takes time. Access to the encrypted SDCard is denied during the creation process. When encrypting an SDCard that was previously encrypted, the SDCard is re-formated and re-encrypted, and as a result deletes all existing data.

Encrypted SDCard creation can fail in any of the following conditions:

  * SDCard is not inserted
  * SDCard is not mounted, e.g., UMS is in use
  * Key name is invalid

### Format SD Card

This feature formats an SDCard. This results in a formatted, un-encrypted SDCard.


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=EncryptMgr&os=All&embed=true"></iframe> 
