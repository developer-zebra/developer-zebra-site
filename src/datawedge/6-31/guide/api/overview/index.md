---
title: DataWedge APIs 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## Overview
DataWedge APIs operate primarily through Android intents--specific commands that can be used by other applications to control data capture without the need to directly access the underlying hardware APIs. This guide describes the functionality of the intents supported by DataWedge and their effects on data capture and DataWedge Profiles and settings. 

In DataWedge versions prior to 6.2, applications access DataWedge APIs by broadcasting an intent, and use the primary pieces of information in the intent (action and data) to specify which API function to perform. DataWedge 6.2 defined a new API structure, permitting multiple API calls to be sent as Extras using a single intent Action. 

### New API Syntax
The new syntax defined in DataWedge 6.2 permits multiple DataWedge API calls as extras on a single intent action. The syntax is as follows:


		:::java
		Intent i = new Intent();
		i.setAction("com.symbol.datawedge.api.ACTION");
		String[] profiles = {"MainInventory"};
		i.putExtra("com.symbol.datawedge.api.DELETE_PROFILE", profiles);
		i.putExtra("com.symbol.datawedge.api.GET_PROFILES_LIST", "");

### APIs Supporting New Syntax

The following APIs can be invoked as extras from a single intent action:

* [EnableDataWedge](../6-3/#enabledatawedge)
* [CloneProfile](../6-3/#cloneprofile)
* [RenameProfile](../6-3/#renameprofile)
* [DeleteProfile](../6-3/#deleteprofile)
* [QueryProfileList](../6-3/#queryprofilelist)
* [GetActiveProfile](../6-3/#getactiveprofile)

### APIs That Require Previous Syntax

The following API calls require a distinct intent action for each: 

* [SoftScanTrigger](../6-3/#softscantrigger)
* [ScannerInputPlugin](../6-3/#scannerinputplugin)
* [EnumerateScanners](../6-3/#enumeratescanners) 
* [SetDefaultProfile](../6-3/#setdefaultprofile)
* [ResetDefaultProfile](../6-3/#resetdefaultprofile)
* [SwitchToProfile](../6-3/#switchtoprofile)

> **DataWedge 6.3 supports current and legacy API syntaxes**. 

**Important: DataWedge API commands of all versions are not queued, <u>and might be ignored</u>** if sent while DataWedge is busy processing an earlier intent. When an API command is sent, DataWedge executes the command only if it is not busy doing something else. Exceptions: 

* `STOP_SCANNING` - immediately interrupts a scan operation
* `DISABLE_PLUGIN` - immediately disables the current scanner input plug-in

To help ensure proper execution, Zebra recommends inserting delay code prior to critical commands. See the [SoftScanTrigger](../6-3/#softscantrigger) API for an example.  

### Requirements
The use of DataWedge APIs requires experience with Java programming and familiarity with [Android Intents](https://developer.android.com/reference/android/content/Intent.html). It also requires knowledge of DataWedge usage, features and terminology. For more information about DataWedge, see the DataWedge [Setup Guide](../../setup) and the [Architecture Overview](../../overview). It also might be helpful to read the DataWedge section of the Integrator Guide included with Zebra devices.

### Nested Bundles
DataWedge 6.3 implements the concept of nested bundles, which allows a "bundle" of values to be included as one value in another bundle. Bundles also can be multiple layers deep. For example, the image below illustrates a `PARAM_LIST` bundle nested within the `PLUGIN-CONFIG[0]` bundle nested within the API call `SET_CONFIG`. Nesting is required to configure the many parameters contained in a Profile.  

The image further illustrates that the `SET_CONFIG` API call can implement a second nested bundle, `PLUGIN_CONFIG[n]`, which can contain its own `PARAM_LIST`. 

<img style="height:450px" src="dw_nested_bundles.png"/>
<br>

### Example
The Java code below implements a nested bundle. 


	:::java
	Bundle bMain = new Bundle();
	bMain.putString("PROFILE_NAME","Profile2");
	bMain.putString("PROFILE_ENABLED", "true");
	bMain.putString("CONFIG_MODE","CREATE_IF_NOT_EXIST");
	bMain.putString("RESET_CONFIG", "true");


	Bundle bundleApp1 = new Bundle();
	bundleApp1.putString("PACKAGE_NAME","com.symbol.emdk.simulscansample1");
	bundleApp1.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.symbol.emdk.simulscansample1.DeviceControl",
	        "com.symbol.emdk.simulscansample1.MainActivity",
	        "com.symbol.emdk.simulscansample1.ResultsActivity.*",
	        "com.symbol.emdk.simulscansample1.ResultsActivity2",
	        "com.symbol.emdk.simulscansample1.SettingsFragment1"});


	Bundle bundleApp2 = new Bundle();
	bundleApp2.putString("PACKAGE_NAME","com.example.intents.datawedgeintent");
	bundleApp2.putStringArray("ACTIVITY_LIST", new String[]{
	        "com.example.intents.datawedgeintent.DeviceControl",
	        "com.example.intents.datawedgeintent.MainActivity",
	        "com.example.intents.datawedgeintent.ResultsActivity",
	        "com.example.intents.datawedgeintent.SettingsFragment1"});

	Bundle bundleApp3 = new Bundle();
	bundleApp3.putString("PACKAGE_NAME","*");
	bundleApp3.putStringArray("ACTIVITY_LIST", new String[]{"*"});


	Bundle bundleApp4 = new Bundle();
	bundleApp4.putString("PACKAGE_NAME","com.symbol.myzebraapp");
	bundleApp4.putStringArray("ACTIVITY_LIST", new String[]{"*"});

	bMain.putParcelableArray("APP_LIST", new Bundle[]{
	        bundleApp1
	        ,bundleApp2
	        ,bundleApp3
	        ,bundleApp4
	});

	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.SET_CONFIG", bMain);
	sendBroadcast(i);

-----

**Related Guides**:

* [DataWedge APIs](../6-3)
* [DataWedge Demo App](../../demo)

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial
