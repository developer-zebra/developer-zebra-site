---
title: Settings Manager
description: The SettingsMgr allows you to control access to items on the System Settings Menu.
---
## About SettingsMgr

### Overview

All Android devices provide an in-device System Settings Menu that presents a user interface that a device user can use to configure a variety of Setting Settings. Some of these System Settings may be sensitive in nature and could lead to undesired consequences if a device user changed them inappropriately.

Zebra Android devices provide a few ways to prevent a device user from making unwanted changes via the System Settings Menu. The [AppMgr Feature Type](../guide/csp/app) could be used to disable launching of the System Settings Menu application altogether. Or, the [AccessMgr Feature Type](../guide/csp/access) could be used to restrict the device user to a very limited version of the System Settings Menu with a reduced set of the capabilities (e.g. Display, Volume, About). But in some cases, it may be important to allow the device user to configure more System Settings while preventing configuration of especially sensitive ones.

The SettingsMgr Feature Type allows you to individually control whether the user can use selected especially sensitive System Settings via the System Settings Menu.

### Main Functionality

* Turn On or Off the ability for the device user to do the following from the System Settings Menu:
	* Perform an Enterprise Reset of the device
	* Change the Wi-Fi configuration of the device
	* Change whether applications from Unknown Sources (e.g. not from the Google Play Store) can be installed
	* Turn Airplane Mode On or Off
	* Access the "Apps" section, where installed and running applications can be affected

##Parameter Notes
###Ability to invoke Enterprise Reset in Settings UI
Pivotal parm: No

Parm name: InvokeEnterpriseReset

Description: 

>This parm allows you to specify whether or not the device user will be allowed invoke the "Enterprise data reset" function, usually found in the "Backup & reset" section of the System Settings Menu. Since this function could lead to data loss or could render a device less functional, it may be advisable to prevent device users from invoking it.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not a device user will be allowed to invoke the "Enterprise data reset" function from the System Settings Menu.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the device user to be allowed to invoke the "Enterprise data reset" function from the System Settings Menu.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the device user to be prevented from invoking the "Enterprise data reset" function from the System Settings Menu.</td>
  </tr>
</table>
</div>	

###Ability to Turn Wifi On/Off in Settings UI
Pivotal parm: No

Parm name: WifiSettingsUI

Description: 

>This parm allows you to specify whether or not the device user will be allowed to change any Wi-Fi configuration from the "Wi-Fi" section of the System Settings Menu and the Quick Settings.

>**Note:** While the title of this parm might make it seem that it only controls whether the device user is allowed to Turn Wi-Fi On or Off, it actually controls whether any changes to Wi-Fi configuration can be made. There is no way to control the ability to Turn Wi-Fi On and Off independently of other Wi-Fi configuration.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not a device user will be allowed to make changes to the Wi-Fi configuration from the System Settings Menu and the Quick Settings.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the device user to be allowed to make changes to the Wi-Fi configuration from the System Settings Menu and the Quick Settings.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the device user to be prevented from making changes to the Wi-Fi configuration from the System Settings Menu and the Quick Settings.</td>
  </tr>
</table>
</div>	

###Ability to Turn UnknownSources On/Off in Settings UI
Pivotal parm: No

Parm name: UnknownSources

Description: 

>This parm allows you to specify whether or not the device user will be allowed to Turn On or Off the ability to install applications from "Unknown Sources" on or off from the "Security" section of the System Settings Menu.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not a device user will be allowed to Turn "Unknown Sources" On or Off from the System Settings Menu.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the device user to be allowed to Turn "Unknown Sources" On or Off from the System Settings Menu.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the device user to be prevented from Turning "Unknown Sources" On or Off from the System Settings Menu.</td>
  </tr>
</table>
</div>	

###Ability to Turn Airplane Mode On/Off in Settings UI 

Pivotal parm: No

Parm name: AirplaneMode

Description: 

>This parm allows you to specify whether or not the device user will be allowed to Turn "Airplane Mode" On or Off from the "Wireless & Networks" section of the System Settings Menu, from the Quick Settings, and from the Power Key Menu.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not a device user will be allowed to Turn "Airplane Mode" On or Off from the System Settings Menu, Quick Settings, and Power Key Menu.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the device user to be allowed to Turn "Airplane Mode" On or Off from the System Settings Menu, Quick Settings, and Power Key Menu.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the device user to be prevented from Turning "Airplane Mode" On or Off from the System Settings Menu, Quick Settings, and Power Key Menu.</td>
  </tr>
</table>
</div>	

###Ability to Access Apps Section in Settings UI
Pivotal parm: No

Parm name: AccessAppsSection

Description: 

>This parm allows you to specify whether or not the device user will be allowed to access the "Apps" section of the System Settings Menu.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made as to whether or not a device user will be allowed to access the "Apps" section of the System Settings Menu.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause the device user to be allowed to access the "Apps" section of the System Settings Menu.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause the device user to be prevented from accessing the "Apps" section of the System Settings Menu.</td>
  </tr>
</table>
</div>	

## Queries

### Query Everything

#### Input

	:::XML
	<wap-provisioningdoc>
		<characteristic-query type="SettingsMgr" />
	</wap-provisioningdoc>


#### Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="SettingsMgr" version="4.3" >
			<parm name="InvokeEnterpriseReset" value="1"/>
			<parm name="WifiSettingsUI" value="1"/>
			<parm name="UnknownSources" value="1"/>
			<parm name="AirplaneMode" value="1"/>
			<parm name="AccessAppsSection" value="1"/>
		</characteristic>	
	</wap-provisioningdoc>

### Query if Invoking Enterprise Reset is Allowed

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="InvokeEnterpriseReset"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="InvokeEnterpriseReset" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Query if Changing Wifi Configuration is Allowed

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="WifiSettingsUI"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="WifiSettingsUI" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Query if Changing Unknown Sources is Allowed

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="UnknownSources"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="UnknownSources" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Query if Changing Airplane Mode is Allowed

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" >
            <parm-query name="AirplaneMode"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SettingsMgr" version="4.3" >
            <parm name="AirplaneMode" value="1"/>
        </characteristic>
    </wap-provisioningdoc>
	
### Query if Accessing Apps Section is Allowed

#### Input

	:::XML
	<wap-provisioningdoc>
		<characteristic type="SettingsMgr" >
			<parm-query name="AccessAppsSection"/>
		</characteristic>
	</wap-provisioningdoc>


#### Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="SettingsMgr" version="4.3" >
			<parm name="AccessAppsSection" value="1"/>
		</characteristic>
	</wap-provisioningdoc>


