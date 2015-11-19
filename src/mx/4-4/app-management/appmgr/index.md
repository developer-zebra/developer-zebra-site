---
title: App Manager
description: The AppMgr allows you manage the set of user applications that are installed on the device.
publish: true
---

## About AppMgr

### Overview

The AppMgr Feature Type allows you manage the set of user applications that are installed on the device. On consumer Android devices, application management requires a device user to interact with UI presented on the device. In scenarios where a device is being managed by an MDM, it is often important for the MDM to tightly control which user applications are installed, without the need to involve a device user and without the consent or approval of a device user. The primary purpose of the AppMgr Feature Type is to manage user applications programmatically and silently. This enables an MDM to take full control of the set of user applications that are installed on the device.

The AppMgr Feature Type allows you to Install, Uninstall, Upgrade, and Turn On and Off the launching of applications. It also allows you to designate an application as the Default Launcher, which is the application that is invoked when the device user presses the HOME Key, and perform other tasks related to the management of applications.

When considering the capabilities of the AppMgr Feature Type, it is important to understand that applications can be divided into two classes: System applications and User applications. System applications are those applications that are built-into the device and hence are always installed. User applications are those applications that are not built-into the device and hence must be installed onto a device before they can be used. Some functions of the AppMgr Feature Type apply only to System applications, some apply only to User applications, and some apply to both. Each function will identify the classes of applications to which it applies.

### Main Functionality

* Install, Uninstall, and Upgrade User applications (with no device user involvement)
* Set an application to be the Default Launcher
* Turn On and Off the Launching of an application (Blacklisting)
* Clear the Recent Application List
* Enable and Disable Access to Application Info

##Parameter Notes
### Action
Pivotal parm: Yes

Description: 

>Specify the application action to perform.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"Do nothing"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the applications on the device.</td>
  </tr>
  <tr>
    <td>Install</td>
    <td>"Install"</td>
	<td><p>This value will cause a User application contained within an APK file in the specified path on the device to be Installed on the device. If for any reason the requested application cannot be installed, then an error will be returned in the Result XML document.</p><p><b>Note:</b> If an attempt is made to install an application with the same Package Name as an application that is already installed on the device, then an error will be returned in the Result XML document. To replace an application that is already installed on the device with a different version with the same Package Name, use the value "Upgrade" instead.</p>
  </tr>
  <tr>
    <td>Uninstall</td>
    <td>"Uninstall"</td>
	<td><p>This value will cause a User application with the specified Package Name to be Uninstalled from the device. If for any reason the requested application cannot be uninstalled, then an error will be returned in the Result XML document.</p>
	
	<p><b>Note:</b> If no User application with the specified Package Name is installed on the device then an error will be returned in the Result XML document.</p>
	
	<p><b>Note:</b> When an application is Uninstalled, data that is stored in sandbox areas owned by that application will be automatically removed. If the application is later Installed again, it will need to recreate such data.</p>
	
	</td>	
  </tr>
  <tr>
    <td>Upgrade</td>
    <td>"Upgrade"</td>
	<td>
	<p>This value will cause a User application contained within an APK file in the specified path on the device to Upgrade another version of the application with the same Package Name that is already on the device. If for any reason the requested application cannot be upgraded, then an error will be returned in the Result XML document.</p>
	
	<p><b>Note:</b> If an attempt is made to upgrade an application with a Package Name that does not match any Package Names that are on the device already, then an error will be returned in the Result XML document. To install an application that is not already installed on the device, use the value "Install" instead.</p>
	
	<p><b>Note:</b> When an application is upgraded, the data for that application is maintained. This allows the new version of the application to access (and possibly convert) data created by the old version.</p>

	<p><b>Note:</b> In devices running the Jelly Bean version of Android, an Upgrade can replace any version of an application with any other version of the same application. However, in devices running the KitKat or higher version of Android, an Upgrade can only replace an application with a higher (numerically greater) version of the same application. This change was made to reduce issues where an older version of an application maybe unable to understand data produced by a newer version.</p>
	</td>
  </tr>
  <tr>
    <td>Set as Default Launcher</td>
    <td>"SetDefaultLauncher"</td>
	<td>This value will cause the application with the specified Package Name to be made the new Default Launcher. The specified application must already be installed on the device and generally should be designed to be a Launcher, per relevant Android documentation. If no application with the specified Package Name is installed on the device then an error will be returned in the Result XML document.</td>
  </tr>
  <tr>
    <td>Enable Application</td>
    <td>"EnableApplication"</td>
	<td>This value will cause the System application with the specified Package Name to be Enabled, and therefore will allow it to be launched. If no System application with the specified Package Name is built-into the device then an error will be returned in the Result XML document.</td>
  </tr>
  <tr>
    <td>Disable Application</td>
    <td>"DisableApplication"</td>
	<td>This value will cause the System application with the specified Package Name to be Disabled, and therefore will prevent it from being launched. If no System application with the specified Package Name is built-into the device then an error will be returned in the Result XML document.</td>
  </tr>
  <tr>
    <td>Clear Recent Apps List</td>
    <td>"ClearRecentApps"</td>
	<td>This value will cause the Android Recent Applications List, which allows a user to see and launch apps that have recently been used, to be cleared.</td>
  </tr>
</table>
</div>	

####APK Path and Name
Settable if: The Action is "Install" or "Upgrade"

Pivotal parm: No

Parm name: APK

Description: 

>Provide the path and name of the Android application APK file within the device file system that will be installed or upgraded.

>**Note:** An APK file can only be used to Install a User application because any application being installed from an APK file is not built-into the device and is therefore, by definition, a User Application. But an APK could be used to Upgrade either a System application or a User application. In order for any Upgrade to work, the APK file must be signed with the same developer certificate as the application it is trying to replace. If the APK file is not signed with the same developer certificate then an error will be returned in the Result XML document. This means that a System application can only be replaced using an APK file produced by the same developer that produced the built-in System application. If a System application is successfully Upgraded using an APK, the new version of the application is granted the same permissions as the version that was replaced. This allows the new version of the application to successfully perform the same operations as the original System application even though it is actually a User application. Since the new version is not built-into the device the device will revert to the old built-in version of the application whenever data is cleared.

Parm value input rules: 

* String containing the full path and name of an APK that resides on the device. For example, '/storage/sdcard1/Herald.apk'.
* The minimum length is 1 character and the maximum length is 255 characters

####Package Name
Settable if: The Action is "Uninstall", "Set as Default Launcher", "Enable Application", or "Disable Application"

**Note:** To perform the above listed Actions on an application, the Package Name of that application must be known and specified. The Package Name can be acquired from the application developer, by looking up the Package Name on a device, or using developer tools to extract the Package Name from the APK file.

Pivotal parm: No

Parm name: Package

Description: 

>Provide the Package Name of the application for the application action.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum length is 1 character and the maximum length is 255 characters
* The package names must be separated by commas

### Protected List Action
Pivotal parm: Yes

Description: 

>The Protected List is a feature that allows certain applications to be exempted from certain constraints that are imposed on applications when Multi-User Mode is enabled. In particular, applications whose Package Names are on the Protected List will:

>* Be allowed to launch when no device user is logged in
>* Not be terminated when a device user logs out
>* Have only one copy of its data for all users, even if Multi-User Data Separation is enabled

>**Note:** Multi-User Mode is supported on all Zebra Android devices that support Zebra MX functionality, but the AccessMgr Feature Type currently does not support enabling Multi-User Mode. Multi-User Mode can be enabled on devices that support it, but only using unsupported tools or mechanisms that do not scale to large deployments. For this reason, the ability to use the AppMgr Feature Type to manage the Protected List may provide little or no immediate benefit. In the future, when the AccessMgr Feature Type is enhanced to support enabling Multi-User Mode, the ability to use the AppMgr Feature Type to manage the Protected List will likely be more meaningful.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"Do nothing"</td>
	<td>This value (or the absence of this parm from the XML) will not cause any changes to the Protected List.</td>
  </tr>
  <tr>
    <td>Add Application to Protected List</td>
    <td>"AddAppToProtectedList"</td>
	<td>This value will cause the Package Name of an application to be Added to the Protected List.</td>
  </tr>
  <tr>
    <td>Remove Application from Protected List</td>
    <td>"RemoveAppFromProtectedList"</td>
	<td>This value will cause the Package Name of an application to be Removed from the Protected List.</td>
  </tr>
  <tr>
    <td>Remove All Application from Protected List</td>
    <td>"ClearProtectedList"</td>
	<td>This value will cause all Package Names to be Removed from the Protected List.</td>
  </tr>
</table>
</div>	

####Package Name
Settable if: The Protected List Action is "Add Application to Protected List" or "Remove Application from Protected List"

Pivotal parm: No

Parm name: ProtectedListPackage

Description: 

>Provide the Package Name of the application that should be Added to or Removed from the Protected List.

Parm value input rules: 

* String containing the valid name of the package. For example, 'com.mycompany.mypackage'.
* The minimum length is 1 character and the maximum length is 255 characters
* The package names must be separated by commas

### Access to App Info Action

Pivotal parm: No

Parm name: AccessAppInfoAction

Description: 

>Since the AppMgr Feature Type allows control of which applications are installed, it may be of concern that a device user can use the App Info section of the in-device System Settings Menu to impact an installed application.  A device user might terminate an application (Force Stop), remove application data (Clear Data), etc.  A device user might also Uninstall the application completely.  If an MDM is being used to tightly control the set of installed applications on a device, such activities by a device user might be undesirable.

>This may be compounded by the fact that the App Info section of the System Settings Menu may be reached from a variety of places in the device UI, not just from the main System Settings Menu.  For example, App Info can be reached for an application from the Android Recent Applications List or from a notification related to the application in the Android Notification Area.

>To prevent device users from using App Info to alter the configured set of installed applications, it may be desirable to prevent the device user from accessing App Info altogether.  Of course, you could use the AppMgr Feature Type to disable launching of the System Settings Menu application, which would prevent access to App Info.  But that would also prevent access to all other aspects of the System Settings Menu.  A more targeted approach would be to block only App Info.

>This allows you to enable or disable all access to App Info for all applications without blocking access to other parts of the System Settings Menu.  By disabling App Info, you can prevent the device user from getting to App Info and using it to interfere with the configured set of installed applications.

>**Note:** This parm is supported only on devices that are running the Kit Kat version of Android.  This is because this parm depends on modifications made to the System Settings Menu application, and those modifications are found only on Kit Kat devices.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do nothing</td>
    <td>"Do nothing"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made.</td>
  </tr>
  <tr>
    <td>Enable Access to App Info for all applications</td>
    <td>"EnableAccessAllInfo"</td>
	<td>This value will cause access to App Info to be enabled if access to the System Settings Menu application is enabled.</td>
  </tr>
  <tr>
    <td>Disable Access to App Info for all applications</td>
    <td>"DisableAccessAllInfo"</td>
	<td>This value will cause all access to App Info to be disabled.</td>
  </tr>
</table>
</div>	


## Example XML
###Install An Application
	:::xml
	<!-- Silently install Clock.apk from the /enterprise/usr/persist folder -->
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="Install" />
			<parm name="APK" value="/enterprise/usr/persist/Clock.apk" />
		</characteristic>
	</wap-provisioningdoc>


###Upgrade An Application
	:::xml
	<!-- Silently upgrade Clock.apk from the /enterprise/usr/persist folder -->
	<wap-provisioningdoc>
		<characteristic type="AppMgr" version="4.2" >
			<parm name="Action" value="Upgrade"/>
			<parm name="APK" value="/enterprise/usr/persist/Clock.apk"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable An Application
	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="DisableApplication" />
			<parm name="Package" value="com.mypackagename" />
		</characteristic>
	</wap-provisioningdoc>

###Uninstall An Application
	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="Uninstall" />
			<parm name="Package" value="com.packagename" />
		</characteristic>
	</wap-provisioningdoc>

###Start An Application After Installing it
	:::XML
	<wap-provisioningdoc>
		<characteristic version="4.2" type="AppMgr">
			<parm name="Action" value="Install" />
			<parm name="APK" value="/sdcard/myapp.apk" />
		</characteristic>
		<characteristic version="4.3" type="Intent">
			<parm name="Action" value="StartActivity" />
			<parm name="ActionName" value="android.intent.action.MAIN" />
			<parm name="Package" value="com.mypackage" />
			<parm name="Class" value="com.mypackage.myactivity" />
		</characteristic>
	</wap-provisioningdoc>

	
## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=AppMgr&os=JB&embed=true"></iframe> 