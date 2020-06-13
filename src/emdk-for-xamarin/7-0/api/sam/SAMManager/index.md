---
title: SAMManager
layout: guide.html
product: EMDK For Xamarin 
productversion: '7.0' 
---
Once initialized, SAMManager allows app to query available SAM information to apps. Returns an array of SAMDevice objects consisting of only SAM slots with a SAM present in the corresponding slot. Returns null if no SAM is present in the device. If only one SAM is present, one SAMDevice instance is returned. With multiple SAMs present, all SAMDevices are returned according to their index.

**Type** - Symbol.XamarinEMDK.EMDKBase

##Methods
###EnumerateSAMs

**public virtual System.Collections.Generic.IList<Symbol.XamarinEMDK.Sam.SAM> EnumerateSAMs ();**

Once initialized, SAMManager allows app to query available SAM information to apps. Returns an array of SAMDevice objects consisting of only SAM slots with a SAM present in the corresponding slot. Returns null if no SAM is present in the device. If only one SAM is present, one SAMDevice instance is returned. With multiple SAMs present, all SAMDevices are returned according to their index.

**Parameters:**

**Returns** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Sam.SAM>

##Properties

###ActiveSlot
Once initialized, SAMManager allows app to query available SAM information to apps. Returns an array of SAMDevice objects consisting of only SAM slots with a SAM present in the corresponding slot. Returns null if no SAM is present in the device. If only one SAM is present, one SAMDevice instance is returned. With multiple SAMs present, all SAMDevices are returned according to their index.

**Type** - System.Int32
