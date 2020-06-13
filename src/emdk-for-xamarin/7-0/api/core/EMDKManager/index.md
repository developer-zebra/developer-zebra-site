---
title: EMDKManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '7.0' 
---
The key class in Android EMDK, provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.

**Type** - Java.Lang.Object

##Methods
###GetEMDKManager

**public static Symbol.XamarinEMDK.EMDKResults GetEMDKManager (Android.Content.Context p0, Symbol.XamarinEMDK.EMDKManager.IEMDKListener p1);**

The key class in Android EMDK, provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.

**Parameters:**

Android.Content.Context **p0**  - 
        

Symbol.XamarinEMDK.EMDKManager.IEMDKListener **p1**  - 
        

**Returns** - Symbol.XamarinEMDK.EMDKResults

###GetInstance

**public virtual Symbol.XamarinEMDK.EMDKBase GetInstance (Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE p0);**

The key class in Android EMDK, provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE **p0**  - 
        

**Returns** - Symbol.XamarinEMDK.EMDKBase

###GetInstanceAsync

**public virtual void GetInstanceAsync (Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE p0, Symbol.XamarinEMDK.EMDKManager.IStatusListener p1);**

The key class in Android EMDK, provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE **p0**  - 
        

Symbol.XamarinEMDK.EMDKManager.IStatusListener **p1**  - 
        

**Returns** - System.Void

###Release

**public virtual void Release ();**

The key class in Android EMDK, provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.

**Parameters:**

**Returns** - System.Void

###Release

**public virtual void Release (Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE p0);**

The key class in Android EMDK, provides access to different classes for the supported features. Clients should call EMDKManager.getEMDKManager(Context, EMDKManager.EMDKListener), to get the EMDKManager object. Each application implements EMDKListener interface. The EMDKManager object will be returned on successful opening through the EMDKListener callback.

**Parameters:**

Symbol.XamarinEMDK.EMDKManager.FEATURE_TYPE **p0**  - 
        

**Returns** - System.Void

