---
title:  Access Manager Profile Feature Reference
---
# Access Manager Profile Feature Reference
## Overview

The Access Manager feature allows you to configure a set of applications that will be allowed to run and install on the device. When this feature is enabled, the device will only allow user installed applications on the Whitelist to be executed and/or installed (some applications that are part of the default operating system will still be available). To disable the Whitelist, you would select 'Single User Without Whitelist'.  

>Note:  
>It is important to include the executing EMDK application in the Whitelist otherwise your application will lose control of the Whitelist configuration and you will not be able to change the behavior.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK [ProfileManager](../api/ProfileManager) API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. See [EMDK Profiles Overview](../guide/profiles/usingwizard) for more information.

## Main Functionality

* Set Device Operation Mode to Single User without Whitelist
* Set Device Operation Mode to Single User with Whitelist
* Set System Settings Access to Full Access 
* Set System Settings Access to Reduced Access 
* Set Application Verification Mode to do not Verify App Signature
* Set Application Verification Mode to Verify User App Signature
* Set Application Verification Mode to Verify All App Signature
* Delete Specified Packages 
* Delete All Packages 
* Delete Specified Signatures
* Add Specified Package
* Add Package to to List of Applications Allowed to Submit XML
* Remove Package from List of Applications Allowed to Submit XML
* Allow all Applications that can be Executed to Submit XML

## Operation Mode
>*WARNING* Enabling the `Whitelist` requires adding the EMDK package name `com.symbol.emdk.emdkservice` to the white list. Otherwise none of the EMDK APIs will work.

* Single User Without Whitelist - Setting this feature will disable all Whitelist features.
* Single User With Whitelist - Setting this feature will enable the Whitelist feature based on the details provided. You can choose to add or delete packages from the current Whitelist

##System Settings Access
>Note: This setting is available when the operation mode is `Single User With Whitelist`

1. Full Access - The device's System Settings Menu will not be reduced
2. Reduced Access - The device's System Settings menu will be reduced to a pre-selected group of options (Display, Volume, About)

##Application Verification
Application Verification adds another level of security to whitelisting applications beyond just 
verifying a package name. Provide a signature for the package you are adding. The whitelist will then only allow
that exact package signature to launch.

## Delete Packages
Options for deleting packages from the Whitelist

* Delete No Packages - Does not delete any packages
* Delete All Packages - Deletes all packages 
* Delete Specified Package - Delete specified package
	* Delete Package Name: Name of package(s) separated by a comma ex: com.mycompany.mypackage 

## Add Packages
Options for adding packages to the Whitelist

> Note: Enabling the white list feature via access manager profile on TC70 KitKat device requires adding the EMDK package name `com.symbol.emdk.emdkservice` to the allowed packages white list to use EMDK APIs

* Add No Packages - Does not add any packages
* Add Specified Package - Add specified package
	* Add Package Name: Name of package(s) separated by a comma ex: com.mycompany.mypackage 

>Note: It is important to include the executing EMDK application in the Whitelist otherwise your application will lose control of the Whitelist configuration and you will not be able to change the behavior without an enterprise reset..

## Allow Application To Submit XML
You can specify and restrict specific applications the ability to submit changes to the MX Framework. This feature is supported on devices that are running KitKat versions of Android like the TC70 and will only be used when the Whitelist feature is enabled.

* **Allow Package Names** - Provide a comma separated list of package names that are allowed to submit XML to the MX framework.

* **Disallow Package Names** - Provide a comma separated list of package names that are not allowed to submit XML to the MX framework.

> NOTE: Enabling the white list feature via access manager profile on TC70 KitKat device requires adding the EMDK package name `com.symbol.emdk.emdkservice` to the allowed packages white list to use EMDK APIs and in the allow submit XML white list to use EMDK ProfileManager APIs to set profile.



## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AccessMgr&embed=true"></iframe> 
