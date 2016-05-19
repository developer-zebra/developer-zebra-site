---
title: Notification.LEDParams
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


This holds the information required for the LED notifications.

##Constructors

###LEDParams



##Public Fields

###REPEAT_INFINTE

This constant value can be used to set the repeatCount to repeat the LED notifications infinitely

**Type:**

int

###color

The color for blinking LED on the notification device using RGB format. Ex: 0xFF0000 for Red.

**Type:**

int

###onTime

The number of milliseconds for the LED to be ON while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms.
 Behavior is undefined for any other value.

**Type:**

int

###offTime

The number of milliseconds for the LED to be OFF while it's flashing. Default value assigned is 0. The supported values are 0ms to 2550ms.
 Behavior is undefined for any other value.

**Type:**

int

###repeatCount

The LED blinking repeat count.
 Default value assigned is 0. The supported values are 0 to 127. Setting -1 or above 127 will flash the LED infinitely.

**Type:**

int

