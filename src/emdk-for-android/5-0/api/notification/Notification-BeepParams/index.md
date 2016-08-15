---
title: Notification.BeepParams
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


This holds the information required for the beep pattern.

##Constructors

###BeepParams



##Public Fields

###pattern

Pass in an array of Beep that specifies the durations for which to turn on the beep in milliseconds and the frequency in Hz. 
 Default value assigned is null. Maximum allowed are 8 beep pattern pairs. If more than 8 pattern pairs are provided, only the first 8 pattern pairs will be considered.

**Type:**

com.symbol.emdk.notification.Notification.Beep


