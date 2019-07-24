---
title: CradleConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The class to access cradle configuration.

**Type** - Java.Lang.Object

##Methods
###SetFastChargingState

**public virtual int SetFastChargingState (bool p0);**

Sets fast charging state of cradle. True for fast charging and false slow charging state.

**Parameters:**

System.Boolean **p0**  - isFastChargingState - (true - to enable fast charge, false - to disable fast charge)

**Returns** - System.Int32

###SetLocation

**public virtual int SetLocation (Symbol.XamarinEMDK.PersonalShopper.CradleConfig.CradleLocation p0);**

Sets the cradle location.

**Parameters:**

Symbol.XamarinEMDK.PersonalShopper.CradleConfig.CradleLocation **p0**  - CradleLocation - information (row, column, wall)

**Returns** - System.Int32

##Properties

###FastChargingState
Gets fast charging state of the cradle. If the returned value is true, then the cradle is in fast charging state.

**Type** - System.Boolean
###Location
Gets the cradle location.

**Type** - Symbol.XamarinEMDK.PersonalShopper.CradleConfig+CradleLocation
