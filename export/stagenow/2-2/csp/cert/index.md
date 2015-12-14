---
title:  Cert
---

## About Cert

### Overview

The Cert Manager setting type allows your application to install or uninstall certificates and initialize the Android keystore. You can use digital certificates to identify your device for a variety of purposes, including VPN or Wi-Fi network access as well as authentication to servers by apps such as Email or Chrome. 

### Main Functionality

* Install Certificate
* Uninstall Certificate
* Initialize Android Keystore
* Adjust System Clock

##Parameter Notes
### Initialize Android Keystore
When you initialize the Android keystore you create a new keystore replacing any existing one.  Before installing or uninstalling certificates, a keystore must exist. You can choose to perform this action as a separate EMDK profile or include the Certificate Manager setting multiple times in one profile.

#### Keystore Password
Keystore Password is a password required to initialize the Android Keystore.

### Install Certificate

#### Certificate Alias

* Provide the name (alias) to uniquely identify the certificate. The old certificate with same alias name is replaced by the new certificate.
* Dynamic - The name of the certificate is dynamically generated. This is currently not supported.

##### Alias Handling Issues
Due to current limitations of the Certificate Manager setting type (in an EAP-TLS scenario), it is not possible to "override" the Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore.

The only way to determine the actual Alias that is assigned to a Client Certificate and Private Key when they are installed into the Android KeyStore is to examine the Android KeyStore after installation to determine which Alias was used:

1. The same Alias is ALWAYS assigned to a given Client Certificate and Private Key, no matter when, or on which device, it is installed

2. Whenever a different Client Certificate is used, a different Alias is generally assigned to the Client Certificate and Private Key

##### Manually Determining the Certificate Alias
You can use a device to capture the alias used for the certificate being installed. It is recommended that you clear the keystore before performing these steps (Settings->Security->Clear Credentials).

1. Use Certificate Manager to install the certificate onto a device.
2. Navigate to Settings->Wi-Fi->'+'' to add a network
3. Scroll to security, tap and select 802.1x EAP
4. Scroll to EAP method, tap and select TLS
5. Scroll to client certificate, tap and note a drop-down box with "(unspecified)" and the alias of the installed certificate. The alias listed can become the value to use as the certificate when using WiFiConfig to configure a profile that uses EAP-TLS.

####Certificate Type  
Type of certificate to install:

* CA Certificate (*.PEM)
* Client Certificate (*.PEM)
* Client Certificate and Private Key (*.PFX)
* Client Certificate and Private Key (*.P12)
* Client Certificate and Private Key (*.PKCS12)

>Note: Be sure to initialize the keystore the first time when installing certificate types with private keys (.PFX,.P12,.PKCS12)

#### Certificate method
Reference certificate file - method used to install a certificate. A file must exists on the device that contains the certificate data.

#### Certificate File
Specify the path and name of the certificate file that resides on the device.

#### Private Key Password
Password required to decrypt the private key (*.PFX, *.P12, *.PKCS12).

### Uninstall Certificate

#### Certificate Alias
Provide the name (alias) to uniquely identify the certificate. The keystore or trusted CA store is searched for a record with the same alias name. If the record is found, it removes the keystore or trusted CA store. 


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=CertMgr&os=All&embed=true"></iframe> 

