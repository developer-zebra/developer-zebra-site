---
title: Frequently Asked Questions
layout: guide.html
product: DataWedge
productversion: '7.6'
---

## Q: Should I use DataWedge or EMDK for my app?
A: For apps that require barcode scanning, Zebra strongly recommends DataWedge particularly since it is a simpler alternative to app development. DataWedge provides a quick and easy way to add scanning capabilities and is preinstalled on all Zebra devices. DataWedge can be used either by configuring the UI without any coding required or programmatically controlling the scanner through Android intents. See the [DataWedge vs. EMDK feature comparison chart](/help/#datawedgevsemdkcomparison) and the [Get Started](../gettingstarted) guide for more information. 

## Q: How do I configure DataWedge to capture data in an app without any coding?
A: DataWedge can be configured to capture and process data into any app with the use of [DataWedge profiles](../profiles). Profiles include information on how the data is input, processed and output. They are configured through the user interface and associated with an app. When DataWedge is invoked to scan and acquire data, the profile which the app is associated to formats or appends the data as specified, and then passes the data to the associated foreground app. See [Get Started](../gettingstarted) guide for more information.

## Q: How do I integrate scanning within my app?
A: There are two intent-based interfaces into the scanner:
1. **Using a generic Android intent to acquire scanned data** - This eliminates the need to use DataWedge APIs to capture data. Refer to the [tutorial](../samples/tutorial-ReceiveScannedData) which walks through how to receive scanned barcode data into an app.
2. **Using [DataWedge APIs](../api) to control the scanner** - Provides the ability to programmatically control, modify and query the DataWedge configuration settings and operations through Android intents. This allows new or existing Android apps to be easily modified to acquire data using Zebra devices without concern of the underlying hardware. Refer to [Get Started](../gettingstarted) guide and [sample demo apps](../samples).

See our [blog post on how to interface the scanner through DataWedge](https://developer.zebra.com/blog/interface-device-scanner-android-devices-through-datawedge).

## Q: Scanning works in DWDemo but not in my own app. What am I doing wrong?
A:  By default, the DWDemo profile is built-in to send scanned data via intent to the DWDemo app.  A profile would need to be configured for your app to receive the scanned data.  See [Managing Profiles](../createprofile/) on how to accomplish this.

## Q: I can scan barcodes but they are not sent to my app.  What am I doing wrong?
A: It is likely either a profile is not associated with your app or the profile input/output is not configured properly. DataWedge is using the default profile (Profile0) to perform the scan, which allows the scan beam to appear. But with improper configuration, it does not know how to output the data captured. To address this, either [create a profile](../createprofile/) and associate it with your app or configure the default profile with the proper input/output to capture the scanned data.

## Q: How do I temporarily suspend scanning in my DataWedge app? 
A: There are two methods to temporarily disable the barcode scanner in an app using the Scanner Input Plugin:
1. **Enable / Disable** - can be called at any time
2. **Suspend / Resume** - much quicker but can be called only when the scanner is in the `SCANNING` or `WAITING` state. The scanner state can be retrieved using [Get Scanner Status](../../api/getscannerstatue) or [Register for Notification](../../api/registerfornotification).  For more information visit our <a href="https://developer.zebra.com/blog/quickly-suspend-scanning-your-app-datawedge">blog on how to quickly suspend scanning in your app with DataWedge.</a>

-----

Related Guides: 

* [DataWedge Get Started guide](../gettingstarted)
* [DataWedge Demo app](../samples/dwdemo)
* [Profile Overview](../overview) 
* [Profiles/Plug-Ins listing](../profiles)
