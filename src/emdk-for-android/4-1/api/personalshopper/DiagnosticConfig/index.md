---
title: DiagnosticConfig
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


The diagnostic configuration class has to be configured before calling the get diagnostics parameter data.
 This class configures average current and Shopping trip in minutes.

##Constructors

###DiagnosticConfig

DiagnosticsConfig Constructor

**Parameters:**

averageCurrent

in ma

**Type:** int

tripInMinutes

in mins

**Type:** int

##Public Fields

###averageCurrent

The average current consumption in mA. 
 When this is 0, the default value will be selected based on the running average.

**Type:**

int

###tripInMinutes

The shopping trip duration in minutes.
 When this is 0, the value will be generated for 45 minutes.

**Type:**

int












