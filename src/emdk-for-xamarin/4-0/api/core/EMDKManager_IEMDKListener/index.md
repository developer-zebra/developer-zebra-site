---
title: EMDKManager.IEMDKListener
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
This is the interface for the callback to notify the opening and closing status of the EMDK. On a successful opening, the EMDKManager object will be returned. An interface for notifying clients when they the EMDKManager is ready to use or closed abruptly.
    

##Methods
###OnClosed

**public void OnClosed ();**

Called to notify the client that this EMDKManager object has been abruptly closed. The clients must call EMDKManager.Release() to free all the resources used by EMDKManager even after onClosed(). 
        

**Parameters:**

**Returns** - System.Void

###OnOpened

**public void OnOpened (Symbol.XamarinEMDK.EMDKManager p0);**

Called to notify the client when the EMDKManager object has been opened and its ready to use.

**Parameters:**

Symbol.XamarinEMDK.EMDKManager **p0**  - 
        

**Returns** - System.Void

