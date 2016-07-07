---
title: Notification.VibrateParams
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


This holds the information required for the vibrate notifications

##Constructors

###VibrateParams



##Public Fields

###time

The vibration time in milliseconds. Default value is assigned to 0. If the pattern array is null, this time will be used otherwise pattern takes precedence. The supported values are 0ms to 2550ms. Behavior is undefined for any other value.

**Type:**

long

###pattern

Vibrate with a given pattern. Pass in an array of integers that are the durations for which to turn on or off the vibrator in milliseconds. The supported values are 0ms to 2550ms. Behavior is undefined for any other value
 The first value indicates the number of milliseconds to wait before turning the vibrator on. The next value indicates the number of milliseconds for which to keep the vibrator on before turning it off. 
 Subsequent values alternate between durations in milliseconds to turn the vibrator off or to turn the vibrator on. 
 Maximum 8 vibrating pattern pairs are supported. If more than 8 pattern pairs are provided, only the first 8 pattern pairs will be considered.
 Default value assigned is null.

**Type:**

long





