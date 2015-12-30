---
title: Device Admin 
description: The DevAdmin provides direct access to certain device administration tasks such as the Screen-Lock timeout interval.
---
## About DevAdmin

### Overview
The DevAdmin provides direct access to certain device administration tasks such as the Screen-Lock timeout interval.

Android defines some APIs as Device Administration APIs, as implemented within the DevicePolicyManager class. These APIs enable certain applications to perform various tasks that can affect the security of the device. As such, they are restricted to specially approved applications, called Device Administrators. If an application is written to conform to the DeviceAdminReceiver model and is approved to become a Device Administrator, then it can use some or all of the Device Administration APIs.

In standard Android devices, an application that is written to conform to the DeviceAdminReceiver model must explicitly request the device user to approve it as a Device Administrator. This is based on the assumption that the device user is knowledgeable enough to make this determination. For a device that is owned and/or used by a single user, that assumption might be reasonable. For an Enterprise-owned device that might be shared among multiple device users, that assumption may be a poor one.

The DevAdmin provides direct access to certain device administration tasks directly and allows programmatic approval as Device Administrator of applications written to conform to the DeviceAdminReceiver model without involving or notifying the device user. This allows an Enterprise to grant their trusted applications with access to the Device Administration APIs, thus enabling those applications to perform device administration tasks.

### Main Functionality

* Set Screen-Lock Timeout Interval
* Turn Installation of applications from Unknown sources On or Off
* Turn Device Administrator approval On or Off for an application

##Parameter Notes
###Screen-Lock Timeout Interval
Pivotal parm: No

Parm name: ScreenLockTimeoutInterval

Description: 

>Android devices support two levels of inactivity timeout that can be controlled independently. The Display Screen Timeout, which can be controlled via the DisplayMgr, controls the amount of device user inactivity that must elapse before the device display screen is automatically turned off. The Screen Lock Timeout, which can be controlled by the DevAdmin, controls how long the device screen must remain off before a screen lock will occur.

>When the device screen is turned back on, manually by some sort of device user activity, or programmatically due to some device event, the result will depend on how long the device screen was off and the value set for the Screen Lock Timeout. If the display screen was off for less than the Screen Lock Timeout, then the screen will not be locked (and hence will not need to be unlocked by the device user). If the display screen was off for at least the Screen Lock Timeout, then the screen will be locked (and hence will need to be unlocked by the device user).

>This behavior can be modified in two ways, based on other aspects of the device that may be configured. First, if no lock behavior is set for the device (e.g. no pin or password), then "unlocking", if required, may only require a swipe, not any actual data entry by the device user. Second, if the device is configured to lock automatically when the display screen is turned off by the power key, then a screen lock will always occur when the display screen is turned back on after being turned off via the power key, regardless of how much time the display screen was off.

>This parm will allow you to set the Screen Lock Timeout.

>**Note:** The underlying Android display system only supports the selection of a fixed set of values for the Screen Lock Timeout. This parm can only set the actual Screen Lock Timeout to one of those supported values (listed in the table below). Specifying a value that is less than the smallest value shown in the table or greater than the largest value shown in the table will cause no change to be made to the current Screen Lock Timeout and will cause an error to be returned in the Result XML document. Specifying a value between two supported values shown in the table will cause the closest value to the requested value to be selected, with no error returned in the Result XML document.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no change to the Screen Lock Timeout.</td>
  </tr>
  <tr>
    <td>Immediately after Display Timeout</td>
    <td>"1"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, regardless of how long the display screen was off.</td>
  </tr>
  <tr>
    <td>5 seconds after Display Timeout</td>
    <td>"5"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 5 seconds.</td>
  </tr>
  <tr>
    <td>15 seconds after Display Timeout</td>
    <td>"15"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 15 seconds.</td>
  </tr>
  <tr>
    <td>30 seconds after Display Timeout</td>
    <td>"30"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 30 seconds.</td>
  </tr>
  <tr>
    <td>1 minute after Display Timeout</td>
    <td>"60"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 1 minute.</td>
  </tr>
  <tr>
    <td>2 minutes after Display Timeout</td>
    <td>"120"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 2 minutes.</td>
  </tr>
  <tr>
    <td>5 minutes after Display Timeout</td>
    <td>"300"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 5 minutes.</td>
  </tr>
  <tr>
    <td>10 minutes after Display Timeout</td>
    <td>"600"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 10 minutes.</td>
  </tr>
  <tr>
    <td>30 minutes after Display Timeout</td>
    <td>"1800"</td>
	<td>This value will cause the screen to be locked when the display screen is turned back on, if the display screen was off for at least 30 minutes.</td>
  </tr>
</table>
</div>	

###Install App from Unknown Sources
Pivotal parm: No

Parm name: UnknownSourcesStatus

Description: 

>Android devices have a feature called the Unknown Sources Option that controls whether the device user is allowed to install applications (APK files) that originate from "unknown" sources, by which is meant "anywhere other than the Google Play Store". The primary purpose for this feature is to block "side loading" of APKs that may be risky since they did not go through the vetting process associated with posting applications on the Google Play Store.

>For devices that have GMS (Google Mobile Services), the Android CDD (Compatibility Definition Document) requires that the Unknown Sources Option be turned off by default. That makes sense for such devices, since they have support for Google Play (which is part of GMS) and hence have a viable way for device users to load applications. Zebra Android devices that have GMS will all default the Unknown Sources Option off by default to comply with this requirement. The Unknown Sources Option can then be turned on to allow device users the option of side-loading applications as an alternative to using Google Play.

>For devices that do not have GMS, turning off the Unknown Sources Option would prevent device users from loading applications at all, since they do not have support for Google Play. Zebra devices that do not have GMS will typically default the Unknown Sources Option on by default so device users will have at least some method to install applications. The Unknown Sources Option can then be turned off to disallow device users from loading applications at all.

>**Note:** The Unknown Sources Option only affects whether device users are allowed to install applications. It does not have any effect on whether applications can be programmatically installed, such as using the AppMgr. The presumption is that any application that can be trusted to install other applications without involving or notifying the device user can be trusted to install only suitable applications and therefore whether those applications come from the Google Play Store or not is immaterial.

>This parm allows you to turn the Unknown Sources Option on or off, both on devices that have GMS and those that do not have GMS.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will not make any change to the Unknown Sources Option.</td>
  </tr>
  <tr>
    <td>Turn On</td>
    <td>"1"</td>
	<td>This value will turn the Unknown Sources Option on, which will allow the device user to install applications onto the device other than via Google Play.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will turn the Unknown Sources Option off, which will prevent the device user from installing applications onto the device other than via Google Play.</td>
  </tr>
</table>
</div>	

###Device Administration Action
Pivotal parm: Yes

Description: 

>This parm allows you to approve or remove approval to be a Device Administrator from an application that is written to conform to the DeviceAdminReceiver model.

>By default, an application is not initially approved as a Device Administrator when it is first installed and launched. Only an application that is written to conform to the DeviceAdminReceiver model and that is currently installed can be approved to be a Device Administrator.

>When an application that is written to conform to the DeviceAdminReceiver model is approved to be a Device Administrator, it will be notified so it can begin using the Device Administration APIs. When Device Administrator approval is removed from such an application, it will be notified that it must stop using the Device Administration APIs.

>**Note:** The ability to control approve or remove approval for an application using the DevAdmin does not prevent the device user from approving or removing approval for an application from the System Settings Menu. The effect on an application of approval or removal of approval is the same whether initiated by the device user or by the DevAdmin.

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
	<td>This value (or the absence of this parm from the XML) will not make any change to whether any application is approved to be a Device Administrator.</td>
  </tr>
  <tr>
    <td>Turn On as Device Administrator</td>
    <td>"1"</td>
	<td>This value will approve a specific application as a Device Administrator.</td>
  </tr>
  <tr>
    <td>Turn Off as Device Administrator</td>
    <td>"2"</td>
	<td>This value will remove Device Administrator approval from a specific application.</td>
  </tr>
</table>
</div>	

####Device Administrator Package Name
Settable if: Device Administration Action is "Turn On as Device Administrator" or "Turn Off as Device Administrator"

Pivotal parm: No

Parm name: DevAdminPkg

Description: 

>This parm allows you to specify the Package Name on application that will be approved to be a Device Administrator or from which Device Administrator approval will be removed.

>**Note:** You must know and specify the Package Name of that application.  You could acquire the Package Name from the application developer, lookup the Package Name on a device, or use developer tools to extract the Package Name from the APK file.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Device Administrator Class Name
Settable if: Device Administration Action is "Turn On as Device Administrator" or "Turn Off as Device Administrator"

Pivotal parm: No

Parm name: DevAdminClass

Description: 

>This parm allows you to specify the Class Name that will be added to or removed from the Device Admin list, which will allow or disallow the application from using the Android Device Admin API's.

>**Note:** You must know and specify the name of the class within the application that implements the DeviceAdminReceiver.  You would likely need to acquire this from the application developer. This is not the same as the Activity class name required to launch the application.


Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

##Example XML

###Set the Screen to Lock to 1 Minute After the Display Times Out

	:::XML
	<wap-provisioningdoc>
		<characteristic type="DevAdmin" version="4.3" >
			<parm name="ScreenLockTimeoutInterval" value="60"/>
		</characteristic>
	</wap-provisioningdoc>
	
###Allow Application Installs from Unknown Sources

	:::XML
	<wap-provisioningdoc>
		<characteristic type="DevAdmin" version="4.3" >
			<parm name="UnknownSourcesStatus" value="1"/>
		</characteristic>
	</wap-provisioningdoc>



## Queries

### Get Apps that are Active Device Admins

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3" >
	        <characteristic-query type="AppAsDevAdmin"/>
        </characteristic>
    </wap-provisioningdoc>


#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3" >
            <characteristic type="AppAsDevAdmin">
                <parm name="DevAdminAction" value="1"/>
                <characteristic type="DevAdminDetails">
                    <parm name="DevAdminPkg" value="PackageName1"/>
                    <parm name="DevAdminClass" value="ClassName1"/>
                </characteristic>
            </characteristic>
        </characteristic>
        <characteristic type="DevAdmin" version="4.3" >
            <characteristic type="AppAsDevAdmin">
                <parm name="DevAdminAction" value="1"/>
                <characteristic type="DevAdminDetails">
                    <parm name="DevAdminPkg" value="PackageName2"/>
                    <parm name="DevAdminClass" value="ClassName2"/>
                </characteristic>
            </characteristic>
        </characteristic>
    </wap-provisioningdoc>


### Get Screen Lock Timeout Interval

#### Input

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin">
            <parm-query name="ScreenLockTimeoutInterval"/>
        </characteristic>
    </wap-provisioningdoc>


#### Output 

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3">
            <parm name="ScreenLockTimeoutInterval" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Install Apps from Unknown Sources Status

#### Input

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin">
            <parm-query name="UnknownSourcesStatus"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

	:::XML
    <wap-provisioningdoc>
        <characteristic type="DevAdmin" version="4.3">
            <parm name="UnknownSourcesStatus" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

