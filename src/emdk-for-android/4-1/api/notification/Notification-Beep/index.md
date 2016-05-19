---
title: Notification.Beep
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


This holds the information required for the beep notifications 
 You can use a frequency of 0 Hz to introduce quiet times between beeps.

##Constructors

###Beep



##Public Fields

###time

Beeping time in milliseconds. Default value assigned is 0.
 The supported values are 0ms to 2550ms. Behavior is undefined for any other value

**Type:**

int

###frequency

Beeping frequency in Hz. Default value assigned is 0.
 The frequency range supported and the behavior when values outside of the range was provided are depended  on the actual hardware used for the notification device.  
 For example, for the current revision of RS6000 beeper hardware, it approximately supports 400Hz - 4.2KHz. 
 If a frequency outside this range is specified, the RS6000 will change the frequency to the closest supported frequency. 
 For more details, please refer the corresponding device documentation.

**Type:**

int

