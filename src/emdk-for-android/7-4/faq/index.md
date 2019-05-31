---
title: Frequently Asked Questions
layout: guide.html
product: EMDK for Android
productversion: '7.4'
---

## About the FAQ 

Zebra's Enterprise Mobility Development Kit for Android extends the Android Studio IDE for Mac OS and Windows with tools for easily creating apps for Zebra Android devices. This page presents some of the most commonly asked questions by Zebra customers and partners of Zebra customer support along with brief answers and links to relevant documentation. 

-----

### Q: Why did the scanner stop working when switching apps?

A: Control of scanning hardware is exclusive. When a scanning app takes control of scanning on the device, no other app can access any scanner on the device until control is programmatically released when the app quits or goes to the background. Learn more in the [Barcode Scanning Guide](../guide/barcode_scanning_guide/#5releasescanner). 

-----

### Q: Why don't my KitKat and Lollipop apps work with Nougat or Oreo?

A: Due to the many advancements in newer Android versions, some older apps require modification to run properly on newer flavors. Among the common causes of incompatibility of older apps relate to changes in background processing implemented mainly to optimize battery life. `MORE INFO NEEDED FROM ENGINEERING`

When developing an app, Android developers can specify in the app manifest a target, minimum and maximum Android API level. This maps the app to specific Android OS versions for the app to run on. For example, if API level 23 is specified as the target level, it indicates that the app is intended to run on Android 6.0 (Marshmallow) and can filter the app from incompatible versions.

**Helpful links**: 

* [The Android '&lt;uses-sdk&gt;' parameter](https://developer.android.com/guide/topics/manifest/uses-sdk-element)
* [Android 7 Nougat behavior changes](https://developer.android.com/about/versions/nougat/android-7.0-changes)
* [Migrating to Android 8 Oreo](https://developer.android.com/about/versions/oreo/android-8.0-migration)
* [Migrating to Android 9 Pie](https://developer.android.com/about/versions/pie/android-9.0-migration)
* [Article by a Zebra engineer on Android Nougat](https://developer.zebra.com/community/home/blog/2018/08/03/what-s-new-for-android-n-and-the-impact-on-zebra-developers)
[Article by a Zebra engineer in Android Oreo](https://developer.zebra.com/community/home/blog/2018/09/28/what-s-new-for-android-o-and-the-impact-on-zebra-developers)

-----

### Q: Zebra APIs appear to offer limited fault tolerance. How can my app adapt to this?

A: Retry the API command or gracefully exit the app.  `MORE INFO NEEDED FROM ENGINEERING`

-----

### Q: Why do my apps display Application Not Responding (ANR) message so often? 

A: ANR errors occur when the main UI thread of an app is blocked for a long period of time. To avoid ANRs, a good practice when coding actions that are likely to take some time is to use background/worker threads instead of the main thread. `MORE INFO NEEDED FROM ENGINEERING`

**Helpful links**: 

* [ANR basics](https://developer.android.com/topic/performance/vitals/anr)

* [Keeping your app responsive](https://developer.android.com/training/articles/perf-anr) 
 
-----

## Also See

* **[Barcode Scanning Guide](../guide/barcode_scanning_guide)** | Recommendations for EMDK Barcode API usage
* **[General Programming Practices](../guide/programming_practices/)** | Recommendations for building scanning apps 
* **[EMDK vs. DataWedge](http://techdocs.zebra.com/help/#datawedgevsemdkcomparison)** | Which tool is best? A side-by-side comparison


