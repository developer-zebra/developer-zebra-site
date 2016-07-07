---
title: Cradle
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


Class to communicate with the MC18 cradle.

##Public Methods

### enable

**public void enable()**

This method enables the communication to interact with the cradle.

**Returns:**

void - none

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### disable

**public void disable()**

This disables communication to interact with the cradle.

**Returns:**

void - none

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### isEnabled

**public boolean isEnabled()**

Check if cradle has already been enabled

**Returns:**

boolean - true, if enabled;false, if disabled.

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### getCradleInfo

**public CradleInfo getCradleInfo()**

This method gets the information of cradle.

**Returns:**

com.symbol.emdk.personalshopper.CradleInfo - CradleInfo : serial number, part number, firmware version, hardware id etc

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### unlock

**public CradleResults unlock(int unlockDuration, CradleLedFlashInfo ledFlashInfo)**

This unlocks terminal from cradle and flashes the LED.
 The timeout represents the duration in which the terminal remains unlocked in the
 cradle before becoming locked again. This is in seconds and the range is from 10 (minimum) to 30 (maximum) seconds.
 Continuous unlock may lead to heating up of hardware which may lead to unlock failure . This failure will be 
 indicated through blinking of cradle Red Led's .Unlock will fail until hardware gets cool down .

**Parameters:**

`unlockDuration`

`ledFlashInfo`

**Returns:**

com.symbol.emdk.personalshopper.CradleResults - CradleResults

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### flashLed

**public CradleResults flashLed(int ledFlashCount, CradleLedFlashInfo ledFlashInfo)**

The LED can be flashed to identify device location without unlocking the cradle.

**Parameters:**

`ledFlashCount`

`ledFlashInfo`

**Returns:**

com.symbol.emdk.personalshopper.CradleResults - CradleResults

**Throws:**

com.symbol.emdk.personalshopper.CradleException



##Public Fields

###config

The field to access Cradle configuration.

**Type:**

com.symbol.emdk.personalshopper.CradleConfig





