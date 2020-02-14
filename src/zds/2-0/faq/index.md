---
title: Frequently Asked Questions
layout: guide.html
product: ZDS
productversion: '2.0'
menu:
  items:
    - title: About
      url: /zds/2-0/about
    - title: Setup
      url: /zds/2-0/setup
    - title: FAQ
      url: /zds/2-0/faq
    - icon: fa fa-search
      url: /zds/2-0/search
---

###Q: What is the package name of the ZDS agent on the device?

####A: ZDS is implemented as two files:
#### • `com.symbol.dataanalytics.apk` | Main analytics engine (2 MB)
#### • `com.symbol.dataanalytics.dca.apk` | Data collection plug-in (0.2 MB)

-----

###Q: What is the server address and port number used by ZDS?

####A: ZDS uses the following server:

#### • Server address: http://analytics.zebra.com
#### • Server Port: 443

-----

###Q: How frequently does the ZDS Agent upload device data to the cloud?

####A: The default upload frequency is once every 24 hours.

-----

###Q: How much collected data is stored on the device each day?

####A: ZDS stores a maximum of 70 KB on the device each day.

-----

###Q: How much data is sent back during each upload?

####A: ZDS sends a maximum of 2 MB of (compressed) data with each upload.

-----

###Q: After data is uploaded from a device, where can it be viewed? 

####A: ZDS data can be viewed on the [Zebra Foresight](https://www.zebra.com/us/en/services/visibilityiq/foresight.html) server.  

-----

###Q: What is the ZDS device footprint?

####A: ZDS requires about 2.2 MB of device storage.

-----

###Q: Does ZDS self-update?

####A: Yes, ZDS updates its components every 3-4 months.

-----

###Q: Can any ZDS parameters can be changed? 

####A: Yes, ZDS allows changes to the following parameters: 

#### • Data collection (On/Off)
#### • Upload frequency (default = every 24 hrs.)
#### • Data collection for certain individual events

-----

###Q: How can the current ZDS parameters be changed? 

####A: The ZDS settings on a device can be changed in two ways: 
#### • Through the device UI (see [Setup section](../setup) for more info). 
#### • By scanning a barcode that contains changes to the [Analytics Manager CSP](/mx/analyticsmgr). 

-----

###Q: Where does the ZDS device-settings barcode come from? 

####A: The barcode for changing ZDS settings on a device is generated using Zebra StageNow. [Learn more](/stagenow). 

-----

###Q: What data is collected from the device? 

####A: ZDS collects data about device hardware, app info and usage, network communications, location and many other parameters. See the About ZDS page for a complete [list of data collected ](../about/#datacollected). 

-----

###Q: What devices are supported? 

####A: Most Zebra devices support data collection. See the About ZDS page for the full list of [supported devices](../about/#supporteddevices). 
