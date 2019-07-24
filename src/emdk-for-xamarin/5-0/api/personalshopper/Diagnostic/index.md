---
title: Diagnostic
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
This class provides access to fetch the diagnostics information.

**Type** - Java.Lang.Object

##Methods
###GetDiagnosticData

**public virtual Symbol.XamarinEMDK.PersonalShopper.DiagnosticData GetDiagnosticData (int p0, Symbol.XamarinEMDK.PersonalShopper.DiagnosticConfig p1);**

Get the values for all the parameters or the specified parameter ID.

**Parameters:**

System.Int32 **p0**  - ParamID:Parameters - to query .The paramId can be single param value or combination of multiple parameters request. The multiple parameters request can be made by BATTERY_STATE_OF_CHARGE | BATTERY_TIME_TO_EMPTY or by using BATTERY_STATUS_ALL.

Symbol.XamarinEMDK.PersonalShopper.DiagnosticConfig **p1**  - DiagnosticsConfig - :Input parameters

**Returns** - Symbol.XamarinEMDK.PersonalShopper.DiagnosticData

