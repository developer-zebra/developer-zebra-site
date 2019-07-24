---
title: NotificationConfig.BeepParams
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
This holds the information required for the beep pattern.

**Type** - Java.Lang.Object

##Constructors

###BeepParams

**public BeepParams ();**


        

##Properties

###Pattern
Pass in an array of Beep that specifies the durations for which to turn on the beep in milliseconds and the frequency in Hz. Default value assigned is null. Maximum allowed are 4 beep pattern pairs. If more than 4 pattern pairs are provided, only the first 4 pattern pairs will be considered.

**Type** - System.Collections.Generic.IList<Symbol.XamarinEMDK.Notification.NotificationConfig+Beeping>
