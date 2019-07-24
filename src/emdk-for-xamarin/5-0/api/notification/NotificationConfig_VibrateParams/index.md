---
title: NotificationConfig.VibrateParams
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
This holds the information required for the vibrate notifications.

**Type** - Java.Lang.Object

##Constructors

###VibrateParams

**public VibrateParams ();**


        

##Properties

###Pattern
Vibrate with a given pattern. Pass in an array of integers that are the durations for which to turn on or off the vibrator in milliseconds. The supported values are 0ms to 2550ms for RS6000. Behavior is undefined for any other value. The RS6000 vibrator will assume the end of sequence when an entry of 0 time is set. The first value indicates the number of milliseconds to wait before turning the vibrator on. The next value indicates the number of milliseconds for which to keep the vibrator on before turning it off. Subsequent values alternate between durations in milliseconds to turn the vibrator off or to turn the vibrator on. Maximum 4 vibrating pattern pairs are supported. If more than 4 pattern pairs are provided, only the first 4 pattern pairs will be considered. Default value assigned is null. Note: The External Vibrator does not support pattern.

**Type** - System.Collections.Generic.IList<System.Int64>
###Time
The vibration time in milliseconds. Default value is assigned to 0. If the pattern array is null, the time will be used otherwise pattern takes precedence. The supported values are 0ms to 2550ms for RS6000 and 0ms to 300000ms for External Vibrator. Behavior is undefined for any other value. RS6000 vibrator and External vibrator will assume the end of sequence when an entry of 0 time is set.

**Type** - System.Int64
