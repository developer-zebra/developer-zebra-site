---
title: NotificationConfig.LEDParams
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
This holds the information required for the LED notifications.

**Type** - Java.Lang.Object

##Constructors

###LEDParams

**public LEDParams ();**


        

##Properties

###Color
The color for blinking LED on the notification device using RGB format. Ex: 0xFF0000 for Red.

**Type** - System.Int32
###OffTime
The number of milliseconds for the LED to be OFF while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms for RS6000. Note: The behavior is undefined for any other value outside the range on RS6000.

**Type** - System.Int32
###OnTime
The number of milliseconds for the LED to be ON while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms for RS6000. Note: The behavior is undefined for any other value outside the range on RS6000.


**Type** - System.Int32
###RepeatCount
The LED blinking repeat count. Default value assigned is 0. The supported values are 0 to 127 for RS6000. Setting -1 or above 127 will flash the LED infinitely for RS6000. Note: The repeatCount is used for additional LED blinks. Example: Setting repeatCount = 0 will blink the LED once, setting repeatCount = 1 will blink the LED twice, etc.


**Type** - System.Int32
