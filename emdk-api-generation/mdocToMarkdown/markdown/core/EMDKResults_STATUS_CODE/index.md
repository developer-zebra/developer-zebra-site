---
title: EMDKResults.STATUS_CODE
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Defines all the status codes the library returns.

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.EMDKResults.STATUS_CODE ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE

###Values

**public static Symbol.XamarinEMDK.EMDKResults.STATUS_CODE[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE[]

##Properties

###CheckXml
This is returned when multiple features are present in the profile. In such a case the only way to verify if the API call was successful is to analyze the XML.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###EmdkNotOpened
EMDK is not opened

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###EmptyProfilename
Profile name passed Process profile was empty.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###Failure
 Process profile was a failure.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###FeatureNotReadyToUse
The requested feature is not ready to use. Try later.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###FeatureNotSupported
The requested feature is not supported on this device.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###NoDataListener
The asynchronous method (Ex: processProfileAsync) is issued without adding the data listener.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###NullPointer
Process profile had a null value.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###PreviousRequestInProgress
The previous request is in progress, wait for it to complete before next request.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###Processing
The processing of profile started, the result will be returned through the data listener callback registered.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###Success
Process profile was a success.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###Unknown
Process profile had mixed results.

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
