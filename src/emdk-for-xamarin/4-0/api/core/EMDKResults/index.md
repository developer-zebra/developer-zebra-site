---
title: EMDKResults
layout: guide.html
product: EMDK For Xamarin 
productversion: '4.0' 
---
Class for holding EMDK result data.

**Type** - Java.Lang.Object

##Properties

###ExtendedStatusCode
Gets status code result from process profile as enum value of type EMDKResults.EXTENDED_STATUS_CODE.

**Type** - Symbol.XamarinEMDK.EMDKResults+EXTENDED_STATUS_CODE
###ExtendedStatusMessage
Return the extended status information string. If there is not any extended information this returns empty string "".

**Type** - System.String
###StatusCode
Gets status code result from process profile as enum value of type EMDKResults.STATUS_CODE .

**Type** - Symbol.XamarinEMDK.EMDKResults+STATUS_CODE
###StatusDocument
Gets status results from process profile as xml document.

**Type** - Org.W3c.Dom.IDocument
###StatusString
Gets status results from process profile as xml string.

**Type** - System.String
###SuccessFeaturesCount
Return the total number of features in profile request is success. Currently these values will be available when the process profile is called to check profile compatibility. This will return -1 if the value is not used/set.

**Type** - System.Int32
###TotalFeaturesCount
Return the total number of features in the profile. Currently these values will be available when the process profile is called to check profile compatibility. This will return -1 if the value is not used/set.

**Type** - System.Int32
