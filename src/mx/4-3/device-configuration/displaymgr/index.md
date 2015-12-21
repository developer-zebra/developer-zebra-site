---
title: Display Manager
description: The DisplayMgr allows you to control the display screen on the device.
---

## About DisplayMgr

### Overview

The DisplayMgr Feature Type allows you to control the display screen on the device. At present, the only option is to configure the timeout value after which the display turns off to conserve battery power. Future versions of the DisplayMgr Feature Type may provide the ability to control other aspects of the display screen.

### Main Functionality

* Set the Display Screen Timeout Interval
 
##Parameter Notes
###Set the Screen Off Timeout Interval
Pivotal parm: No

Parm name: TimeoutInterval

Description: 

>This parm will allow you to set the timeout interval for the device's screen. When there are no device user interactions (e.g. touch panel or key activations) within the specified time interval, then the display screen of the device will automatically turn off. Setting this interval to a lower amount of time will help to conserve power on the device, at the expense of potentially reduced convenience for the device user.

>**Note:** The underlying Android display system only supports the selection of a fixed set of values for the display screen timeout, determined by the values supported by the System Settings Menu. This parm can only set the actual display screen timeout to one of those supported values (listed in the table below). Specifying a value that is less than the smallest value shown in the table or greater than the largest value shown in the table will cause no change to be made to the current display screen timeout interval and will cause an error to be returned in the Result XML document. Specifying a value between two supported values shown in the table will cause the closest value to the requested value to be selected, with no error returned in the Result XML document.

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
	<td>This value (or the absence of this parm from the XML) will not cause any changes to the current display screen timeout interval.</td>
  </tr>
  <tr>
    <td>15 seconds</td>
    <td>"15"</td>
	<td>This value will cause the display screen to timeout after 15 seconds with no device user interactions.</td>
  </tr>
  <tr>
    <td>30 seconds</td>
    <td>"30"</td>
	<td>This value will cause the display screen to timeout after 30 seconds with no device user interactions.</td>
  </tr>
  <tr>
    <td>1 minute</td>
    <td>"60"</td>
	<td>This value will cause the display screen to timeout after 1 minute with no device user interactions.</td>
  </tr>
  <tr>
    <td>2 minutes</td>
    <td>"120"</td>
	<td>This value will cause the display screen to timeout after 2 minutes with no device user interactions.</td>
  </tr>
  <tr>
    <td>5 minutes</td>
    <td>"300"</td>
	<td>This value will cause the display screen to timeout after 5 minutes with no device user interactions.</td>
  </tr>
  <tr>
    <td>10 minutes</td>
    <td>"600"</td>
	<td>This value will cause the display screen to timeout after 10 minutes with no device user interactions.</td>
  </tr>
  <tr>
    <td>30 minutes</td>
    <td>"1800"</td>
	<td>This value will cause the display screen to timeout after half an hour with no device user interactions.</td>
  </tr>
</table>
</div>

##Example XML
### Set Backlight Timeout

    :::XML
    <wap-provisioningdoc>
        <characteristic type="DisplayMgr" version="4.3" >
            <parm name="TimeoutInterval" value="60"/>
        </characteristic>
    </wap-provisioningdoc>


