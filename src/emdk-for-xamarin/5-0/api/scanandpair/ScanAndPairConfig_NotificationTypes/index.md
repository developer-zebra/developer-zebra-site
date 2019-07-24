---
title: ScanAndPairConfig.NotificationTypes
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
This enum provides notification related information during scanning process and is used by the ScanAndPair APIs to set the notification type. The notifications can be provided to the user to indicate the progress of the different scanning states via beep sequences.  The beep sequence is explained below 

**Beeping Sequence**

Notification Stages Beeper Sequence Remarks Scanner Ready Two short beeps of the same frequency If the ScanInfo.TriggerType is set to MANUAL, this notification 
indicates when to press the trigger. Pair Success Four short beeps of the same frequency Indicates that pairing has succeeded. Unpair success Four short beeps of the same frequency Indicates that unpairing has succeeded. Scan Failed Six beeps of alternating frequencies Indicates scanning has failed. Discovery failed Six beeps of alternating frequencies Indicates that the Bluetooth device could not be found. UnPair failed Six beeps of alternating frequencies Indicates that unpairing has failed

**Type** - Java.Lang.Enum

##Methods
###ValueOf

**public static Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig.NotificationTypes ValueOf (string this_);**


        

**Parameters:**

System.String **p0** 

**Returns** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+NotificationTypes

###Values

**public static Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig.NotificationTypes[] Values ();**


        

**Parameters:**

**Returns** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+NotificationTypes[]

##Properties

###Beeper
Beeper notification. Raises pre-defined beep sequences. This will give the user an audible alert when specific operations are performed.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+NotificationTypes
###None
Disable notification. Do not raise notification for any type of operations.

**Type** - Symbol.XamarinEMDK.ScanAndPair.ScanAndPairConfig+NotificationTypes
