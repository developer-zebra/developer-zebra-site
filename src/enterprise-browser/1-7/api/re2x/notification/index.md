---
title: Notification
productversion: '1.7'
product: Enterprise Browser
layout: guide.html
subhead: RhoElements 2.x API
---

## Overview
The Notification Module is used to control the notification objects such as the LEDs, beeper and pager on the device. While some devices are equipped more than one of a given object type, most have multiple LEDs, a single beeper and a single pager. 

To control notification objects, it is first necessary to query the device to discover which objects are available. This is done using the Enumerate method and `EnumNotificationsEvent`, which returns a unique identifier for each available notification to be used to set the notification state. Notifications can be set as "on," "off" or "cycling." The behavior of "on" or "off" notification objects is self explanatory; when set to cycling, LEDs will flash the specified number of times, whereas a beeper or pager will activate only once for the specified duration.

##Syntax

<table class="re-table"><tr><th class="tableHeading">notification (Module) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="Notification" content="[method / parameter]"&gt;</p></td></tr><tr><td class="clsSyntaxCells clsEvenRow"><p>&lt;META HTTP-Equiv="Notification" content="EnumNotificationsEvent:url('[jsFunction | url]')"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Notification JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'notification'</b> will exist on the current page and can be used to interact directly with the notification.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Invoke notification methods via JavaScript use the following syntax: notification.method();
<P />e.g. <b>notification</b>.enumerate();
</td></tr><tr><td class="clsSyntaxCells clsOddRow">
To Set notification parameters via JavaScript use the following syntax: notification.parameter = 'value'; remembering to enclose your value in quotes where appropriate.  
<P />e.g. <b>notification</b>.setLEDOnDuration = 'value';
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">						
To Set notification return events via JavaScript use the following syntax: notification.event = Javascript Function;
<P />e.g. <b>notification</b>.enumNotificationsEvent = 'doFunction(%json)';
<P />
<!-- For more details on the event syntax and parameters see the <a href="/rhoelements/RetrievalEvents">Retrieval Events</a> page.-->

</td></tr><tr><td class="clsSyntaxCells clsOddRow">							
To set multiple EMML parameters / events on a single line use the following syntax: notification.setEMML("[Your EMML Tags]");
<P />
e.g. <b>notification</b>.setEMML("setLEDOnDuration:<i>value</i>;enumNotificationsEvent:url('JavaScript:doFunction(%json)');enumerate");							
</td></tr></table>


##Methods


Items listed in this section indicate methods or, in some cases, indicate parameters which will be retrieved.

<table class="re-table"><col width="10%" /><col width="68%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>enumerate</b></td><td class="clsSyntaxCells clsOddRow">Immediately triggers an EnumNotificationsEvent containing the notification objects available on the current device</td><td class="clsSyntaxCells clsOddRow">N/A</td></tr></table>


##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>setLEDOnDuration:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Milliseconds</td><td class="clsSyntaxCells clsOddRow">Subsequent calls to cycle LED notifications will cause them to remain on for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off'</td><td class="clsSyntaxCells clsOddRow">1000</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>setLEDOffDuration:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Milliseconds</td><td class="clsSyntaxCells clsEvenRow">Subsequent calls to cycle LED notifications will cause them to remain off for the specified number of milliseconds per cycle.  This parameter has no effect if the LED State is set to 'On' or 'Off'</td><td class="clsSyntaxCells clsEvenRow">1000</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>setLEDNumberOfCycles:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Positive Number</td><td class="clsSyntaxCells clsOddRow">Subsequent calls to cycle LED notifications will cause them to switch between on and off the specified number of times.</td><td class="clsSyntaxCells clsOddRow">1</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>setBeeperFrequency:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Frequency in Hertz</td><td class="clsSyntaxCells clsEvenRow">When the beeper next sounds it will do so at the specified number of Hertz, provided this is supported by the hardware.  This parameter has an effect for both StateOn and StateCycle.</td><td class="clsSyntaxCells clsEvenRow">2000</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>setBeeperVolume:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Number greater than 0.  The maximum value is platform dependant. On Android platform, the range of setBeeperVolume is between 0 to 3. Here, 0 represents the minimum volume and 3 represents the maximum volume. The setBeeperVolume is set to Default value, if the value set for setBeeperVolume is less than 0 or greater than 3. User need to ensure that the device volume is not muted.</td><td class="clsSyntaxCells clsOddRow">When the beeper next sounds it will do so at the specified volume.  0 represents minimum volume, the decibels each volume level represents is device dependant</td><td class="clsSyntaxCells clsOddRow">0 For windows, 1 For Android</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>setBeeperDuration:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">Milliseconds</td><td class="clsSyntaxCells clsEvenRow">When the beeper is next instructed to cycle it will sound for the specified number of milliseconds</td><td class="clsSyntaxCells clsEvenRow">1000</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>setVibrateDuration:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">Milliseconds</td><td class="clsSyntaxCells clsOddRow">When the pager is next instructed to cycle it will vibrate the device for the specified number of milliseconds</td><td class="clsSyntaxCells clsOddRow">1000</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>stateOn:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">The index of the notification, obtained via the EnumNotificationsEvent</td><td class="clsSyntaxCells clsEvenRow">Turns the specified notification object on.  This will either light an LED, sound the beeper or vibrate the device depending on the type of the notification. Please note that some platforms may not allow you to continuously vibrate the pager to conserve battery. </td><td class="clsSyntaxCells clsEvenRow">Device Specific</td></tr><tr><td class="clsSyntaxCells clsOddRow"><b>stateOff:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">The index of the notification, obtained via the EnumNotificationsEvent</td><td class="clsSyntaxCells clsOddRow">Turns the specified notification object off.  This will either extinguish an LED, silence the beeper or stop the device from vibrating</td><td class="clsSyntaxCells clsOddRow">Device Specific</td></tr><tr><td class="clsSyntaxCells clsEvenRow"><b>stateCycle:[Value]
</b></td><td class="clsSyntaxCells clsEvenRow">The index of the notification, obtained via the EnumNotificationsEvent</td><td class="clsSyntaxCells clsEvenRow">Cycles the specified notification object.  LEDs will alternate between on and off for the specified number of cycles.  The beeper and pager will be invoked once for the specified number of milliseconds.</td><td class="clsSyntaxCells clsEvenRow">Device Specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>	

##Events


Values are returned to the caller in RhoElements via Events.  Most modules contain events and those returned from this module are given below along with the event parameters.  Events can cause a navigation to a new URL or a Javascript function on the page to be invoked.  Each event will in most cases have a number of parameters associated with it which will either be strings or javascript arrays.  Event parameters can be accessed either directly or via JSON objects.

<br />
###enumNotificationsEvent
The EnumNotificationsEvent is triggered in response to calling the 'Enumerate' method and is used to obtain the notifications available on the device and their associated identifiers. There is a single return value for this event which is a two dimensional array, with one dimension listing the available notifications and the other dimension listing the attributes for each notification object
<table class="re-table"><col width="3%" /><col width="20%" /><col width="77%" /><tr><th class="tableHeading">ID</th><th class="tableHeading">Name</th><th class="tableHeading">Description</th></tr><tr><td style="text-align:left;" class="clsSyntaxCells clsOddRow">1</td><td style="text-align:left;" class="clsSyntaxCells clsOddRow"><b>notificationsArray (notificationIndex, notificationType, notificationName)</b></td><td style="text-align:left;" class="clsSyntaxCells clsOddRow">2 Dimensional array of notifications, see remarks</td></tr></table>



##Multi Instance
When multiple RhoElements applications are running the following considerations should be made: Only the application with Focus will have the ability to enable/disable notifications. When an application is sent to background if there are any notifications in progress (vibrator, beeper etc.) they would be stopped.


##Remarks

###Zebra VH10 with Windows CE 6.0
On VH10 with Windown CE 6.0, the LED, beeper, pager and other objects activated through the Notification API are not supported, despite being enumerated through the `notification.enumerate();` function call.

###Behavior of Notification Objects
In some cases, notification object may either not be turned ON or may not be turned ON for infinite time as the notification behavior depends on the underlying hardware.

###LED Notification Object
On Android device, the LED objects activated through the Notification API are not supported, despite being enumerated through the `notification.enumerate();` function call.

###No Notification Objects
If the device has no notification objects the array returned by EnumNotificationsEvent will be empty


###Notification State
If RhoElements is exited after applying notifications, the settings will not revert.


###EnumNotificationsEvent Array Format
There is a single return value for this event which is a two dimensional array with the format below:

<pre>

(
   (                      //  Array for Notification 1
      notificationIndex,  //  Unique Identifier for each notification.
      notificationType,   //  Type of the notification.  '0' Indicates an LED; '1' indicates a Beeper and '2' indicates a pager
      notificationName    //  Human readable name of the notification, e.g. "Green LED"
   )
   (                      //  Array for Notification 2
      notificationIndex,
      notificationType,
      notificationName
   )
)
</pre>




##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">1.0.0 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">None.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Partially Persistent - Changes to this module will persist when navigating to a new page with the exception of the EnumNotificationsEvent which is page specific.</td></tr></table>


##HTML/JavaScript Examples

The following example stores the available notifications in a JavaScript array and displays them to the user in an HTML table. Note that a two-dimensional array is returned in the EnumNotificationsEvent:


		:::html
		<HTML>
		<HEAD>
		<META HTTP-Equiv="Notification" content="EnumNotificationsEvent:url('javascript:setupNtfyArr(%s)');">
		</HEAD>
		<script>
		   var ntfyArr = new Array();
		   var notType = new Array('LED', 'BEEPER', 'PAGER');
		   var NTFY_INDEX = 0;
		   var NTFY_TYPE = 1;
		   var NTFY_NAME = 2;
		
		   function setupNtfyArr(notArr)
		   {
		     ntfyArr = notArr;
			 var html = "";
		
			 for(i=0; i<ntfyArr.length; i++)
		     {
		       html += '' + ntfyArr[i][NTFY_INDEX] + ', '
			        + notType[ntfyArr[i][NTFY_TYPE]] + ''
			        + ntfyArr[i][NTFY_NAME] + '';
		     }
		
		     html += "";
		     htmDiv.innerHTML = html;
		   }
		
		   function onListNotifications()
		   {
			  notification.enumerate();
		   }
		</script>
		   <BODY>
		      <div id="htmDiv">
			  <INPUT TYPE="button" VALUE="List Notification Objects" ONCLICK="onListNotifications();">
		      </div>
		   </BODY>
		</HTML>

		
The following function takes a notification index and a notification type. Depending on the type of notification, it invokes it appropriately. The index and type of each notification can be obtained via the EnumNotificationsEvent as demonstrated in the previous example. 

		:::javascript
		<script>
		   function annoyUser(index, type)
		   {
		     if (type == 0)
		     {
		       //  If the Type of Notification is an LED flash it 10 times, on for 1 second off for 1 second.
		       notification.setLEDOnDuration = 1000;
		       notification.setLEDOffDuration = 1000;
		       notification.setLEDNumberOfCycles = 10;
		       //  Flash the LED
		       notification.stateCycle = index;
		     }
		     else if (type == 1)
		     {
		       //  If the Type of the Notification is a Beeper emit a continuous high pitch tone at maximum volume
		       notification.setBeeperFrequency = 8000;
		       notification.setBeeperVolume = 3;
		       //  Start the Beeper
		       notification.stateOn = index;
		     }
		     else if (type == 2)
		     {
		       //  If the type of the notification is a Pager then vibrate the device for 15 seconds
		       notification.setVibrateDuration = 15000;
		       notification.stateCycle = index);
		     }
		   }
		</script>

		
	
