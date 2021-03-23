---
title: DataWedge Programmer's Guide
layout: guide.html
product: DataWedge
productversion: '8.2'
---

## Overview

This section provides guidance on how to use [DataWedge Intent APIs](../../api) to capture, process, and deliver data to an application. An application accesses the DataWedge API by sending an intent to query or modify a configuration. Changes can take place at runtime if supported by the API. The action and data of the intent specifies which DataWedge API function to perform. Multiple API calls can be sent as extras using a single intent action.Function prototype: 

	Intent i = new Intent(); 
	i.setAction("com.symbol.datawedge.api.ACTION"); 
	i.putExtra(EXTRA_DATA, "<parameter>"); 

A query is made to the DataWedge API by sending a broadcast intent and a reply is received via broadcast intent.  

## DataWedge API Basics 

Basic DataWedge API usage:
* **Create profile / update existing profile / configure multiple plugins with a single intent action:** Customize data capture with a DataWedge profile using [Set Config API](../../api/setconfig) to create a profile, update a profile, or configure multiple plugins (input, processing, output, utilities) with a single intent. Sample use cases: 
 * Modify the active profile to only enable certain decoders within particular screens in your application workflow to improve scan performance. 
 * Update a profile based on user preferences when the application is running in the foreground. 
 * Use pre-configured profiles to capture data depending on the app running in the foreground. 
 * Modify scanner parameters to perform certain actions, such as emit a continuous scan beam with a single trigger press.  
* **Enable/Disable data capture:** Enable/disable DataWedge scanner and foreground activity monitoring with [Enable DataWedge API](../../api/enabledatawedge). This can be used to allow other application, such as Enterprise Browser, to use the device scanner exclusively.  
* **Support multiple scanner types across different Zebra devices:** To retrieve the available scanner types on the device (such as internal imager, internal camera, connected Bluetooth, etc.), use [Enumerate Scanners API](../../api/enumeratescanners). This is useful if the application is used across different Zebra devices that support different types of scanner hardware. 
* **Initiate barcode scanning in the app UI:** Trigger barcode scanning with a button tap in the app by using [Soft Scan Trigger API](../../api/softscantrigger). Refer to [barcode sample app](../samples/barcode1). 
* **Check version information to ensure feature support:** Retrieve the DataWedge version on the device with [Get Version Info API](../../api/getversioninfo). This can be used to identify whether the device supports a particular feature in use and take action by enabling/disabling the feature based on availability.  
* **Modify barcode scanner parameters at runtime:** When barcode scanner parameters need to be modified dynamically at runtime but not persist within the profile, use [Switch Scanner Params API](../../api/switchscannerparams). For example, an application can have a button to allow the user to set the trigger to continuous mode on demand without setting this in the profile as it is not desired to be set as the default behavior. This is a temporary update - once the “switch” happens, the setting is not persisted if the profile changes.  
* **Enable/disable or temporarily suspend/resume barcode scanning during runtime:** Dynamically control the integrated barcode scanner (laser, imager, internal camera) to enable/disable the trigger in certain areas of the application workflow or suspend/resume scanning to temporarily activate/de-activate the scanner using [Scanner Input Plugin](../../api/scannerinputplugin). Status change notifications include the active profile name, which permits an app to use the enable/disable scanner calls only when status changes affect a relevant profile. This can be useful to change the scanner state in quick succession, for example when there are multiple text fields and it is desired for scanning to suspend when a particular text field is in focus, use Scanner Input Plugin to suspend the scanner in that particular text field. 
* **Monitor configuration, scanner, and profile switch changes:** Register/unregister to receive notifications for changes related to configuration, scanner and profile switches using [Register for Notification API](../../api/registerfornotification). These changes can result from DataWedge API calls (such as Import Config, Switch to Profile, and Scanner Input Plugin) or DataWedge profile changes (such as profile Auto Import).   
* **Import profile or configuration:** After a profile or configuration file, which can contain multiple profiles, has been exported and placed onto a device, the settings can be imported programmatically with [Import Config API](../../api/importconfig) or [manually](../../settings/#importaprofile).   
* **Remove profile:** When a profile is no longer needed, it can be removed with [Delete Profile API](../../api/deleteprofile). This can be useful if there is an app that utilizes a profile for a one-time task or a profile needs to be removed when exiting the app. 
* **Duplicate an existing profile:** Create a copy of an existing profile with [Clone Profile API](../../api/cloneprofile). This can be useful if an app requires multiple profiles with common configuration parameters yet each profile may vary with minor differences – after duplication the cloned profile can be passed to Set Config to set the differing configuration. 
* **Retrieve profile list:** Retrieve all the DataWedge profiles using [Get Profiles List API](../../api/getprofileslist). This is useful if an app needs to query the profile list to find a particular profile or if it needs to present a list to the user for a profile to be selected. In cases where an app creates a DataWedge profile upon app launch – a check can be included to determine if the profile exists by retrieving the profile list to improve performance and avoid unnecessary file input/output operations. 
* **Use different profiles based on application workflow:** For flexibility in using profiles that are not associated with another application, to switch profiles during runtime, and to overcome the restriction of associating an app activity with only one profile, use [Switch to Profile API](../../api/switchtoprofile) to activate profiles that are not already associated with another app. This can be helpful to use different profiles within the same app activity, for example if an area of the activity requires PDF417 barcodes to be scanned and another area of the activity requires MSR card data to be read. When focus is on scanning PDF417 barcodes, use SWITCH_TO_PROFILE to activate the profile with the barcode configurations. Similarly, when focus is on reading the MSR data, use SWITCH_TO_PROFILE to activate the profile with the MSR configurations. Both profiles must not already have an app associated. 

--------

## Best Practices 
The following information provides guidance and best practices for DataWedge application development.

### General
* **Scanning performance optimization:** To improve scanning performance, Zebra recommends disabling all Decoders not required by the app(s) associated with a given Profile. 
* **Profile configuration across multiple apps:**  DataWedge is a global service and any application on the device can interact with it to configure any profile.  Therefore, care should be taken if multiple applications are trying to modify the same set of profiles. 

### Data Capture 
* **Temporarily suspend or de-activate scanning in app:** Use Scanner Input Plugin API with SUSPEND_PLUGIN/RESUME_PLUGIN parameters.  
* For situations that require **rapid changes between suspend/resume status,** use Scanner Input Plugin and register for SCANNER_STATUS notifications. When the scanner is activated (for example from a profile configuration or from RESUME_PLUGIN or ENABLE_PLUGIN intent API), SCANNER_STATUS broadcasts the WAITING and SCANNING states, rotating between each depending on whether scanning is taking place. For the app to suspend scanning, act only when in the SCANNING and WAITING states - when these states are broadcasted, use SUSPEND_PLUGIN parameter to remain in the suspended state and keep the scanner unusable. Once scanning is suspended, SCANNER_STATUS broadcasts the IDLE state. Use RESUME_PLUGIN to re-activate the scanner.  
* **Capture data and photos in a single app:** It is possible to take pictures and capture barcode data using the same application if the application was designed with this in mind. 
	1. Add separate Activities in the app: one for barcode scanning and another for picture taking. 
	2. Create a DataWedge Profile with the following settings: 
	    * Associate the Profile with the picture-taking Activity 
	    * Disable scanning in the Profile 
	3. Use the standard Android SDK APIs to control the camera 
	4. When the app is used for scanning, the default DataWedge profile will come into effect. 
	5. For accessing specific decoders, processing rules or other special scanning needs, a second DataWedge Profile can be created and associated with the barcode scanning activity of the app. 
* **Data dispatched too quickly:** If data is being dispatched too quickly for the application to accept, such as when using terminal emulation apps, this can be addressed by adding a delay between each character sent to the app with the use of `keystroke_character_delay` in [Set Config](../../api/setconfig). Refer to Keystroke Output Parameters section and example code provided in section “Configure an inter-character delay”.  This parameter should be used with caution as it can negatively affect application performance. 
* When using [DataWedge intent APIs](../../api/overview) to **query DataWedge for information** (such as Get Active Profile), the app must register to receive the result with a filter that identifies the action and category of the result intent. 

### Profiles 
* **Existence of duplicate Associated Apps when importing profiles:** If a duplicate [Associated App](../../gettingstarted) exists between a current profile and a profile being imported, the profile being imported will not take into effect. For example, if current profile A is configured with an associated app and that same app is associated with profile B, when importing profile B the import does not take into effect due to the duplication. This similarly applies if an app is listed in the [Disabled App List](../../settings) and that same app is an Associated App in a profile being imported - the import does not take into effect and the app remains on the Disabled App List. 
* **Activity/app association with profiles:** A single profile can be associated with one or more activities or apps.  However, an activity or app can be associated with only one profile. If there is a requirement to associate an activity or app to more than one profile, this can be addressed with SWITCH_TO_PROFILE, which does not specify any associated apps. <br>
The following example discusses the use of SWITCH_TO_PROFILE with SCANNER_INPUT_PLUGIN with two activities: Activity A launches and uses Switch to Profile API to switch to ProfileA, which SCANNER_INPUT_PLUGIN is enabled, then at some point it disables the scanner plug-in. Activity B is launched, associated with ProfileB. DataWedge switches to ProfileB. When activity A comes back to the foreground from the onResume method, activity A needs to use Switch to Profile to switch back to ProfileA, then use the same API intent again to disable the scanner plug-in, to return back to the state it was in. Reminder: Use of this API changes only the runtime status of the scanner; it does not make persistent changes to the Profile. The above assumes that ProfileA is not associated with any applications/activities, therefore when focus switches back to activity A, DataWedge will not automatically switch to ProfileA - therefore activity A must switch back to ProfileA in its onResume method. Because DataWedge will automatically switch Profile when an activity is paused, it is recommended that this API function be called from the onResume method of the activity.


-----

Related Guides: 

* [DataWedge APIs and sample code](../../api) 
* [DataWedge developer articles and blog posts](../../programmers-guides/articles)
* [DataWedge Usage Notes and Behavior](../../programmers-guides/usage-notes)
