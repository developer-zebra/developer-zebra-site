---
title: SimulScan APIs
layout: guide.html
product: SimulScan
productversion: '1.1'
---
## Important
When acquiring data with a custom enterprise app, SimulScan features can be accessed directly through API calls or indirectly through [DataWedge](../../../../datawedge), a free app preinstalled on all Zebra Android devices. For organizations without an existing custom app that accesses device hardware, **DataWedge might be the easier and faster method** of using SimulScan. To further simplify implementation, SimulScan includes a number of [default Templates](../guide/setup/#usewithdatawedge) designed to cover most common scanning scenarios. For more advanced use-cases, custom Templates can be created [using Template Builder](../guide/templatebuilder/#usingtemplatebuilder)<!--or downloaded from Zebra's library of [Pre-built Templates](../templates). Downloaded Templates can be modified as needed using Template Builder-->. 

-----

### Use with DataWedge
DataWedge can acquire barcodes and other textual data using the device camera or 2D scanner; all API calls are handled internally. DataWedge can apply powerful processing capabilities to manipulate acquired data according to an infinite set of custom rules, and then pass that data in various ways to virtually any app. **DataWedge is designed to cover most scanning use cases**, and [setting up SimulScan with DataWedge](../guide/setup) takes just a few minutes. 

**Zebra recommends testing the DataWedge method first**, and to begin an API integration project only if DataWedge does not meet application requirements.

### Use with SimulScan APIs 
**For applications that already interface with device hardware and/or are performing image capture or other complex acquisitions**, it can sometimes be necessary or preferable to access SimulScan through its APIs. And while DataWedge itself can capture images, it delivers acquired images using an intent, which requires custom program code to process. 

**The SimulScan APIs (depicted below) are accessed from within** [EMDK for Android](../../../../emdk-for-android), Zebra's development environment for building Android applications. **Click on the image below to <u>leave SimulScan docs</u> and** [open EMDK's SimulScan API documentation](http://techdocs.zebra.com//emdk-for-android/6-0/api/reference/com/symbol/emdk/simulscan/package-summary.html).

**See also the following SimulScan API Guides and Tutorials**:

* **[SimulScan API Programmer's Guide](http://techdocs.zebra.com/emdk-for-android/6-3/guide/simulscan_guide/)**
* **[Using the SimulScan API with EMDK](http://techdocs.zebra.com/emdk-for-android/6-3/tutorial/tutSimulScanAPI/)**
* **[Capturing Critical Data with SimulScan APIs](http://techdocs.zebra.com/emdk-for-android/6-3/tutorial/tutSimulScanAPI/)**

[![img](apis.png)](http://techdocs.zebra.com//emdk-for-android/6-0/api/reference/com/symbol/emdk/simulscan/package-summary.html)

<!-- 
*[Licensing](../guide/license) is required for each device using one or more apps that access SimulScan through its APIs*. 
-->