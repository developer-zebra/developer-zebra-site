# Access

## About Access

### Overview

The Access Manager setting type configures a set of applications that are allowed to run and install on the device. When this setting is enabled, the device only allows user installed applications on the Whitelist to be executed and/or installed (some applications that are part of the default operating system are still available). To disable the Whitelist, select 'Single User Without Whitelist'.  

>Note:  
>It is important to include the executing EMDK application in the Whitelist, otherwise your application loses control of the Whitelist configuration and you can not change the behavior.

### Main Functionality

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

##Parameter Notes
### Operation Mode
* Single User Without Whitelist - Disables all Whitelist features.
* Single User With Whitelist - Enables the Whitelist feature based on the details provided. You can choose to add or delete packages from the current Whitelist

###System Settings Access
>Note: This setting is available when the operation mode is `Single User With Whitelist`

* Full Access - The device's System Settings Menu are not reduced
* Reduced Access - The device's System Settings menu are reduced to a pre-selected group of options (Display, Volume, About)

### Application Verification
Application Verification adds another level of security to Whitelist applications beyond verifying a package name. If you provide a signature for the package, the Whitelist only allows that exact package signature to launch.

### Delete Packages
Options for deleting packages from the Whitelist

* Delete No Packages - Does not delete any packages
* Delete All Packages - Deletes all packages 
* Delete Specified Package - Delete specified package
	* Delete Package Name: Name of package(s) separated by a comma ex: com.mycompany.mypackage 

### Add Packages
Options for adding packages to the Whitelist

* Add No Packages - Does not add any packages
* Add Specified Package - Add specified package
	* Add Package Name: Name of package(s) separated by a comma ex: com.mycompany.mypackage 

>Note: It is important to include the executing EMDK application in the Whitelist otherwise your application loses control of the Whitelist configuration and you can not change the behavior without an enterprise reset.

### Allow Application To Submit XML
>Note: This setting is supported on devices running KitKat versions of Android such as the TC70 and are only used when the Whitelist feature is enabled.

You can specify and restrict the ability for specific applications to submit changes to the MX Framework.

* Allow Package Names - Provide a comma separated list of package names allowed to submit XML to the MX framework.
* Disallow Package Names - Provide a comma separated list of package names not allowed to submit XML to the MX framework.

> WARNING: Always include the EMDK for Android service package name `com.symbol.emdkservice` when this setting is enabled, otherwise Profile features (excluding DataCapture) can not be processed. 


## Feature Compatibility
<iframe src="compare.html#mx=4.3&csp=AccessMgr&embed=true"></iframe> 
