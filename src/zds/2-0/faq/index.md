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

####A: ZDS sends a maximum of 70 KB with each upload.

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

####A: To change ZDS paramaters on a device, use the device to scan a barcode that contains the desired settings. 

-----

###Q: Where does the ZDS device-settings barcode come from...can I generate it myself? 

####A: Yes, the barcode for changing ZDS settings on a device is generated using Zebra StageNow. 

