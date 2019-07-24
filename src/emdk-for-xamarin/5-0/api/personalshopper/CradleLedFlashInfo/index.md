---
title: CradleLedFlashInfo
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The class to hold the LED Flash settings.

**Type** - Java.Lang.Object

##Constructors

###CradleLedFlashInfo

**public CradleLedFlashInfo (int p0, int p1, bool p2);**

Constructor to instantiate the CradleLEDConfig.

##Properties

###OffDuration
Cradle LED off time in milliseconds.This is in mSecs and the range is from 0 mSec (minimum) to 65535 mSec (maximum) seconds.

**Type** - System.Int32
###OnDuration
Cradle LED on time in milliseconds.This is in mSecs and the range is from 0 mSec (minimum) to 65535 mSec (maximum) seconds.

**Type** - System.Int32
###SmoothEffect
Enable or disable the smooth effect of the LED blinking

**Type** - System.Boolean
