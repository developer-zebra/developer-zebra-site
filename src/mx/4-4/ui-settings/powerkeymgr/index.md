---
title: PowerKey Manager
description: The PowerKeyMgrallows you to control whether the user will be allowed to use certain menu options that are supported on the Power Key Menu.
---
## About PowerKeyMgr

### Overview

Zebra Android devices have a menu that is displayed on the device screen when you perform a long press of the Power Key. This menu is called the Power Key Menu and offers the device user the ability to invoke various power-related functions, such as reset (reboot), power off, Airplane Mode, Touch Panel, Safe Mode, etc. The exact set of options that will appear in the Power Key Menu varies based on the capabilities of the device.

The PowerKeyMgr Feature Type allows you to control whether the user will be allowed to use certain menu options that are supported on the Power Key Menu to turn the corresponding device function on or off. This allows you to prevent the device user from using certain supported menu options that may perform operations that are a bit more sensitive and could interfere with the smooth operation of the device.

>**Note:** The PowerKeyMgr Feature Type can be used to prevent access to menu options that are supported on the device and can restore access to menu options to which access was previously prevented, but cannot restore access to menu options that are not supported on that devices.

Zebra Android devices support a Screen Lock Timeout, which can be controlled by the DevAdmin Feature Type, that controls how long the device screen must remain off before a screen lock will occur when the display screen is turned back on. When the Power Key is used to turn the device off, as opposed letting the device screen timeout, a screen lock can be required when the display screen is turned back on, even though the timeout did not expire.  The PowerKeyMgr Feature Type allows you to enable or disable this functionality as well as control whether the device user can change this functionality via the in-device System Settings Menu.


### Main Functionality

* Allow or prevent use of the following Power Key Menu Options
	* Airplane Mode 
	* Touch Panel
	* Safe Mode
* Allow or prevent use of the Automatic Screen Lock Option in the System Settings Menu
* Turn On or Off whether a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key

##Parameter Notes
###Airplane Mode Power Key Menu Option
Pivotal parm: No

Parm name: AirPlaneMode

Description: 

>Turning on Airplane Mode disables all radios, including the cellular radio, the Wi-Fi radio, and the Bluetooth radio. While Airplane Mode is turned off, radios other than the cellular radio can be turned back on individually. Turning off Airplane Mode turns on the cellular radio, but does not change the state of other radios.

>This parm allows you to select whether or not Airplane Mode should be allowed to be turned on or off from the Airplane Mode menu option in the Power Key Menu.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not Airplane Mode can be turned on or off from the Airplane Mode menu option in the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Show Menu Option</td>
    <td>"1"</td>
	<td>This value will allow Airplane Mode to be turned on or off from the Airplane Mode Option in the Power Key Menu, if the Power Key Menu for the device supports this menu option.</td>
  </tr>
  <tr>
    <td>Do not show Menu Option</td>
    <td>"2"</td>
	<td><p>This value will prevent Airplane Mode from being turned on or off from the Airplane Mode menu option in the Power Key Menu.</p><p><b>Note:</b> Depending on the device, this value may cause the Airplane Mode Option in the Power Key menu to be hidden. However, this value will always prevent the user from using this option in the Power Key Menu.</p></td>
  </tr>
</table>
</div>	

###Touch Panel Power Key Menu Option
Pivotal parm: No

Parm name: TouchPanel

Description: 

>Some Zebra Android devices provide the ability to turn the Touch Panel on and off from the Power Key Menu. Turning off the Touch Panel could be useful in situations where the device screen may come in contact with foreign objects, to prevent inadvertent activation of functions via the Touch Panel.

>This parm allows you to select whether or not the Touch Panel should be allowed to be turned on or off from the Touch Panel menu option in the Power Key Menu.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not Touch Panel can be turned on or off from the Touch Panel menu option in the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Show Menu Option</td>
    <td>"1"</td>
	<td>This value will allow Touch Panel to be turned on or off from the Touch Panel Option in the Power Key Menu, if the Power Key Menu for the device supports this menu option.</td>
  </tr>
  <tr>
    <td>Do not show Menu Option</td>
    <td>"2"</td>
	<td><p>This value will prevent the Touch Panel from being turned on or off from the Touch Panel menu option in the Power Key Menu.</p><p><b>Note:</b> Depending on the device, this value may cause the Touch Panel Option in the Power Key menu to be hidden. However, this value will always prevent the user from using this option in the Power Key Menu.</p></td>
  </tr>
</table>
</div>	

###Safe Mode Power Key Menu Option
Pivotal parm: No

Parm name: SafeMode

Description: 

>Some Zebra Android devices provide the ability to boot into a Safe Mode. Safe Mode is typically used to perform troubleshooting operations that might be impeded by certain applications or services that would normally start when booting the device normally. Since booting into Safe Mode could render the operation of the device insecure and likely would impact the ability of the device to perform its production functions, it may be desirable to prevent device users from booting into Safe Mode under normal circumstances.

>This parm allows you to select whether or not Safe Mode should be allowed to be turned on or off from the Safe Mode menu option in the Power Key Menu.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether or not Safe Mode can be turned on or off from the Safe Mode menu option in the Power Key Menu.</td>
  </tr>
  <tr>
    <td>Show Menu Option</td>
    <td>"1"</td>
	<td>This value will allow Safe Mode to be turned on or off from the Safe Mode Option in the Power Key Menu, if the Power Key Menu for the device supports this menu option.</td>
  </tr>
  <tr>
    <td>Do not show Menu Option</td>
    <td>"2"</td>
	<td><p>This value will prevent Safe Mode from being turned on or off from the Safe Mode menu option in the Power Key Menu.</p><p><b>Note:</b> Depending on the device, this value may cause the Safe Mode Option in the Power Key menu to be hidden. However, this value will always prevent the user from using this option in the Power Key Menu.</p></td>
  </tr>
</table>
</div>	

###Automatic Screen Lock on Power Key Option
Pivotal parm: No

Parm name: AutoScreenLockOption

Description: 

>This parm allows you to select whether the device user will be allowed to use the option in the System Settings Menu to Turn On or Off whether a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key.

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
	<td>This value (or the absence of this parm from the XML) will not cause any change to whether or not the device user will be allowed to use the option in the System Settings Menu to Turn On or Off whether a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key.</td>
  </tr>
  <tr>
    <td>Show option</td>
    <td>"1"</td>
	<td>This value will cause the device user to be allowed to use the option in the System Settings Menu to Turn On or Off whether a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key.</td>
  </tr>
  <tr>
    <td>Do not show option</td>
    <td>"2"</td>
	<td>This value will cause the device user to be prevented from using the option in the System Settings Menu to Turn On or Off whether a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key.</td>
  </tr>
</table>
</div>	

###Automatic Screen Lock on Power Key State
Pivotal parm: No

Parm name: AutoScreenLockState

Description: 

>This parm allows you to select whether a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key.

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
	<td>This value (or the absence of this parm from the XML) will not cause any change to whether or not a screen lock will always be required when the device screen is turned back on if the device screen was turned off using the Power Key.</td>
  </tr>
  <tr>
    <td>Turn on</td>
    <td>"1"</td>
	<td>This value will cause a screen lock to always be required when the device screen is turned back on if the device screen was turned off using the Power Key.</td>
  </tr>
  <tr>
    <td>Turn Off</td>
    <td>"2"</td>
	<td>This value will cause a screen lock to not be required when the device screen is turned back on unless the device screen was off for at least the Screen Lock Timeout, even if the device screen was turned off using the Power Key.</td>
  </tr>
</table>
</div>	

## Queries

### Get Air Plane Mode 

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AirPlaneMode"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AirPlaneMode" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Touch Panel

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="TouchPanel"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="TouchPanel" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Safe Mode

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="SafeMode"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="SafeMode" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Auto Screen Lock Option

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AutoScreenLockOption"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AutoScreenLockOption" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Auto Screen Lock State

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" >
            <parm-query name="AutoScreenLockState"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="PowerKeyMgr" version="4.3" >
            <parm name="AutoScreenLockState" value="1"/>
        </characteristic>
    </wap-provisioningdoc>


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=PowerKeyMgr&os=JB&embed=true"></iframe> 