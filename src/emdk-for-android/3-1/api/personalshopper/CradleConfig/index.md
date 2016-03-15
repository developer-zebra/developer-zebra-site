---
title: CradleConfig
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

The class to access cradle configuration.

##Public Methods

### getLocation

**public CradleLocation getLocation()**

Gets the cradle location.

**Returns:**

com.symbol.emdk.personalshopper.CradleConfig.CradleLocation

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### setLocation

**public int setLocation(CradleConfig.CradleLocation cradleLocation)**

Sets the cradle location.

**Parameters:**

cradleLocation

**Returns:**

int

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### setFastChargingState

**public int setFastChargingState(boolean isFastChargingState)**

Sets fast charging state of cradle. True for fast charging and false slow charging state.

**Parameters:**

isFastChargingState - (true - to enable fast charge

**Returns:**

int

**Throws:**

com.symbol.emdk.personalshopper.CradleException



### getFastChargingState

**public boolean getFastChargingState()**

Gets fast charging state of the cradle. If the returned value is true, then the cradle is in fast charging state.

**Returns:**

boolean

**Throws:**

com.symbol.emdk.personalshopper.CradleException












