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

##### A: Control of scanning hardware is exclusive. When a scanning app takes control of scanning on the device, no other app can access any scanner on the device until control is programmatically released when the app quits or goes to the background.
<br>
<br>
[Learn how in the Barcode Scanning Guide](../guide/barcode_scanning_guide/#5releasescanner). 

-----

### Q: Why don't my KitKat and Lollipop apps work with Nougat or Oreo?

##### A: One common cause of incompatibility of older apps with newer versions of Android is changes in background processing implemented to optimize battery life. 
<br>
<br>
[Learn more about app migration from developer.android.com](https://developer.android.com/about/versions/pie/android-9.0-migration).

-----

### Q: Zebra APIs appear to offer limited fault tolerance. How can my app adapt to this?

##### A: Perform an API retry or gracefully exit the app. 

-----

### Q: Why do my apps display Application Not Responding (ANR) message so often? 

##### A: ANR errors often occur when too many threads are spawned on the main activity. Try spawning new threads instead of starting them all in the main activity. 
 
-----

## See Also

* **[Barcode Scanning Guide](../guide/barcode_scanning_guide/#5releasescanner)** | Recommendations for EMDK Barcode API usage
* **[General Programming Practices](../guide/programming_practices/)** | Recommendations for building scanning apps 
* **[EMDK vs. DataWedge](http://techdocs.zebra.com/help/#datawedgevsemdkcomparison)** | Which tool is best? A side-by-side comparison


