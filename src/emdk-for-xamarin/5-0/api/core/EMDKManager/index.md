---
title: EMDKManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The EMDKManager class is the key class in Android EMDK. This class provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.
  

**Type** - Java.Lang.Object

##Methods
###GetEMDKManager

**public static Symbol.XamarinEMDK.EMDKResults GetEMDKManager (Android.Content.Context p0, Symbol.XamarinEMDK.EMDKManager.IEMDKListener p1);**

Use this static method to request an instance of the EMDKManager object. Clients must implement EMDKManager.IEMDKListener to get notified of the EMDK manager status and to get the EMDKManager object.
        

**Parameters:**

Android.Content.Context **p0**  - The application context should be provided by the user.

Symbol.XamarinEMDK.EMDKManager.IEMDKListener **p1**  - The EMDK Listener for listener callbacks.

**Returns** - Symbol.XamarinEMDK.EMDKResults

###GetInstance

**public virtual Symbol.XamarinEMDK.EMDKBase GetInstance (Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE p0);**

This method returns an object instance which has derived from EMDKBase. Based on the type given, the object needs to be type-casted before used. Calling this method EMDKManager.getInstance(EMDKManager.FEATURE_TYPE) before EMDKManager opened will return null.
        

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE **p0**  - The EMDKManager.FEATURE_TYPE the object to be created.

**Returns** - Symbol.XamarinEMDK.EMDKBase

###GetInstanceAsync

**public virtual void GetInstanceAsync (Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE p0, Symbol.XamarinEMDK.EMDKManager.IStatusListener p1);**

This method is an asynchronous call and requests object instance for the specified feature type and object is returned through the status listener callback when the feature is initialized and ready to use. Ex:The Profile Manager related components will take few seconds to initialize for it to be used after device booted. If the application tries to use the EMDKManager.GetInstance to get the profile manager object and sets the profile during the device boot will result in error because the underlying Profile manager is not ready.

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE **p0**  - The EMDKManager.FEATURE_TYPE the object to be created.

Symbol.XamarinEMDK.EMDKManager.IStatusListener **p1**  - The callback will returned on EMDKManager.IStatusListener when the feature is ready to use.

**Returns** - System.Void

###Release

**public virtual void Release ();**

This method releases all the resources constructed by EMDKManager. EMDKManager can't be used after this call. The clients must call this method before exiting the application.
        

**Parameters:**

**Returns** - System.Void

###Release

**public virtual void Release (Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE p0);**

This method releases resources of a given manager type. Instance variable is not required as multiple instances are not allowed by design.
       

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE **p0**  - Type of EMDKManager.FEATURE_TYPE to be released. Only the given feature related manager will be cleared if it has been constructed.

**Returns** - System.Void

