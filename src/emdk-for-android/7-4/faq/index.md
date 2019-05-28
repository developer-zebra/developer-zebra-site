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

A: Due to the many advancements in newer Android versions, some older apps require modification to run properly on newer flavors. Among the common causes of incompatibility of older apps relate to changes in background processing implemented mainly to optimize battery life. Learn more about [app migration at developer.android.com](https://developer.android.com/about/versions/pie/android-9.0-migration). 

`MORE INFO NEEDED FROM ENGINEERING`

-----

### Q: Zebra APIs appear to offer limited fault tolerance. How can my app adapt to this?

A: Retry the API command or gracefully exit the app. 

`MORE INFO NEEDED FROM ENGINEERING`

-----

### Q: Why do my apps display Application Not Responding (ANR) message so often? 

A: ANR errors often occur when too many threads are spawned on the main activity. Try spawning new threads in a separate process instead of the main activity. 

`MORE INFO NEEDED FROM ENGINEERING`
 
-----

## See Also

* **[Barcode Scanning Guide](../guide/barcode_scanning_guide)** | Recommendations for EMDK Barcode API usage
* **[General Programming Practices](../guide/programming_practices/)** | Recommendations for building scanning apps 
* **[EMDK vs. DataWedge](http://techdocs.zebra.com/help/#datawedgevsemdkcomparison)** | Which tool is best? A side-by-side comparison


