---
title: SimulScanConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The SimulScanConfig class provides access to reader configuration settings.

**Type** - Java.Lang.Object

##Properties

###AudioFeedback
Turn on/off audio feedback.

**Type** - Java.Lang.Boolean
###AutoCapture
If true, form will be captured automatically when detected.

**Type** - Java.Lang.Boolean
###DebugMode
If enabled, allows a session to write form capture, region images, region values, and other data to storage.

**Type** - Java.Lang.Boolean
###HapticFeedback
Turn on/off haptic feedback.

**Type** - Java.Lang.Boolean
###IdentificationTimeout
Amount of time in milliseconds to wait before timing out identification.

**Type** - System.Int32
###LedFeedback
Turn on/off LED feedback.

**Type** - Java.Lang.Boolean
###MultiTemplate
The SimulScanMultiTemplate to scan

**Type** - Symbol.XamarinEMDK.SimulScan.SimulScanMultiTemplate
###ProcessingTimeout
Amount of time in milliseconds to wait before timing out processing.

**Type** - System.Int32
###UserConfirmationOnScan
If userConfirmationOnScan is true, shows UI for user to confirm the scanned data before sending results to application.

**Type** - Java.Lang.Boolean
