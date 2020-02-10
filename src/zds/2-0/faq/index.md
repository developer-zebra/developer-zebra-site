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

###Q: What is the package name of the ZDS agent?

####A: ZDS is implemented in two `.apk` files:
#### • `com.symbol.dataanalytics.apk` | Main analytics engine
#### • `com.symbol.dataanalytics.dca.apk` | Data collection plug-in

-----

###Q: What is the server address and port number used by ZDS?

####A: ZDS uses the following server:

#### • Server address: http://analytics.zebra.com
#### • Server Port: 443

-----

###Q: How frequently does the ZDS Agent upload device data to the cloud?

####A: The default upload frequency is once every 24 hours.

-----

###Q: How much data is sent back during each upload?

####A: ZDS sends as much as 70 KB of data with each upload.

-----

###Q: What is the device footprint size of the ZDS Agent?

####A: ZDS requires about 2.2 MB of device storage.

-----

###Q: Do ZDS agent software components self-update?

####A: Yes, ZDS updates itself and its plug-in about every 3-4 months.

-----

###Q: Can any ZDS parameters can be changed? 

####A: Yes, ZDS allows changes to the following parameters: 

#### • Data collection On/Off
#### • Upload frequency
#### • Data collection about some individual events

-----

###Q: How can the current ZDS parameters be changed? 

####A: To change ZDS paramaters on a device, use the device to scan a barcode that contains the desired settings. 

-----

###Q: Where does the ZDS device-settings barcode come from...can I generate it myself? 

####A: Yes, the barcode for changing ZDS settings on a device is generated using Zebra StageNow. 

