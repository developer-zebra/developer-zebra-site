---
title: Frequently Asked Questions
layout: guide.html
product: EMDK for Xamarin
productversion: '5.0'
---

## About the FAQ 

This page presents some of the most commonly asked questions submitted to Zebra customer support by Zebra customers and partners along with brief answers and links to relevant documentation. 

-----

### Q: Why did the scanner stop working when switching apps?

A: **For proper operation of scanning apps on a device, control of scanning hardware must be programmatically released when the app quits or goes to the background**. When a scanning app takes control of any device scanner, other apps on the device are blocked from all device scanning resources. **Learn how to prevent these failures in the [Barcode Scanning Guide](../guide/barcode_scanning_guide)**. 

-----

### Q: Should I use DataWedge or EMDK for my app? 

A: **DataWedge provides a quick and easy way to add scanning capabilities to an existing app, and Zebra recommends evaluating the use of DataWedge before building or modifying an app for scanning with EMDK**. DataWedge comes preinstalled on all Zebra devices, accepts input from scanners, imagers, cameras, mag-stripe readers, RFID and other peripherals, can infinitely manipulate the acquired data and outputs it as keystrokes, intent payload or over an IP connection. All functions of DataWedge can be controlled programmatically through Android intents. **See the [DataWedge vs. EMDK feature comparison chart](https://techdocs.zebra.com/help/#datawedgevsemdkcomparison)** for more information.

-----

### Q: Why don't my KitKat and/or Lollipop apps work with Nougat and/or Oreo?

**NOTE**: EMDK for Android 7.4 (and higher) no longer targets devices running Nougat.

A: Due to the many advancements in newer Android versions, some older apps require modification to run properly on newer flavors. **Among the common causes of incompatibility of older apps relate to changes in background processing implemented mainly to optimize battery life**. 

When developing an app, Android developers should specify in the app manifest a target API along with minimum and maximum Android API levels. This maps the app to specific Android OS versions to run on. For example, if API level 23 is specified as the target level, it indicates that the app is intended to run on Android 6.0 (Marshmallow) and can prevent attempts to run the app on incompatible versions.

**Helpful links**: 

* **[What's New for Android 'N' and the Impact on Zebra Developers](https://developer.zebra.com/community/home/blog/2018/08/03/what-s-new-for-android-n-and-the-impact-on-zebra-developers)** | Zebra engineering 
* **[What's New for Android 'O' and the Impact on Zebra Developers](https://developer.zebra.com/community/home/blog/2018/09/28/what-s-new-for-android-o-and-the-impact-on-zebra-developers)** | Zebra engineering
* [The Android '&lt;uses-sdk&gt;' parameter](https://developer.android.com/guide/topics/manifest/uses-sdk-element) | Android development community
* [Android 7 Nougat behavior changes](https://developer.android.com/about/versions/nougat/android-7.0-changes) | Android development community
* [Migrating to Android 8 Oreo](https://developer.android.com/about/versions/oreo/android-8.0-migration) | Android development community
* [Migrating to Android 9 Pie](https://developer.android.com/about/versions/pie/android-9.0-migration) | Android development community

-----

### Q: Zebra APIs appear to offer limited fault tolerance. How can my app adapt to this?

A: Retry the API command or gracefully exit the app. The exception handling code snippet below also might be helpful:

		 catch (ScannerException ex)
            {
                Log.Debug("EMDK Exception", ex.StackTrace);

                // Check if the failure is recoverable within the application
                
                if (ex.Result == ScannerResults.Failure ||
                    ex.Result == ScannerResults.ScannerNotEnabled ||
                    ex.Result == ScannerResults.ScannerNotConnected ||
                    ex.Result == ScannerResults.InvalidObject ||
                    ex.Result == ScannerResults.NoDataListener)
                {
                    // Decide what actions can be taken as per the business logic
                }

                // Check if the failure is not recoverable within the application
                
                if (ex.Result == ScannerResults.ScannerInUse ||
                    ex.Result == ScannerResults.FeatureNotSupported ||
                    ex.Result == ScannerResults.ScannerNotSupported ||
                    ex.Result == ScannerResults.ScannerInitFailure)
                {
                    // Decide what actions can be taken as per the business logic
                }
            }

-----

### Q: Why do my apps display Application Not Responding (ANR) messages so often? 

A: ANR errors occur when the main UI thread of an app is blocked for a long period of time; the exact timeout period varies by Android version. To avoid ANRs during drawn-out sections of an app, **a good coding practice is to code long-term tasks into background or worker threads instead of using the app's main thread**. 

**Helpful links**: 

* [What's New for Android 'N' and the Impact on Zebra Developers](https://developer.zebra.com/community/home/blog/2018/08/03/what-s-new-for-android-n-and-the-impact-on-zebra-developers) | Zebra engineering 
* [What's New for Android 'O' and the Impact on Zebra Developers](https://developer.zebra.com/community/home/blog/2018/09/28/what-s-new-for-android-o-and-the-impact-on-zebra-developers) | Zebra engineering 
* [ANR basics](https://developer.android.com/topic/performance/vitals/anr) | Android development community
* [Keeping your app responsive](https://developer.android.com/training/articles/perf-anr) | Android development community
 
-----

## Also See

* **[Barcode Scanning Guide](../guide/barcode_scanning_guide)** | Recommendations for EMDK Barcode API usage
* **[General Programming Practices](../guide/programming_practices/)** | Recommendations for building scanning apps 
* **[EMDK vs. DataWedge](http://techdocs.zebra.com/help/#datawedgevsemdkcomparison)** | Which tool is best? A side-by-side comparison


