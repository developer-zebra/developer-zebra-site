---
title: Camera Manager
description: The CameraMgr allows you to control what cameras, if any, will be allowed to be used.
---

## About CameraMgr

### Overview

Many Zebra Android devices are equipped with mechanisms that may be used to take pictures, scan barcodes, and/or capture documents. Some Zebra Android devices may also be equipped with special-purpose mechanisms, such as lasers or imagers, which are optimized to scan barcodes. In some sensitive environments, it may be necessary to restrict the use of devices from taking pictures or capturing documents to avoid potential security risks.

The CameraMgr Feature Type allows you to control which of the mechanisms supported by a device can be used by the device user to take pictures or capture documents, and hence are considered to be cameras. For example you could prevent the device user from using all cameras on the device or selectively control which cameras the device user can use.

**Note:** If a device is equipped with a mechanism that can be used to take pictures or capture documents, then that mechanism will be considered to be a camera, for the purposes of the CameraMgr Feature Type. For example, if a device is equipped with a CCD-based imager that is primarily designed to scan barcodes but also supports the ability to take pictures or capture documents, then that imager will be considered to be a camera and hence will need to support enable and disable. But if no method was available to use that imager to take pictures or capture documents, then it would not be considered a cameras, since it would not introduce the same camera-oriented security risks.

### Main Functionality

* Enable or disable the use of all Cameras
* Enable or disable the use of the Front Facing Camera
* Enable or disable the use of the Rear Facing Camera

##Parameter Notes
###All Cameras
Pivotal parm: Yes

Description: 

>This parm will enable or disable use of all of the cameras that are on the device, which may affect cameras that are not explicitly listed. In other words, this will globally allow or disallow all camera support.

>**Note:** Enabling or disabling all cameras will affect all mechanism that are considered cameras that are supported on a device. This will be the case even if that device has more cameras than can be individually controlled on that device using the CameraMgr Feature Type. For example, if a device had a front facing camera, a rear facing, and a side-facing imager that can capture documents, all three would be considered cameras would be enabled or disabled together. This would be the cases even the side facing imager could not be enabled or disabled individually. Enabling or disabling all cameras may override prior enabling or disabling of individual cameras using the CameraMgr Feature Type or may be overridden for individual cameras by subsequent use of the CameraMgr Feature Type.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Control Individual Cameras</td>
    <td>"0"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether any of the device's cameras can be used.</td>
  </tr>
  <tr>
    <td>Enable ALL Cameras</td>
    <td>"1"</td>
	<td>This value will cause use of all the device's cameras to be enabled, thus allowing the device user to use any of those cameras to take pictures, if an application exists on the device to do so.</td>
  </tr>
  <tr>
    <td>Disable ALL Cameras</td>
    <td>"2"</td>
	<td>This value will cause use of all the device's cameras to be disabled, thus preventing the device user from using any of those cameras to take pictures, even if an application exists on the device to do so.</td>
  </tr>
</table>
</div>	

###Front Camera
Settable if: The "All Cameras" parm is set to "Control Individual Cameras"

Pivotal parm: No

Parm name: UseFrontCamera

Description: 

>This parm will enable or disable the use of the device's front facing camera, which means that the user will be allowed or disallowed from using this camera.

>If the device does not have a front facing camera, then an error will be returned in the Result XML document.

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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the device's front facing camera can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of the device's front facing camera to be enabled, thus allowing the device user to use that camera to take pictures, if an application exists on the device to do so.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause use of the device's front facing camera to be disabled, thus preventing the device user from using that camera to take pictures, even if an application exists on the device to do so.</td>
  </tr>
</table>
</div>	

###Rear Camera
Settable if: The "All Cameras" parm is set to "Control Individual Cameras"

Pivotal parm: No

Parm name: UseRearCamera

Description: 

>This parm will enable or disable the use of the device's rear facing camera, which means that the user will be allowed or disallowed from using this camera.

>If the device does not have a rear facing camera, then an error will be returned in the Result XML document.


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
	<td>This value (or the absence of this parm from the XML) will cause no changes to whether the device's rear facing camera can be used.</td>
  </tr>
  <tr>
    <td>Enable</td>
    <td>"1"</td>
	<td>This value will cause use of the device's rear facing camera to be enabled, thus allowing the device user to use that camera to take pictures, if an application exists on the device to do so.</td>
  </tr>
  <tr>
    <td>Disable</td>
    <td>"2"</td>
	<td>This value will cause use of the device's rear facing camera to be disabled, thus preventing the device user from using that camera to take pictures, even if an application exists on the device to do so.</td>
  </tr>
</table>
</div>	

##Example XML

###Enable the Front Facing Camera

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseFrontCamera" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable the Rear Facing Camera

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseRearCamera" value="2"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable the Front Facing Camera and Enable the Rear Facing Camera

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseFrontCamera" value="2"/>
			<parm name="UseRearCamera" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Enable All Cameras

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseAllCameras" value="1"/>
		</characteristic>
	</wap-provisioningdoc>

###Disable All Cameras

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CameraMgr" version="4.3" >
			<parm name="UseAllCameras" value="2"/>
		</characteristic>
	</wap-provisioningdoc>


## Queries

### Get Use All Cameras

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" >
            <parm-query name="UseAllCameras"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" version="4.3" >
            <parm name="UseAllCameras" value="1"/>
        </characteristic>
    </wap-provisioningdoc>
	
### Get Use Front Camera

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" >
            <parm-query name="UseFrontCamera"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" version="4.3" >
            <parm name="UseFrontCamera" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

### Get Use Rear Camera

#### Input 

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" >
            <parm-query name="UseRearCamera"/>
        </characteristic>
    </wap-provisioningdoc>

#### Output

    :::XML
    <wap-provisioningdoc>
        <characteristic type="CameraMgr" version="4.3" >
            <parm name="UseRearCamera" value="1"/>
        </characteristic>
    </wap-provisioningdoc>

## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=CameraMgr&os=JB&embed=true"></iframe> 