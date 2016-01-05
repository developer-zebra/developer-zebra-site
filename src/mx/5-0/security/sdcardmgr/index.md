---
title: SD Card Manager
description: The SdCardMgr controls whether External Storage can be used on the device.
---
## About SdCardMgr

### Overview
The SdCardMgr controls whether External Storage can be used on the device.

Zebra Android devices may have one or more storage areas that are referred to collectively as External Storage and individually as Storage Cards. Some devices support a special Storage Card implemented via a physically removable medium (e.g. a Micro SD Card), whereas others do not. Most Zebra Android devices also implement at least one Storage Card simulated using flash memory that is built into the device and cannot be removed.

When a device supports physically removable media, it may be important to control whether the Storage Card implemented by that physically removable media is allowed to be used. Removable media could provide a path through which unwanted software could be loaded onto the device or that could let sensitive data be extracted from the device. Disallowing the use of physically removable media can significantly increase device security by ensuring that such media cannot be used as a path to perform such activities.

All Zebra Android devices support the path "/sdcard," which is logically mapped to one of the supported Storage Cards. Most Zebra Android devices also support one or more paths under "/storage" such as "/storage/sdcard0" and "/storage/sdcard1" to access all supported Storage Cards. The path "/sdcard" will generally be a logical link to one of the paths under "/storage" corresponding to one of the supported Storage Cards.

**Note:** Various Zebra Android devices support different numbers and types of Storage Cards and the exact path via which an application can access a particular Storage Card will vary by device. Variation is greatest among devices running the Jelly Bean version of Android and between those devices and devices running the Kit Kat version of Android. Considerably fewer variations exist among devices running the Kit Kat version of Android, although some variations still exist due to differences in core device capabilities (e.g. presence or lack of a physical card slot or total amount of available built-in flash memory).

The SdCardMgr allows you to control whether one specific External Storage on the device can be used. The Storage Card affected by the SdCardMgr varies by device. On devices that support physically removable media, such as the TC55, the SdCardMgr will always control access to the Storage Card that is implemented by physically removable media, whether or not such media is physically present. On devices that do not support physically removable media, such as the MC40, the SdCardMgr will control access to the Primary Storage Card.

**Note:** Since the primary use case for the SdCardMgr is to control the security risks associated with physically removable media, the SdCardMgr offers significantly less value on devices that do not support physically removable media than it offers on devices that do support physically removable media. In fact, it may be hard to come up with a significant use case for using the SdCardMgr on devices that do not support physically removable media, since it may not significantly enhance device security. Nonetheless, it is provided for completeness.

There may be many ways in which a Storage Card can be accessed. A Storage Card might be accessed via built-in privileged System applications, via installed unprivileged applications, or from a PC using a MTP or ADB over USB. A Storage Card also might be encrypted or have one or more encrypted file systems stored on it (see the EncryptMgr). But if access to a Storage Card is disabled using the SdCardMgr, all access to that Storage Card, even by built-in privileged System applications, will be blocked, with no exceptions, until access is re-enabled again using the SdCardMgr.

### Main Functionality

* Enable or Disable the usage of the single Storage Card supported on a given device

##Parameter Notes
###Enable or Disable use of SdCard
Pivotal parm: No

Parm name: SdCardUsage

Description: 

>This parm will allow you to control the Storage Card that is selected to support this feature on a given device. On devices that support physically removable media, that Storage Card will always be the one implemented by physically removable media. When disabled, the affected Storage Card will be completely inaccessible, to the device user and to all applications running on the device. When enabled, access to the Storage Card will not be blocked.

>**Note:** Just because access to a Storage Card is not blocked, the Storage Card may or may not be accessible. For example, if the Storage Card is implemented by physically removable media and there is no media in the slot, then the Storage Card would not be accessible even though access to the Storage Card was enabled. Or, if the Storage Card was encrypted, and the Named Key was removed from the Key Storage Database (see the EncryptMgr), the Storage Card would not be accessible even though it was present and not blocked.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether access to a Storage Card will be blocked.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause access to the Storage Card that is selected to support this feature on a given device to be blocked, thus preventing its use.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause access to the Storage Card that is selected to support this feature on a given device to be unblocked, thus allowing it to be accessed, if no other circumstances prevent such access.</td>
  </tr>
</table>
</div>	

## Example XML
###Enable SD Card
	:::xml
	<wap-provisioningdoc>
		<characteristic type="SdCardMgr" version="4.3" >
			<parm name="SdCardUsage" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

## Queries

### Get is SD Card Usage Allowed

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SdCardMgr" >
            <parm-query name="SdCardUsage"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="SdCardMgr" version="4.3" >
            <parm name="SdCardUsage" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

