---
title: How to Check a Device's MX Version

---

## Overview

The version of MX on a device is a factor in determining if certain settings will be supported. There are a few ways that you can determine the version that is installed:

* Manually using the Settings UI
* From application code at runtime using the EMDK
* Submitting XML using the MX CSP

## Using the Settings UI 

The version of MX on a Zebra Android KitKat device you can visually look in the Settings UI to determine the MX version installed:

> Note: This is only available on KitKat 4.4+ or later versions of Zebra Android devices.

1. Open the `Settings` application in the list of applications
    
    ![img](settings.jpg)

2. Select `About Phone`

    ![img](aboutphone.jpg)
    
3. Select `SW Components`

    ![img](software.jpg)
    
4. Inspect the `OSX` item

    ![img](osx.jpg)
    
5. In the below example the version that is installed is `4.4.2`

    ![img](osx-highlighted.jpg)
    
## Using EMDK For Android

If your application needs to determine the version of MX installed on a device at run time, then you can use a the `VersionManager` EMDK for Android API.

    :::java
    // Get an instance of VersionManager
    versionManager = (VersionManager) EMDKManager.getInstance(EMDKManager.FEATURE_TYPE.VERSION);
    
    // Use the getVersion method passing in the version_Type.mx enum
    mxVersion = versionManager.getVersion(VERSION_TYPE.MX)
    
## Submitting XML
System Administrators and MDMs can submit XML using the `MX` CSP 

    :::xml
	<wap-provisioningdoc>
		<characteristic type="MX">
			<parm-query name="Version"/>
		</characteristic>
	</wap-provisioningdoc>
    
 The corresponding result returned would contain the MX version information returned in the `MXMFVersion` parm
 
 
 	:::XML
	<wap-provisioningdoc>
		<characteristic type="MX" version="4.4">
			<parm name="MXMFVersion" value="4.4.3.6"/>
		</characteristic>
	</wap-provisioningdoc>