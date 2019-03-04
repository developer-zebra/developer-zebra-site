---
title: EMDKManager.IStatusListener
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
This is the interface for the callback to notify the status of the feature object request. On a successful, the feature object will be returned and this must be type casted to the corresponding feature manager class based on the type.. An interface for notifying clients when they the feature manager is ready to use or not and interface will be used with EMDKManager.GetInstanceAsync()

##Methods
###OnStatus

**public void OnStatus (Symbol.XamarinEMDK.EMDKManager.StatusData p0, Symbol.XamarinEMDK.EMDKBase p1);**

Called to notify the client when the feature manager object is available and its state to use.

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.StatusData **p0**  - 
        

Symbol.XamarinEMDK.EMDKBase **p1**  - 
        

**Returns** - System.Void

