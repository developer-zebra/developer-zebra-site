---
title: Touch Manager
description: The TouchMgr allows you configure the Touch Mode on your device (ex. Finger or Stylus)
---

## About TouchMgr

### Overview

Most Android devices have touch panels which allow device users to interact with the device via a rich User Interface (UI). Some Zebra Android devices have the ability to adjust the sensitivity of the touch panel to suit different usage scenarios. For example, in a situation where a device user sometime might use their ungloved finger to interact with the touch panel and other times might use a stylus, the touch panel might need to be configured differently from how it would need to be configured to handle a situation where the user always uses their finger but might or might not be wearing gloves.

The TouchMgr Feature Type allows you configure the Touch Mode on your device to control the sensitivity of the touch panel and thus to prepare the device for different usage scenarios.

### Main Functionality

* Configure the touch panel sensitivity to support
	* Scenarios where a finger or a stylus can be used
	* Scenarios where a gloved or ungloved finger will be used

##Parameter Notes
### TouchAction
Pivotal parm: No

Parm name: TouchAction

Description: 

>This parm allows you to specify which Touch Mode should be used and hence which touch panel sensitivity should be configured to support usage scenarios that require that Touch Mode.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>Do not change</td>
    <td>"Do not change"</td>
	<td>This value (or the absence of this parm from the XML) will cause no changes to be made to the Touch Mode and hence will not alter the sensitivity of the touch panel.</td>
  </tr>
  <tr>
    <td>Stylus and Finger</td>
    <td>"Stylus and Finger"</td>
	<td>This value will cause the Touch Mode to be set to support usage scenarios where the device user may interact with the touch panel using an ungloved finger and/or a stylus and hence will set the sensitivity of the touch panel appropriately to support such scenarios.</td>
  </tr>
  <tr>
    <td>Glove and Finger</td>
    <td>"Glove and Finger"</td>
	<td>This value will cause the Touch Mode to be set to support usage scenarios where the device user may interact with the touch panel using an ungloved or gloved finger and hence will set the sensitivity of the touch panel appropriately to support such scenarios.</td>
  </tr>
</table>
</div>	

 