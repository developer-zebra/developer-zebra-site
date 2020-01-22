---
title: Notification.Beeping
layout: guide.html 
product: EMDK For Xamarin 
productversion: '6.0' 
---

    

**Type** - Java.Lang.Object

##Constructors
### Beeping 
**public Beeping ();**

##Properties

###Frequency
Beeping frequency in Hz. Default value assigned is 0. The frequency range supported and the behavior when values outside of the range was provided are depended on the actual hardware used for the notification device. 
For example, for the current revision of RS6000 beeper hardware, it approximately supports 400Hz - 4.2KHz. If a frequency outside this range is specified, the RS6000 will change the frequency to the closest supported frequency. For more details, please refer the corresponding device documentation.

**Type** - System.Int32
###Time
Beeping time in milliseconds. Default value assigned is 0. The supported values are 0ms to 2550ms. Behavior is undefined for any other value The RS6000 beeper will assume the end of sequence when an entry of 0 time is set.

**Type** - System.Int32


