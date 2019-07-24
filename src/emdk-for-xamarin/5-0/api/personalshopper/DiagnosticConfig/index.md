---
title: DiagnosticConfig
layout: guide.html
product: EMDK For Xamarin 
productversion: '5.0' 
---
The diagnostic configuration class has to be configured before calling the get diagnostics parameter data. This class configures average current and Shopping trip in minutes.

**Type** - Java.Lang.Object

##Constructors

###DiagnosticConfig

**public DiagnosticConfig (int p0, int p1);**

DiagnosticsConfig Constructor

##Properties

###AverageCurrent
The average current consumption in mA. When this is 0, the default value will be selected based on the running average.

**Type** - System.Int32
###TripInMinutes
The shopping trip duration in minutes. When this is 0, the value will be generated for 45 minutes.

**Type** - System.Int32
