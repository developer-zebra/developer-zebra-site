---
title: Frequently Asked Questions
layout: guide.html
product: EMDK for Android
productversion: '7.4'
---

## About the FAQ 

Zebra's Enterprise Mobility Development Kit for Android extends the Android Studio IDE for Mac OS and Windows with tools for easily creating apps for Zebra Android devices. This page presents some of the most commonly asked questions by Zebra customers and partners according to Zebra customer support along with links to the relevant documentation. 

-----

### Q: Why did the scanner stop working when switching apps?

##### A: Control of scanning hardware is exclusive. When a scanning app takes control of scanning on the device, no other app can access any scanner on the device until control is programmatically released when the app quits or goes to the background. [Learn how](../guide/barcode_scanning_guide/#5releasescanner). 

-----

### Q: Why don't my KitKat and Lollipop apps work with Nougat or Oreo?

##### A: One common cause of incompatibility of older apps with newer versions of Android is changes in background processing implemented to optimize battery life. 

-----

### Q: Zebra APIs appear to offer limited fault tolerance. How can my app adapt to this?

##### A: Perform an API retry or gracefully exit the app. 

-----

### Q: Why do my apps display Application Not Responding (ANR) message so often? 

##### A: ANR errors often occur when too many threads are spawned on the main activity. Try spawning new threads instead of piling them onto the main activity. 

-----

### Q: What is an OemConfig Schema? 

A: An OemConfig Schema is the Managed Configuration Schema that defines the Managed Configurations exposed by an OemConfig application running on a device manufactured by the corresponding OEM. 
 
-----

## See Also

* **[EMMTK Glossary](../glossary)** | Defines terms used in the EMM Toolkit
* **[AEDO Porting](../port)** | EMM agent porting options 
* **[Persistence Best Practices](../persistence)** | Zebra-recommended processes for EMMs
* **[Staging Service APIs](../api)** | Interfacing with StageNow from an EMM console
* **[Build a DDUI from the Zebra OemConfig Schema (.pdf)](../../downloads/Zebra_EMMTK_Building_DDUI_from_OemConfig_Schema_091418.pdf)** | Breakdown of DDUI creation with Zebra OemConfig
* **[DA-to-DO Agent Porting Guide (.pdf)](../../downloads/Zebra_EMMTK_DA-to-DO_Porting_Guide_091418.pdf)** | Detailed porting information and guidance


