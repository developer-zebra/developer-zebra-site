---
title: Cradle
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
Class to communicate with the MC18 cradle.

**Type** - Java.Lang.Object

##Methods
###Disable

**public virtual void Disable ();**

This disables communication to interact with the cradle.

**Parameters:**

**Returns** - System.Void

###Enable

**public virtual void Enable ();**

This method enables the communication to interact with the cradle.

**Parameters:**

**Returns** - System.Void

###FlashLed

**public virtual Symbol.XamarinEMDK.PersonalShopper.CradleResults FlashLed (int p0, Symbol.XamarinEMDK.PersonalShopper.CradleLedFlashInfo p1);**

The LED can be flashed to identify device location without unlocking the cradle.

**Parameters:**

System.Int32 **p0**  - ledFlashCount: - Defines the number of times the led should blink (on/off).

Symbol.XamarinEMDK.PersonalShopper.CradleLedFlashInfo **p1**  - ledFlashInfo: - Defines the LED blink pattern (onDuration, offDuration, smoothness)

**Returns** - Symbol.XamarinEMDK.PersonalShopper.CradleResults

###Unlock

**public virtual Symbol.XamarinEMDK.PersonalShopper.CradleResults Unlock (int p0, Symbol.XamarinEMDK.PersonalShopper.CradleLedFlashInfo p1);**

This unlocks terminal from cradle and flashes the LED. The timeout represents the duration in which the terminal remains unlocked in the cradle before becoming locked again. This is in seconds and the range is from 10 (minimum) to 30 (maximum) seconds. Continuous unlock may lead to heating up of hardware which may lead to unlock failure . This failure will be indicated through blinking of cradle Red Led's .Unlock will fail until hardware gets cool down .


**Parameters:**

System.Int32 **p0**  - unlockDuration: - The value that specifies how long the lock remains open in seconds.

Symbol.XamarinEMDK.PersonalShopper.CradleLedFlashInfo **p1**  - ledFlashInfo: - The LED blink pattern definition

**Returns** - Symbol.XamarinEMDK.PersonalShopper.CradleResults

##Properties

###Config
The field to access Cradle configuration.

**Type** - Symbol.XamarinEMDK.PersonalShopper.CradleConfig
###CradleInfo
This method gets the information of cradle.

**Type** - Symbol.XamarinEMDK.PersonalShopper.CradleInfo
###IsEnabled
Check if cradle has already been enabled

**Type** - System.Boolean
